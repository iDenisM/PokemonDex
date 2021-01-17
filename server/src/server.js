import 'cross-fetch/polyfill';
import path from 'path';
import fs from 'fs';
import express from 'express';
import cors from 'cors';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { getDataFromTree } from "@apollo/client/react/ssr";

import Layout from '../../client/src/App';
import rootReducers from '../../client/src/reducers';
import Html from './components/Html'

const app = express();
const basePort = 3002;

const corsOptions = {
  origin: 'http://localhost:3002',
  credentials: true // <-- REQUIRED backend setting
};
app.use(cors(corsOptions));

app.use('^/$', async (req, res) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'http://localhost:3010',
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie'),
      },
    }),
    cache: new InMemoryCache(),
  });

  const store = createStore(rootReducers);

  const App = (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Layout />
      </Provider>
    </ApolloProvider>
  );

  const reduxState = store.getState();

  getDataFromTree(App).then((content) => {
    const initialState = client.extract();

    const html = fs.readFile(path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html'), 'utf-8', (err, data) => {
      if (err) {
        console.log('ERROR');
        res.status(500)
        return res.send('Some error happend');
      }
      
      const html = <Html content={content} state={initialState} reduxState={reduxState} />;

      // renderToStaticMarkup
      res.status(200);
      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToStaticMarkup(html)}</div>`
        )
      );
    })
  });
});

app.use(express.static(path.resolve(__dirname, '..', '..', 'client', 'build')))

app.listen(basePort, () => console.log(
  `app Server is now running on http://localhost:${basePort}`
));
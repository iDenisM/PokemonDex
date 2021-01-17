import 'cross-fetch/polyfill';
import express from 'express';
// import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { getDataFromTree } from "@apollo/client/react/ssr";
import Layout from '../../client/src/App'


import Html from './components/Html';
// import App from '../../client/src/App';
import rootReducers from '../../client/src/reducers';

const app = express();
const basePort = 3000;

// const appMarkup = ReactDOMServer.renderToString(
//   <App />
// );

app.get('*', async (req, res) => {
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

    const html = <Html content={content} state={initialState} reduxState={reduxState} />;
  
    res.status(200);
    res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
    res.end();
  });
});

app.listen(basePort, () => console.log(
  `app Server is now running on http://localhost:${basePort}`
));
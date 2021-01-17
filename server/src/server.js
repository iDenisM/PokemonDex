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
// import fetch from 'cross-fetch';
import { getDataFromTree } from "@apollo/client/react/ssr";
import Layout from './components/App'


import Html from './components/Html';
// import App from '../../client/src/App';

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

  const App = (
    <ApolloProvider client={client}>
      <Layout />
    </ApolloProvider>
  );

  // const html = ReactDOMServer.renderToStaticMarkup(
  //   <Html children={appMarkup} />
  // );

  getDataFromTree(App).then((cc) => {
    // Extract the entirety of the Apollo Client cache's current state
    const initialState = client.extract();
  
    // Add both the page content and the cache state to a top-level component
    const html = <Html content={cc} state={initialState} />;
  
    // Render the component to static markup and return it
    res.status(200);
    res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
    res.end();
  });
});

app.listen(basePort, () => console.log(
  `app Server is now running on http://localhost:${basePort}`
));
import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { getDataFromTree } from "@apollo/client/react/ssr";
import App from '../src/App';
import Html from './routes/Html';

const PORT = 8000;
const app = express();

app.use((req, res) => {

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

  // The client-side App will instead use <BrowserRouter>
  const App = (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );

  getDataFromTree(App).then((content) => {
    // Extract the entirety of the Apollo Client cache's current state
    const initialState = client.extract();
  
    // Add both the page content and the cache state to a top-level component
    const html = <Html content={content} state={initialState} />;
  
    // Render the component to static markup and return it
    res.status(200);
    res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
    res.end();
  });
});


// app.use('^/$', (req, res, next) => {
//   fs.readFile(path.relative('./build/index.html'), 'utf-8', (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send('Some error happened');
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>', 
//         `<div id="root">${ReactDomServer.renderToString(<App />)}</div>`
//       )
//     );
//   })
// });

// app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
  console.log(`The SSR App launched on ${PORT}`)
});
import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Html from './components/Html';
import App from '../../client/src/App';

const app = express();

app.use(express.static(path.join(__dirname)));

const appMarkup = ReactDOMServer.renderToString(
  <App />
);

app.get('*', async (req, res) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html children={appMarkup} />
  );

  res.send(`<!doctype html>${html}`);
});

app.listen(3000, () => console.log('Listening on localhost:3000'));
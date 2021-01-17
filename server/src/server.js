import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Html from './components/Html';
// import App from './components/App';

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', async (req, res) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    <Html />
  );

  res.send(`<!doctype html>${html}`);
});

app.listen(3000, () => console.log('Listening on localhost:3000'));
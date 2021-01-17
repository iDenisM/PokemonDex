import React from 'react';

const Html = ({ content, state, reduxState }) => (
  <html>
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"/>
      <link href="/static/css/main.50c7a0b8.chunk.css" rel="stylesheet" />
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      <script dangerouslySetInnerHTML={{
        __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
        __html: `window.__PRELOADED_STATE__=${JSON.stringify(reduxState).replace(/</g, '\\u003c')};`,
      }} />
    </body>
  </html>
);

export default Html;
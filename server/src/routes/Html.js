import React from 'react';

const Html = ({ content, state }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>SSR Render Test2</title>
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      <script dangerouslySetInnerHTML={{
        __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
      }} />
      <script src="/static/bundle.js" charSet="UTF-8" />
    </body>
  </html>
);

export default Html;
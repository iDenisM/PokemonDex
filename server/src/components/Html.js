import React from 'react';

const Html = ({ content, state, reduxState }) => (
  <html>
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
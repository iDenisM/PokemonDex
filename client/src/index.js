import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import { 
  ApolloClient, 
  InMemoryCache,
  HttpLink,
  ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql-pokemon2.vercel.app/'
  }),
  cache: new InMemoryCache()
});

let store = createStore(rootReducers);

// ReactDOM.render(   //USE THIS FOR CSR
ReactDOM.hydrate(   //USE THIS FOR SSR
  <ApolloProvider client={client}>
    <React.StrictMode> {/* Remove react strict mode at the end of the project */}
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

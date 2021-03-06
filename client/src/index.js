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

const memoryCache = () => {
  if (window.__APOLLO_STATE__){
    return new InMemoryCache().restore(JSON.parse(window.__APOLLO_STATE__))
  }
  return new InMemoryCache();
}

const preloadedState = () => {
  if (!window.__PRELOADED_STATE__) return {};
  const cachedState = window.__PRELOADED_STATE__;
  delete window.__PRELOADED_STATE__;

  return cachedState
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql-pokemon2.vercel.app/'
  }),
  cache: memoryCache()
});

let store = createStore(rootReducers, preloadedState());

// ReactDOM.render(
ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

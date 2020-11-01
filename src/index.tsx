import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {loader} from "graphql.macro";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import reportWebVitals from './reportWebVitals';

const query = loader('./query.graphql');

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache()
});

client.query({query}).then(v => console.log(v));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

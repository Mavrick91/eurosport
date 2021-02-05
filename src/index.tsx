import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './screen/Homepage';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './style/index.css';

const client = new ApolloClient({
  uri: 'https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Homepage />
    </ApolloProvider>
  </React.StrictMode>,

  document.getElementById('root'),
);

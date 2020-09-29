import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {gql, ApolloProvider, InMemoryCache, ApolloClient} from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom'
import swDev from './swDev';

const client= new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
    <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

swDev();
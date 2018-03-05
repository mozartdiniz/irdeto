import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import CurrencyEvaluator from './containers/CurrencyEvaluator';
import Login from './containers/Login/Login';
import Auth0Callback from './components/Auth0Callback/Auth0Callback';

import styles from './App.css';

class App extends Component {
  render() {
    return (
        <div className={styles.App}>
          <Route path="/callback" render={(props) => <Auth0Callback {...props} />} />
          <Layout>
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route path="/" exact render={(props) => <CurrencyEvaluator {...props} />} />
          </Layout>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Auth from '../../hoc/Auth0/Auth0';

import styles from './style.css';

class Login extends Component {
    render() {
        return(
            <div className={styles.Login}>
                <h1>Awesome Cryptocurrencies Evaluator</h1>
                <button onClick={this.props.login}>Login</button>
            </div>
        );
    }
  }

  export default Auth(Login);

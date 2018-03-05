import React, { Component } from 'react';
import { withRouter } from 'react-router';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';

export default function AuthHOC(WrappedComponent) {
  class Auth extends Component {
    auth0 = new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientId,
      redirectUri: AUTH_CONFIG.callbackUrl,
      audience: `https://${AUTH_CONFIG.domain}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid'
    });

    login = () => {
      this.auth0.authorize();
    }

    handleAuthentication = () => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          this.props.history.push('/');
        } else if (err) {
          this.props.history.push('/login');
          alert(`Error: ${err.error}. Check the console for further details.`);
        }
      });
    }

    setSession = (authResult) => {
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
      // navigate to the home route
      this.props.history.push('/');
    }

    logout = () => {
      // Clear access token and ID token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      // navigate to the home route
      this.props.history.push('/login');
    }

    isAuthenticated = () => {
      // Check whether the current time is past the
      // access token's expiry time
      let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }

    userName = () => {
      console.log(this.auth0);
    }

    render() {
      return <WrappedComponent
        login={this.login}
        logout={this.logout}
        isAuthenticated={this.isAuthenticated}
        handleAuthentication={this.handleAuthentication}
        {...this.props}
      />;
    }
  }

  return withRouter(Auth);
}

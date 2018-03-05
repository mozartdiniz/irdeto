import React, { Component } from 'react';

import Auth from '../hoc/Auth0/Auth0';

class Login extends Component {
    render() {
        return(
            <div>                
                <button onClick={this.props.login}>Login</button>
            </div>
        );
    }
  }
  
  export default Auth(Login);
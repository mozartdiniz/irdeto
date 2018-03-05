import React, { Component } from 'react';

import Auth from '../hoc/Auth0/Auth0';

class CurrencyEvaluator extends Component {
    render() {
        return(
            <h1> Currency Evaluator! </h1>
        );
    }
}

export default Auth(CurrencyEvaluator);
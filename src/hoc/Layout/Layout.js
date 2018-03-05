import React, { Component } from 'react';

import LogoutButton from '../../components/LogoutButton/LogoutButton';
import auth0 from '../Auth0/Auth0';
import Login from '../../containers/Login';

class Layout extends Component {
    getUser = () => {

    }
    render() {
        const { logout } = this.props;
        this.getUser();

        return(
            <div>
                { (this.props.isAuthenticated())
                    ? <div>
                        authenticated
                        <LogoutButton action={logout} />
                        { this.props.children }
                        </div>
                    : <Login />
                }
            </div>
        );
    }
}

export default auth0(Layout);

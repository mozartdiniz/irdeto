import React, { Component } from 'react';

import LogoutButton from '../../components/LogoutButton/LogoutButton';
import auth0 from '../Auth0/Auth0';
import Login from '../../containers/Login';

import styles from './style.css';

class Layout extends Component {
    getUser = () => {

    }
    render() {
        const { logout } = this.props;
        this.getUser();

        return(
            <div className={styles.Layout}>
                { (this.props.isAuthenticated())
                    ? <div>
                        <div className={styles.UserInfo}>
                            Welcome, user | <LogoutButton action={logout} />
                        </div>
                        { this.props.children }
                        </div>
                    : <Login />
                }
            </div>
        );
    }
}

export default auth0(Layout);

import React from 'react';

const LogoutButton = (props) => (
    (props.action) ? <button onClick={props.action}>Log out</button> : null
);

export default LogoutButton;
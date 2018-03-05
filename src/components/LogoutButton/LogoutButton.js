import React from 'react';

const LogoutButton = (props) => (
    (props.action) ? <button onClick={props.action} className={props.className}>Log out</button> : null
);

export default LogoutButton;

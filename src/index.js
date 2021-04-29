import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import './style.css'

import {Auth0Provider} from '@auth0/auth0-react';

const domain = process.env.REACT_APP_DOMAIN;
const client_id = process.env.REACT_APP_CLIENT_ID;
console.log('domain' + domain)
console.log('client id ' + client_id)

ReactDom.render(
<Auth0Provider responseType='id_token token' domain={domain} clientId={client_id} redirectUri={window.location.origin} >
    <App />
</Auth0Provider>,
document.querySelector("#root")
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-fxtuxl0mqujeteaf.us.auth0.com"
    clientId="QWHRQSlRrsoV97IM3V9mtLhicZAU9q4M"
    // clientId="DIz7yAvJoZObjH7DlJUcHSzj1r5kL24o"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

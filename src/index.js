//REACT
import React from 'react';
import { createRoot } from 'react-dom/client';

//CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTS
import App from './components/General/App';

//AUTH
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authentication/authConfig';

const msalInstance = new PublicClientApplication(msalConfig);
const root = createRoot(document.getElementById('root'));

if (window.location.hash !== ''){
  console.log("hash found" + window.location.hash);
}
else {
root.render(
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
)};
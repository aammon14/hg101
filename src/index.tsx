import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import App from './App';

ReactDOM.render(
    <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: 'con' })}>
        <App />
    </StylesProvider>
    , document.querySelector('#root'));
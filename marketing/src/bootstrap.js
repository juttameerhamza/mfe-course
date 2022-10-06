import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import App from './App';

const mount = (el) => {
    ReactDOM.render(
        <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: 'ma' })}>
            <Router>
                <App />
            </Router>
        </StylesProvider>
        , el
    )
}

if (process.env.NODE_ENV) {
    const devRoot = document.querySelector('#dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };
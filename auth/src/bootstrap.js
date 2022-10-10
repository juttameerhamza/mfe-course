import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import App from './App';

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: 'au' })}>
            <Router history={history}>
                <App onSignIn={onSignIn} />
            </Router>
        </StylesProvider>
        , el
    )

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#dev-root');
    // const defaultHistory = createBrowserHistory();

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory(), initialPath: '/' });
    }
}

export { mount };
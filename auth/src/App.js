import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';

const App = ({ onSignIn }) => {
    return (
        <Switch>
            <Route path="/auth/signin">
                <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
                <Signup onSignIn={onSignIn} />
            </Route>
        </Switch>
    )
}

export default App;
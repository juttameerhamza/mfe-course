import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Pricing from './components/Pricing';
import Landing from './components/Landing';

const App = () => {
    return (
        <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
        </Switch>
    )
}

export default App;
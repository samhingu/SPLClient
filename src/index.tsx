import * as React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from "react-router";

import App from "./components/app";

class Hello extends React.Component<{}, {}>{
    render() {
        return <h1>Hello from </h1>
    }
}

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component ={Hello} />
        </Route>
    </Router>
    , document.getElementById('root'))

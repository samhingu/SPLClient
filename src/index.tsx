
import * as React from "react"
import { render } from "react-dom"
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from "react-router"

import App from "./components/App"
import Hello from "./components/Hello"
import About from "./components/About"
import Links from "./containers/Links";

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component ={Hello} />
            <Route path="/Hello" component ={Hello} />
            <Route path="/About" component ={About} />
            <Route path="/Link" component ={Links} />
        </Route>
    </Router>
    , document.getElementById('root'))

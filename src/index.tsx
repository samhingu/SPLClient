import "../bower_components/jquery/dist/jquery"
//import "../bower_components/semantic/dist/semantic.css"
import "../bower_components/semantic/src/semantic.less"
//import "semantic"

import * as React from "react"
import { render } from "react-dom"
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from "react-router"

import App from "./containers/App"
import Links from "./containers/Links"
import Hello from "./components/Hello"


render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component ={Hello} />
            <Route path="/Hello" component ={Hello} />
            <Route path="/Link" component ={Links} />
        </Route>
    </Router>
    , document.getElementById('root'))

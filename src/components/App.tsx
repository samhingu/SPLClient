import * as React from "react";
import { Link } from "react-router";
import { Provider } from "react-redux";

import configureStore from "../store/index";

interface Props extends React.Props<App> {

}

const store = configureStore();

export default class App extends React.Component<Props, {}> {
    public render() {
        return (
            <Provider store={store}>
                <div>
                    <Link to="/Hello" >Hello</Link>
                    <Link to="/About" >About</Link>
                    <Link to="/Link" >Link</Link>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

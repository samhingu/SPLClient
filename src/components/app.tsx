import * as React from "react";

import { Provider } from "react-redux";

import configureStore from "../store/index";

interface Props extends React.Props<App> {

}

const store = configureStore();

class App extends React.Component<Props, {}> {
    public render() {
        return (
            <Provider store={store}>
                {this.props.children}
            </Provider>
        )
    }
}

export default App

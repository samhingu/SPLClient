import * as React from "react"

import { Link } from "../models/Link";

interface Props extends React.Props<App> {
    link: Link
}

export default class App extends React.Component<Props, {}> {
    public render() {
        return (
            <div>
                {this.props.link.title}
            </div>
        )
    }
}

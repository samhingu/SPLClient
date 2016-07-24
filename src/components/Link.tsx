import * as React from "react"

import { ILink } from "../models/Link"

interface Props extends React.Props<App> {
    link: ILink
}

// alternate way to define prop inline
// export default class App extends React.Component<{ link: ILink }, {}> {
export default class App extends React.Component<Props, {}> {
    public render() {
        return (
            <tr>
                <td>  {this.props.link.title}</td>
            </tr>
        )
    }
}

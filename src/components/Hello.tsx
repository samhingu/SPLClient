import * as React from "react"

export default class Hello extends React.Component<{}, {}>{
    render() {
        return <div className="ui segment">
            <h2 className="ui header">Home</h2>
            <div className="ui clearing divider"></div>
            <p>
                Home Content Goes Here
            </p>
        </div>
    }
}

import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as LinkActions from "../actions/Link"
import { ILink, IState2 } from "../models/Link"
import LinkComponent from "../components/Link"

interface Props extends React.Props<Links> {
    links: IState2,
    createLink: (link: ILink) => void
}

const mapStateToProps = (state) => {
    return {
        links: state.links
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createLink: (link) => { return dispatch(LinkActions.getLinks()) }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Links extends React.Component<Props, {}>{
    public componentWillMount() {
        // load links
    }
    public render() {
        if (!this.props.links) return (<div>No Links</div>)
        var loadingClass = this.props.links.isLoading ? "ui active centered inline loader" : "ui disable centered inline loader"
        var modal_classes = this.props.links.isLoading ? 'ui small modal transition visible active' : 'ui small modal transition hidden'

        return (
            <div>
                <button onClick={e => this.props.createLink({ _id: '0', title: 'New Link', body: 'body one', createdOn: 'on created this time' })} >Add</button>
                <div> errorMessage : {this.props.links.errorMessage}</div>
                <div>TOTAL : {this.props.links.links.length}</div>

                <table className="ui compact celled definition table">
                    <thead className="full-width">
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.links.links.map((link) =>
                            <LinkComponent link={link} key={link._id}></LinkComponent>
                        )}
                        <tr>
                            <th>
                                <div className={loadingClass}></div>
                            </th>
                        </tr>
                    </tbody>
                    <tfoot className="full-width">
                        <tr>
                            <th>
                                <div className="ui right floated small labeled icon button">
                                    <i className="user icon"></i> Add Link
                                </div>
                            </th>
                        </tr>
                    </tfoot>
                </table>
                <div className={modal_classes}>
                    <div className="ui center aligned header">Hello</div>
                    <div className="content">
                        <p>World</p>
                    </div>
                </div>
            </div>
        )
    }
}

import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
//import { toastr } from 'redux-toastr'

import * as LinkActions from "../actions/Link"
import { ILink, IState2 } from "../models/Link"
import LinkComponent from "../components/Link"

interface Props extends React.Props<Links> {
    links: IState2,
    createLink: (link: ILink) => void,
    getLinks: () => void
}

const mapStateToProps = (state) => {
    return {
        links: state.links,
        toastrReducer: state.toastrReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLinks: () => { return dispatch(LinkActions.getLinks()) },
        createLink: (link) => { return dispatch(LinkActions.getLinks()) }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Links extends React.Component<Props, {}>{
    public componentDidMount() {
        this.props.getLinks();
    }
    public showAddDialog() {
        //  toastr.success('The title', 'The message')
    }
    // <button onClick={e => this.props.createLink({ _id: '0', title: 'New Link', body: 'body one', createdOn: 'on created this time' })} >Add</button>
    public render() {
        var modal_classes = this.props.links.isLoading ? 'ui small modal transition visible active' : 'ui small modal transition hidden'
        return (
            <div>
                <button onClick={e => this.showAddDialog()}>Add</button>
                {this.props.links.errorMessage == "" || <div className="ui left floated">errorMessage : {this.props.links.errorMessage}</div>}
                {this.props.links.errorMessage != "" || this.linkGrid()}
                <div className={modal_classes}>
                    <div className="ui center aligned header">Hello</div>
                    <div className="content">
                        <p>World</p>
                    </div>
                </div>

            </div>
        )
    }
    public linkGrid() {
        if (!this.props.links) return (<div>No Links</div>)
        var loadingClass = this.props.links.isLoading ? "ui active centered inline loader" : "ui disable centered inline loader"
        return <div>
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
            </table>
        </div>
    }
}

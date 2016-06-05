import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as LinkActions from "../actions/Link";
import { Link, IState2 } from "../models/Link";

interface Props extends React.Props<Links> {
    links: IState2,
    createLink: (link: Link) => void;
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
        if (!this.props.links)
            return (<div>No Links</div>)

        return (
            <div>
                <div> LOADING : {this.props.links.isLoading.toString() }</div>
                <div> errorMessage : {this.props.links.errorMessage}</div>
                <div></div>
                <div>HAVING LINKS TOTAL : {this.props.links.links.length}</div>
                { this.props.links.links.map((link) =>
                    <li key={link._id}>{link.title}</li>
                ) }
                <button onClick={e => this.props.createLink({ _id: '0', title: 'New Link', body: 'body one', createdOn: 'on created this time' }) } >Add</button>
            </div>
        )
    }
}

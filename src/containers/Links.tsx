import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as LinkActions from "../actions/Link";
import { Link } from "../models/Link";

interface Props extends React.Props<Links> {
    links: Link[],
    createLink: (link: Link) => void;
}

const mapStateToProps = (state) => {
    return {
        links: state.links
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createLink: (link) => { return dispatch(LinkActions.createLink(link)) }
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
                <div>HAVING LINKS TOTAL : {this.props.links.length}</div>
                { this.props.links.map((link) =>
                    <li key={link._id}>{link.title}</li>
                ) }
                <button onClick={e => this.props.createLink({ _id: '0', title: 'New Link', body: 'body one', createdOn: 'on created this time' }) } >Add</button>
            </div>
        )
    }
}

import * as React from "react";

export default class About extends React.Component<{}, {}>{
    render() {
        return <div className="ui cards">
            <div className="ui card link fluid">
                <div className="content">
                    <div className="header">Cute Dog</div>
                    <div className="meta">
                        <span className="right floated time">2 days ago</span>
                        <span className="category">Animals</span>
                    </div>
                    <div className="description">
                        <p>test description</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="right floated author">
                        <img className="ui avatar image" src="/images/avatar/small/matt.jpg" /> Matt
                    </div>
                </div>
            </div>
            <div className="ui card link fluid">
                <div className="content">
                    <div className="header">Cute Dog</div>
                    <div className="meta">
                        <span className="right floated time">2 days ago</span>
                        <span className="category">Animals</span>
                    </div>
                    <div className="description">
                        <p>test description</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="right floated author">
                        <img className="ui avatar image" src="/images/avatar/small/matt.jpg" /> Matt
                    </div>
                </div>
            </div>
            <div className="ui card link fluid">
                <div className="content">
                    <div className="header">Cute Dog</div>
                    <div className="meta">
                        <span className="right floated time">2 days ago</span>
                        <span className="category">Animals</span>
                    </div>
                    <div className="description">
                        <p>test description</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="right floated author">
                        <img className="ui avatar image" src="/images/avatar/small/matt.jpg" /> Matt
                    </div>
                </div>
            </div>
        </div>
    }
}

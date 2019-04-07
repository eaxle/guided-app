import React, {Component} from 'react';
// import {ListGroup, ListGroupItem} from 'react-bootstrap';

// import {NavLink, Link} from "react-router-dom";

class OfficialDocsSettingsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };

    }

    onChange = date => this.setState({date});

    render() {

        return (
            <div className="container-fluid2 container ">
                this is official document section
            </div>
        )
    }
}

export default OfficialDocsSettingsView;

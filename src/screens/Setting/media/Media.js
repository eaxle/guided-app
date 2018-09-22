import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {NavLink, Link} from "react-router-dom";

class Media extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };

    }


    render() {

        return (
            <div className="container-fluid2 container ">
                this is Media setting pages
            </div>
        )
    }
}

export default Media;

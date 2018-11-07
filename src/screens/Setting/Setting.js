import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './personInf/styles.css';
import {NavLink, Link} from "react-router-dom";

class Setting extends Component {
    state = {
        date: new Date(),
    };

    onChange = date => this.setState({date});

    render() {
        return (
            <div className="container-fluid2 container ">
                <ListGroup>
                    <ListGroupItem className="text-left">
                        <h5>Settings</h5></ListGroupItem>
                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/PersonInf"}}>
                        <div>
                            <h4>Personal Information</h4>
                            <h6>Update your name, email, and phone number.</h6>
                        </div>
                    </NavLink>

                    </ListGroupItem>
                    <ListGroupItem className="subtext-left" hearder=""><NavLink
                        to={{pathname: "/setting/officialdoc"}}><h4>Official Documents</h4></NavLink>
                        <h6>Upload government ID and other certifications.</h6></ListGroupItem>

                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/payment"}}>
                        <h4>Payments Settings</h4>
                        <h6>Manage your transact.</h6></NavLink></ListGroupItem>

                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/security"}}>
                        <h4>Security</h4>
                        <h6>Change your password.</h6></NavLink></ListGroupItem>

                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/privacy"}}>
                        <h4>Privacy</h4>
                        <h6>Control your information.</h6></NavLink></ListGroupItem>

                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/ad"}}>
                        <h4>Advertising</h4>
                        <h6>Set your preferences and learn how our ads work.</h6></NavLink></ListGroupItem>

                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/notification"}}>
                        <h4>Notifications</h4>
                        <h6>Decide how we should contact you.</h6></NavLink></ListGroupItem>

                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/media"}}>
                        <h4>Media</h4>
                        <h6>Manage image, video, and sound controls.</h6></NavLink></ListGroupItem>

                    <ListGroupItem className="subtext-left"><h4>Your Guided Activity</h4>
                        <h6>View, download, and delete your information.</h6></ListGroupItem>
                    <ListGroupItem className="subtext-left"><h4>Legals and Policies</h4>
                        <h6>Our expectations and commitments to users.</h6></ListGroupItem>
                </ListGroup>
            </div>

        )
    }
}

export default Setting;

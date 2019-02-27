import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './personInf/styles.css';
import {NavLink} from "react-router-dom";

class Setting extends Component {
    state = {
        date: new Date(),
    };

    onChange = date => this.setState({date});

    render() {
        return (
            <div className="container-fluid2 container ">
                <ListGroup>
                    <ListGroupItem className="text-left titleSize">
                        <h4 className="thick">Settings (h4 bold)</h4>
                        <h5 className="thick">Settings (h5 bold)</h5>
                    </ListGroupItem>
                    <ListGroupItem className="subtext-left titleSize"><NavLink to={{pathname: "/setting/PersonInf"}} className="inactive" activeClassName="active" exact={true}>
                        <div>
                            <h4 className="thick">Personal Information (h4 bold)</h4>
                            <h6>Update your name, email, and phone number.</h6>
                        </div>
                    </NavLink>

                    </ListGroupItem>
                    <ListGroupItem className="subtext-left" hearder=""><NavLink
                        to={{pathname: "/setting/officialdoc"}} className="inactive" activeClassName="active" exact={true}><h4 className="normal">Official Documents (h4 normal)</h4></NavLink>
                        <h6>Upload government ID and other certifications.</h6></ListGroupItem>

                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/payment"}} className="inactive" activeClassName="active" exact={true}>
                        <h5 className="normal">Payments Settings (h5 normal)</h5>
                        <h6>Manage your transact.</h6></NavLink></ListGroupItem>

                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/security"}} className="inactive" activeClassName="active" exact={true}>
                        <h5 className="thick">Security (h5 bold)</h5>
                        <h6>Change your password.</h6></NavLink></ListGroupItem>

                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/privacy"}} className="inactive" activeClassName="active" exact={true}>
                        <h4 className="medium">Privacy (h4 medium)</h4>
                        <h4 className="lighter">Notifications (h4 lighter)</h4>
                        <h4 className=""> Notifications (h4 nothing)</h4>
                        <h6>Control your information.</h6></NavLink></ListGroupItem>

                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/ad"}} className="inactive" activeClassName="active" exact={true}>
                        <h5 className="medium">Advertising (h5 medium)</h5>
                        <h6>Set your preferences and learn how our ads work.</h6></NavLink></ListGroupItem>

                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/notification"}} className="inactive" activeClassName="active" exact={true}>
                        <h4 className="lighter">Notifications (h4 lighter)</h4>
                        <h6>Decide how we should contact you.</h6></NavLink></ListGroupItem>

                    <ListGroupItem className="subtext-left"><NavLink to={{pathname: "/setting/media"}} className="inactive" activeClassName="active" exact={true}>
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

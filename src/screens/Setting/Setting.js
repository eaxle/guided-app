import React, { Component } from 'react';
// import Calendar from 'react-calendar';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';
import {NavLink, Link } from "react-router-dom";


// var ScrollArea = require('react-scrollbar');
// var ReactDOM = require('react-dom');
// var React = require('react');
class Setting extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="container-fluid2 container ">
            <div>
                <ListGroup>
                    <ListGroupItem className="text-left">
                    <h5>Settings</h5></ListGroupItem>
                    <ListGroupItem className="subtext-left" ><NavLink to="/PersonInf" className = "">
                    <div>
                    <h4>Personal Information</h4>
                    <h6>Update your name, email, and phone number.</h6>
                    </div>
                    </NavLink>

                    </ListGroupItem>
                    <ListGroupItem className="subtext-left" href ="https://react-bootstrap.github.io/components/list-group/#link1" hearder="" >Official Documents
                    <h6>Upload government ID and other certifications.</h6></ListGroupItem>
                    <ListGroupItem className="subtext-left">Payments Settings
                    <h6>Manage your transact.</h6></ListGroupItem>
                    <ListGroupItem className="subtext-left">Security
                    <h6>Change your password.</h6></ListGroupItem>
                    <ListGroupItem className="subtext-left">Privacy
                    <h6>Control your information.</h6></ListGroupItem>
                    <ListGroupItem className="subtext-left">Advertising
                    <h6>Set your preferences and learn how our ads work.</h6></ListGroupItem>
                    <ListGroupItem className="subtext-left">Notifications
                    <h6>Decide how we should contact you.</h6></ListGroupItem>
                    <ListGroupItem className="subtext-left">Media
                    <h6>Manage image, video, and sound controls.</h6></ListGroupItem>
                    <ListGroupItem className="subtext-left">Your Guided Activity
                    <h6>View, download, and delete your information.</h6></ListGroupItem>
                    <ListGroupItem className="subtext-left">Legals and Policies
                    <h6>Our expectations and commitments to users.</h6></ListGroupItem>
                </ListGroup>
            </div>
      </div>

    )
  }
}
export default Setting;

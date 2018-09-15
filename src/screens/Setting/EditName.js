import React, { Component } from 'react';
// import Calendar from 'react-calendar';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';
import {NavLink, Link } from "react-router-dom";


// var ScrollArea = require('react-scrollbar');
// var ReactDOM = require('react-dom');
// var React = require('react');
class EditName extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="container-fluid2 container ">
                <div>
                    <ListGroup>
                        <div className="hearderbackground">

                            <ListGroupItem className="text-left">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className="tableWidth"> <h4>Name</h4> </td>
                                        <td className=""><div><button className="btn btnEdit float-right ">Edit</button></div></td>
                                    </tr>
                                    </tbody>
                                </table></ListGroupItem>
                            <ListGroupItem className="text-left">
                                <h4>First Name</h4> <h6>Edward</h6>
                            </ListGroupItem>
                            <ListGroupItem className="text-left">
                                <h4>Last Name</h4> <h6>Smith</h6>
                            </ListGroupItem>
                            <ListGroupItem className="text-left">
                                <h4>Preferred Name</h4> <h6>John</h6>
                            </ListGroupItem>
                            <ListGroupItem className="text-left">
                                <h4>Please Note</h4><h6>At Guided we take the accuracy of names seriously for legal and banking reasons.
                                A change to a First or Last Name will require corresponding changes to appear on payment and government
                                documents that you may have, or will provide. Click  <a href = "null">here</a> to visit your government issued documents.</h6>
                            </ListGroupItem>

                        </div>
                    </ListGroup>
                </div>
            </div>

        )
    }
}
export default EditName;

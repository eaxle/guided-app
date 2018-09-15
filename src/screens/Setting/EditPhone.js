import React, { Component } from 'react';
import IntlTelInput from 'react-intl-tel-input';
import /*'file?name=libphonenumber.js!*/'../../../node_modules/react-intl-tel-input/dist/libphonenumber.js';
import '../../../node_modules/react-intl-tel-input/dist/main.css';

import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';
import {NavLink, Link } from "react-router-dom";


// var ScrollArea = require('react-scrollbar');
// var ReactDOM = require('react-dom');
// var React = require('react');
class EditPhone extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="container-fluid2 container ">
                <div>
                    <ListGroup>
                        <div className="">

                            <ListGroupItem className="text-left">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className="tableWidth"> <h4>Phone</h4> </td>
                                        <td ><div><button className="btn btnSave float-right ">Save</button></div></td>
                                        <td className=""><div><button className="btn btnCancel float-right ">Cancel</button></div></td>
                                    </tr>
                                    </tbody>
                                </table></ListGroupItem>
                            <ListGroupItem className="text-left">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className = ""> <h4>Phone Number</h4> <h6>+612345556</h6></td>
                                    </tr>
                                    <tr>
                                        <div className="form-group">
                                            <IntlTelInput
                                                preferredCountries={['au']}
                                                onPhoneNumberChange={this.handler}
                                                onPhoneNumberBlur={this.handler}
                                                css={['intl-tel-input', 'form-control']}
                                                utilsScript={'libphonenumber.js'}
                                                defaultValue={this.state.phone}
                                            />
                                        </div>
                                    </tr>
                                    </tbody>
                                </table>
                            </ListGroupItem>
                            <div className="errorMessage">
                                <h6>ERROR: The phone number that you have entered is incomplete or
                                    matches that of another user. Please try again.</h6></div>
                        </div>
                    </ListGroup>
                </div>
            </div>
        )
    }
}
export default EditPhone;

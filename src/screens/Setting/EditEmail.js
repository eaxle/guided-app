import React, { Component } from 'react';
// import Calendar from 'react-calendar';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';
import {NavLink, Link } from "react-router-dom";



class EditEmail extends Component {
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
                                        <td className="tableWidth"> <h4>Email</h4> </td>
                                        <td ><div><button className="btn btnSave float-right ">Save</button></div></td>
                                        <td className=""><div><button className="btn btnCancel float-right ">Cancel</button></div></td>
                                    </tr>
                                    </tbody>
                                </table></ListGroupItem>
                            <ListGroupItem className="text-left">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className = ""> <h4>Email Address</h4> <h6>John.smith@gmail.com</h6></td>
                                        <td className="tableWidth2"><div>
                                            <input type="text" className="email-input " id="usr" name="username" />
                                        </div></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </ListGroupItem>
                            <div className="errorMessage">
                                <h6>ERROR: The email address that you have entered is incomplete or matches that of
                                    another user. Please try again.</h6></div>


                        </div>
                    </ListGroup>
                </div>
            </div>
        )
    }
}
export default EditEmail;

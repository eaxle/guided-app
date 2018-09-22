import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
import {NavLink, Link} from "react-router-dom";

class PersonInf extends Component {

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
                <div>
                    <ListGroup>
                        <div className="hearderbackground">
                            <ListGroupItem className="text-left">
                                <h4>Personal Information</h4></ListGroupItem></div>
                        <ListGroupItem className="text-left">
                            <h4>Name</h4> <h6>John Smith</h6>
                        </ListGroupItem>

                        <ListGroupItem className="text-left">
                            <table>
                                <tbody>
                                <tr>
                                    <td className="tableWidth"><h4>Email Address</h4> <h6>john.smith@gmail.com</h6></td>
                                    <td className="">
                                        <div>
                                            <button className="btn btnEdit float-right "><NavLink
                                                to={{pathname: "/setting/PersonInf/email"}}>Edit</NavLink></button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </ListGroupItem>

                        <ListGroupItem className="text-left">
                            <table>
                                <tbody>
                                <tr>
                                    <td className="tableWidth"><h4>Phone Number</h4> <h6>+61 431 089 366</h6></td>
                                    <td className="">
                                        <div>
                                            <button className="btn btnEdit float-right "><NavLink
                                                to={{pathname: "/setting/PersonInf/phone"}}>Edit</NavLink></button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </ListGroupItem>
                        <ListGroupItem className="text-left">
                            <table>
                                <tbody>
                                <tr>
                                    <td className="tableWidth"><h4>Gender</h4> <h6>Male</h6></td>
                                    <td className="">
                                        <div>
                                            <button className="btn btnEdit float-right "><NavLink
                                                to={{pathname: "/setting/PersonInf/gender"}}>Edit</NavLink></button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </ListGroupItem>
                        <ListGroupItem className="text-left">
                            <table>
                                <tbody>
                                <tr>
                                    <td className="tableWidth"><h4>Date of Birth</h4> <h6>8 August 1988</h6></td>
                                    <td className="">
                                        <div>
                                            <button className="btn btnEdit float-right "><NavLink
                                                to={{pathname: "/setting/PersonInf/dob"}}>Edit</NavLink></button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </ListGroupItem>
                        <ListGroupItem className="text-left">
                            <table>
                                <tbody>
                                <tr>
                                    <td className="tableWidth"><h4>Languages Spoken</h4> <h6>English </h6><h6>Chinese
                                        (Mandarin)</h6><h6> Spanish</h6></td>
                                    <td className="">
                                        <div>
                                            <button className="btn btnEdit float-right "><NavLink
                                                to={{pathname: "/setting/PersonInf/language"}}>Edit</NavLink></button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default PersonInf;

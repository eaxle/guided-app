import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
import {NavLink} from "react-router-dom";
import {client} from '../../../index';
import gql from "graphql-tag";

const GET_USER_NAME = gql`
    query getUserNameById($user_id:String!){
        getUserNameById(user_id:$user_id) {
            first_name
            last_name
            preferred_name
        }
    }
`;
const GET_USER_EMAIL = gql`
    query getUserEmailById($user_id:String!){
        getUserEmailById(user_id:$user_id) {
            email
        }
    }
`;
const GET_USER_PHONE = gql`
    query getUserPhoneNumberById($user_id:String!){
        getUserPhoneNumberById(user_id:$user_id) {
            phone_number
        }
    }
`;
const GET_USER_GENDER = gql`
    query getUserGenderById($user_id:String!){
        getUserGenderById(user_id:$user_id) {
            gender
        }
    }
`;
const GET_USER_DOB = gql`
    query getUserDateOfBirthById($user_id:String!){
        getUserDateOfBirthById(user_id:$user_id) {
            Date_of_Birth
        }
    }
`;

class PersonInf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            pName: '',
            lName: '',
            email: '',
            phone: '',
            gender: '',
            day: '',
            month: '',
            year: ''
        };

    }

    componentDidMount() {
        const that = this;
        client.query({
            query: GET_USER_NAME,
            variables: {user_id: document.cookie.split('id=')[1]}
        }).then(function (data) {

            that.setState({lName: data.data.getUserNameById[0].last_name}, () => {
            })
            that.setState({pName: data.data.getUserNameById[0].preferred_name}, () => {
            })
        }, function (error) {

        });
        client.query({
            query: GET_USER_EMAIL,
            variables: {user_id: document.cookie.split('id=')[1]}
        }).then(function (data) {
            that.setState({email: data.data.getUserEmailById[0].email}, () => {
            })
        }, function (error) {

        });
        client.query({
            query: GET_USER_PHONE,
            variables: {user_id: document.cookie.split('id=')[1]}
        }).then(function (data) {
            that.setState({phone: data.data.getUserPhoneNumberById[0].phone_number}, () => {
            })
        }, function (error) {

        });
        client.query({
            query: GET_USER_GENDER,
            variables: {user_id: document.cookie.split('id=')[1]}
        }).then(function (data) {
            that.setState({gender: data.data.getUserGenderById[0].gender}, () => {
                /*if (data.data.getUserGenderById[0].value === 'M') {
                    that.setState({gender: 'Male'}, () => {
                    })
                } else if (data.data.getUserGenderById[0].value === 'F') {
                    that.setState({gender: 'Female'}, () => {
                    })
                } else {
                    that.setState({gender: data.data.getUserGenderById[0].value}, () => {
                    })
                }*/
                that.setState({gender: data.data.getUserGenderById[0].gender});
            })

        }, function (error) {

        })
        client.query({
            query: GET_USER_DOB,
            variables: {user_id: document.cookie.split('id=')[1]}
        }).then(function (data) {
            that.setState({day: data.data.getUserDateOfBirthById[0].Date_of_Birth}, () => {
            })
        }, function (error) {

        });

    }

    onChange = date => this.setState({date});

    render() {

        return (
            <div className="container-fluser_id2 container ">
                <div>
                    <ListGroup>

                        <div className="hearderbackground">
                            <ListGroupItem className="text-left">
                                <h4>Personal Information</h4></ListGroupItem></div>

                        <ListGroupItem className="text-left">
                            <table>
                                <tbody>
                                <tr>
                                    <td className="tableWidth"><h4>Name</h4>
                                        <h6>{this.state.pName} {this.state.lName}</h6></td>
                                    <td className="">
                                        <div>
                                            <button className="btn btnEdit float-right "><NavLink
                                                to={{pathname: "/setting/PersonInf/name"}} className="inactive"
                                                activeClassName="active" exact={true}>Edit</NavLink></button>
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
                                    <td className="tableWidth"><h4>Email Address</h4> <h6>{this.state.email}</h6></td>
                                    <td className="">
                                        <div>
                                            <button className="btn btnEdit float-right "><NavLink
                                                to={{pathname: "/setting/PersonInf/email"}} className="inactive"
                                                activeClassName="active" exact={true}>Edit</NavLink></button>
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
                                    <td className="tableWidth"><h4>Phone Number</h4> <h6>{this.state.phone}</h6></td>
                                    <td className="">
                                        <div>
                                            <button className="btn btnEdit float-right "><NavLink
                                                to={{pathname: "/setting/PersonInf/phone"}} className="inactive"
                                                activeClassName="active" exact={true}>Edit</NavLink></button>
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
                                    <td className="tableWidth"><h4>Gender</h4> <h6>{this.state.gender}</h6></td>
                                    <td className="">
                                        <div>
                                            <button className="btn btnEdit float-right "><NavLink
                                                to={{pathname: "/setting/PersonInf/gender"}} className="inactive"
                                                activeClassName="active" exact={true}>Edit</NavLink></button>
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
                                    <td className="tableWidth"><h4>Date of Birth</h4>
                                        <h6>{this.state.day}/{this.state.month}/{this.state.year}</h6></td>
                                    <td className="">
                                        <div>
                                            <button className="btn btnEdit float-right "><NavLink
                                                to={{pathname: "/setting/PersonInf/dob"}} className="inactive"
                                                activeClassName="active" exact={true}>Edit</NavLink></button>
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
                                                to={{pathname: "/setting/PersonInf/language"}} className="inactive"
                                                activeClassName="active" exact={true}>Edit</NavLink></button>
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

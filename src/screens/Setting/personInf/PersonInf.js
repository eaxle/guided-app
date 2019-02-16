import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
import {NavLink, Link} from "react-router-dom";
import {client} from '../../../index';
import gql from "graphql-tag";

const GET_USER_PNAME = gql`
               query getUserPreferNameById($uid:String!){
                   getUserPreferNameById(uid:$uid) {
                     value
                   }
                 }
               `;
const GET_USER_EMAIL = gql`
               query getUserEmailById($uid:String!){
                   getUserEmailById(uid:$uid) {
                     value
                   }
                 }
               `;
const GET_USER_PHONE = gql`
               query getUserPhoneNumberById($uid:String!){
                   getUserPhoneNumberById(uid:$uid) {
                     value
                   }
                 }
               `;

const GET_USER_CODE = gql`
               query getUserCodeById($uid:String!){
                   getUserCodeById(uid:$uid) {
                     value
                   }
                 }
               `;
const GET_GENDER = gql`
               query getGenderById($uid:String!){
                   getGenderById(uid:$uid) {
                     value
                   }
                 }
               `;
const GET_DOB_DAY = gql`
               query getUserDOBDayById($uid:String!){
                   getUserDOBDayById(uid:$uid) {
                     value
                   }
                 }
               `;
const GET_DOB_MONTH = gql`
               query getUserDOBMonthById($uid:String!){
                   getUserDOBMonthById(uid:$uid) {
                     value
                   }
                 }
               `;
const GET_DOB_YEAR = gql`
               query getUserDOBYearById($uid:String!){
                   getUserDOBYearById(uid:$uid) {
                     value
                   }
                 }
               `;

class PersonInf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            pName: '',
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
            query: GET_USER_PNAME,
            variables: {uid: document.cookie.split('id=')[1]}
        }).then(function (data) {
            that.setState({pName: data.data.getUserPreferNameById[0].value}, () => {
            })
        }, function (error) {

        });
        client.query({
            query: GET_USER_EMAIL,
            variables: {uid: document.cookie.split('id=')[1]}
        }).then(function (data) {
            that.setState({email: data.data.getUserEmailById[0].value}, () => {
            })
        }, function (error) {

        });
        client.query({
            query: GET_USER_PHONE,
            variables: {uid: document.cookie.split('id=')[1]}
        }).then(function (data) {
            that.setState({phone: data.data.getUserPhoneNumberById[0].value}, () => {
            })
        }, function (error) {

        });
        client.query({query: GET_GENDER, variables: {uid: document.cookie.split('id=')[1]}}).then(function (data) {
            that.setState({gender: data.data.getGenderById[0].value}, () => {
                if (data.data.getGenderById[0].value === 'M') {
                    that.setState({gender: 'Male'}, () => {
                    })
                }
                else if (data.data.getGenderById[0].value === 'F') {
                    that.setState({gender: 'Female'}, () => {
                    })
                }
                else {
                    that.setState({gender: data.data.getGenderById[0].value}, () => {
                    })
                }
            })

        }, function (error) {

        })
        client.query({query: GET_DOB_DAY, variables: {uid: document.cookie.split('id=')[1]}}).then(function (data) {
            that.setState({day: data.data.getUserDOBDayById[0].value}, () => {
            })
        }, function (error) {

        });
        client.query({query: GET_DOB_MONTH, variables: {uid: document.cookie.split('id=')[1]}}).then(function (data) {
            that.setState({month: data.data.getUserDOBMonthById[0].value}, () => {
            })
        }, function (error) {

        })
        ;client.query({query: GET_DOB_YEAR, variables: {uid: document.cookie.split('id=')[1]}}).then(function (data) {
            that.setState({year: data.data.getUserDOBYearById[0].value}, () => {
            })
        }, function (error) {

        })

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
                            <table>
                                <tbody>
                                <tr>
                                    <td className="tableWidth"><h4>Name</h4> <h6>{this.state.pName}</h6></td>
                                    <td className="">
                                        <div>
                                            <button className="btn btnEdit float-right "><NavLink
                                                to={{pathname: "/setting/PersonInf/name"}} className="inactive" activeClassName="active" exact={true}>Edit</NavLink></button>
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
                                                to={{pathname: "/setting/PersonInf/email"}} className="inactive" activeClassName="active" exact={true}>Edit</NavLink></button>
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
                                                to={{pathname: "/setting/PersonInf/phone"}} className="inactive" activeClassName="active" exact={true}>Edit</NavLink></button>
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
                                                to={{pathname: "/setting/PersonInf/gender"}} className="inactive" activeClassName="active" exact={true}>Edit</NavLink></button>
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
                                                to={{pathname: "/setting/PersonInf/dob"}} className="inactive" activeClassName="active" exact={true}>Edit</NavLink></button>
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
                                                to={{pathname: "/setting/PersonInf/language"}} className="inactive" activeClassName="active" exact={true}>Edit</NavLink></button>
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

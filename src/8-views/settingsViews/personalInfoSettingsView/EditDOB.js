import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
// import {NavLink, Link} from "react-router-dom";
import gql from "graphql-tag";
import {Mutation, Query} from "react-apollo";
import Form from "react-validation/build/form";
import {client} from '../../../index';

const arr = [];
const arrMonth = [];
const arrDay = [];
const UPDATE_DOB_YEAR = gql`
  mutation updateUserDOBYear($uid: String!,$year:String!) {
    updateUserDOBYear(uid: $uid,year:$year) {
     value
    }
  }
`;
const UPDATE_DOB_MONTH = gql`
  mutation updateUserDOBMonth($uid: String!,$month:String!) {
    updateUserDOBMonth(uid: $uid,month:$month) {
     value
    }
  }
`;
const UPDATE_DOB_DAY = gql`
  mutation updateUserDOBDay($uid: String!,$day:String!) {
    updateUserDOBDay(uid: $uid,day:$day) {
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

const GETFDOBBYDAY = ({uid}) => (
        <Query query={GET_DOB_DAY} variables={{uid}} notifyOnNetworkStatusChange>
            {({loading, error, data, refetch, networkStatus}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (networkStatus === 4) return "Refetching!";
                // debugger;
                return (<span id="re_002" onClick={() => refetch()}> {data.getUserDOBDayById[0].value}</span>);
            }}
        </Query>
    )
;
const GETFDOBBYMONTH = ({uid}) => (
        <Query query={GET_DOB_MONTH} variables={{uid}} notifyOnNetworkStatusChange>
            {({loading, error, data, refetch, networkStatus}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (networkStatus === 4) return "Refetching!";
                // debugger;
                return (<span id="re_003" onClick={() => refetch()}> {data.getUserDOBMonthById[0].value}</span>);
            }}
        </Query>
    )
;
const GETFDOBBYYEAR = ({uid}) => (
        <Query query={GET_DOB_YEAR} variables={{uid}} notifyOnNetworkStatusChange>
            {({loading, error, data, refetch, networkStatus}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (networkStatus === 4) return "Refetching!";
                // debugger;
                return (<span id="re_004" onClick={() => refetch()}> {data.getUserDOBYearById[0].value}</span>);
            }}
        </Query>
    )
;

class EditDOB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            day: '',
            month: '',
            year: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        if (e.target.name === 'day') {
            this.setState({day: e.target.value}, () => {

            })
        }
        if (e.target.name === 'month') {
            this.setState({month: e.target.value}, () => {

            })
        }
        if (e.target.name === 'year') {
            this.setState({year: e.target.value}, () => {

            })
        }
        // console.log(this.state)
    }

    componentDidMount() {
        console.log('componentdidmount')
        const that = this;
        client.query({
            query: GET_DOB_DAY,
            variables: {uid: document.cookie.split('id=')[1]},
            fetchPolicy: "network-only",
            notifyOnNetworkStatusChange: true,

        }).then(function (data) {
            that.setState({day: data.data.getUserDOBDayById[0].value}, () => {
            })
        }, function (error) {

        });
        client.query({
            query: GET_DOB_MONTH,
            variables: {uid: document.cookie.split('id=')[1]},
            notifyOnNetworkStatusChange: true,
            fetchPolicy: "network-only"

        }).then(function (data) {
            that.setState({month: data.data.getUserDOBMonthById[0].value}, () => {
            })
        }, function (error) {

        })
        ;client.query({
            query: GET_DOB_YEAR,
            variables: {uid: document.cookie.split('id=')[1]},
            notifyOnNetworkStatusChange: true,
            fetchPolicy: "network-only"
        }).then(function (data) {
            that.setState({year: data.data.getUserDOBYearById[0].value}, () => {

            })
        }, function (error) {

        })
        ;
    }

    render() {
        let uid = document.cookie.split('id=')[1];
        return (
            <div className="container-fluid2 container ">
                <div>
                    <ListGroup>
                        <div className="hearderbackground">
                            <Mutation mutation={UPDATE_DOB_DAY}>
                                {(updateUserDOBDay, {data}) => (
                                    <Mutation mutation={UPDATE_DOB_MONTH}>
                                        {(updateUserDOBMonth, {data}) => (
                                            <Mutation mutation={UPDATE_DOB_YEAR}>
                                                {(updateUserDOBYear, {data}) => (
                                                    <Form onSubmit={e => {
                                                        e.preventDefault();
                                                        updateUserDOBDay({
                                                            variables: {
                                                                uid: uid,
                                                                day: this.state.day
                                                            }
                                                        }).then(function (data) {

                                                        }, function (error) {

                                                        });
                                                        updateUserDOBMonth({
                                                            variables: {
                                                                uid: uid,
                                                                month: this.state.month
                                                            }
                                                        }).then(function (data) {

                                                        }, function (error) {

                                                        });
                                                        updateUserDOBYear({
                                                            variables: {
                                                                uid: uid,
                                                                year: this.state.year
                                                            }
                                                        }).then(function (data) {

                                                        }, function (error) {

                                                        });
                                                        this.componentDidMount()
                                                    }}>
                                                        <ListGroupItem className="text-left">
                                                            <table>
                                                                <tbody className="wholeWidth">
                                                                <tr>
                                                                    <td className="tableWidth"><h4>Date of Birth</h4>
                                                                    </td>
                                                                    <td className="">
                                                                        <div>
                                                                            <button type='submit'
                                                                                    className="btn btnSave float-right ">Save
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </ListGroupItem>

                                                        <ListGroupItem className="text-left">
                                                            <table>
                                                                <tbody className="wholeWidth">
                                                                <tr>
                                                                    <td className="tableWidth2">
                                                                        <h4>Day <br/><GETFDOBBYDAY
                                                                            uid={uid}/></h4></td>
                                                                    <td className="">
                                                                        <div className="col-sm-4">
                                                                            <select value={this.state.day}
                                                                                    onChange={this.handleChange}
                                                                                    className="form-control  seletBOD minimal"
                                                                                    name='day'
                                                                                    id='dayddl' placeholder="Day">
                                                                                <option>Day</option>
                                                                                {(function () {
                                                                                    for (var i = 1; i < 32; i++) {
                                                                                        arrDay.push(<option
                                                                                            value={i}>{i}</option>);
                                                                                    }
                                                                                })()}
                                                                                {arrDay}
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </ListGroupItem>

                                                        <ListGroupItem className="text-left">
                                                            <table className="wholeWidth">
                                                                <tbody className="wholeWidth">
                                                                <tr>
                                                                    <td className="tableWidth2">
                                                                        <h4>Month <br/><GETFDOBBYMONTH uid={uid}/></h4>
                                                                    </td>
                                                                    <td className="">
                                                                        <div className="col-sm-4 ">
                                                                            <select
                                                                                value={this.state.month}
                                                                                onChange={this.handleChange}
                                                                                className="form-control seletBOD minimal"
                                                                                name='month'
                                                                                id='monthddl' placeholder="Month">
                                                                                <option>Month</option>
                                                                                {(function () {
                                                                                    for (var i = 1; i < 13; i++) {
                                                                                        arrMonth.push(<option
                                                                                            value={i}>{i}</option>);
                                                                                    }
                                                                                })()}
                                                                                {arrMonth}
                                                                            </select>
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
                                                                    <td className="tableWidth2">
                                                                        <h4>Year <br/><GETFDOBBYYEAR
                                                                            uid={uid}/></h4></td>
                                                                    <td className="">
                                                                        <div className="col-sm-4 ">
                                                                            <select
                                                                                value={this.state.year}
                                                                                onChange={this.handleChange}
                                                                                className="form-control seletBOD minimal"
                                                                                name='year'
                                                                                id='yearddl' placeholder="Year">
                                                                                <option>Year</option>
                                                                                {(function () {
                                                                                    for (var i = 1930; i < new Date().getFullYear(); i++) {
                                                                                        arr.push(<option
                                                                                            value={i}>{i}</option>);
                                                                                    }
                                                                                })()}
                                                                                {arr}
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </ListGroupItem>

                                                        <ListGroupItem className="text-left">
                                                            <h4>Please Note</h4><h6>At Guided we take the accuracy of
                                                            birth-dates
                                                            seriously for
                                                            legal reasons. While it is possible to
                                                            initially enter an incorrect birth-date during registration,
                                                            all
                                                            changes to
                                                            birth-dates
                                                            will be reviewed using government
                                                            issued documents that you may have, or will provide.
                                                            Attempts to
                                                            falsify a
                                                            birth-date
                                                            will be dealt with at our discretion,
                                                            and account suspension is an option.</h6>
                                                        </ListGroupItem>
                                                    </Form>
                                                )}
                                            </Mutation>)}
                                    </Mutation>)}
                            </Mutation>
                        </div>
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default EditDOB;

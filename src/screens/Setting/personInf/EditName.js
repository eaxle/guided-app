import React, {Component} from 'react';
import {ReactDOM} from 'react-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
import {NavLink, Link} from "react-router-dom";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import {Mutation} from "react-apollo";
import {client} from "../../../index";

const UPDATE_USER_FNAME = gql`
  mutation updateUserFirstName($uid: String!,$fname:String!) {
    updateUserFirstName(uid: $uid,fname:$fname) {
     value
    }
  }
`;
const UPDATE_USER_LNAME = gql`
  mutation updateUserLastName($uid: String!,$lname:String!) {
    updateUserLastName(uid: $uid,lname:$lname) {
     value
    }
  }
`;
const UPDATE_USER_PNAME = gql`
  mutation updateUserPreferName($uid: String!,$pname:String!) {
    updateUserPreferName(uid: $uid,pname:$pname) {
     value
    }
  }
`;
const GET_USER_FNAME = gql`
               query getUserFisrtNameById($uid:String!){
                   getUserFisrtNameById(uid:$uid) {
                     value
                   }
                 }
               `;
const GET_USER_LNAME = gql`
               query getUserLastNameById($uid:String!){
                   getUserLastNameById(uid:$uid) {
                     value
                   }
                 }
               `;
const GET_USER_PNAME = gql`
               query getUserPreferNameById($uid:String!){
                   getUserPreferNameById(uid:$uid) {
                     value
                   }
                 }
               `;

const GETFNAME = ({uid}) => (
        <Query query={GET_USER_FNAME} variables={{uid}} notifyOnNetworkStatusChange>
            {({loading, error, data, refetch, networkStatus}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (networkStatus === 4) return "Refetching!";
                return (<span id="re_002" onClick={() => refetch()}> {data.getUserFisrtNameById[0].value}</span>);
            }}
        </Query>
    )
;
const GETLNAME = ({uid}) => (
        <Query query={GET_USER_LNAME} variables={{uid}} notifyOnNetworkStatusChange>
            {({loading, error, data, refetch, networkStatus}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (networkStatus === 4) return "Refetching!";
                return (<span id="re_003" onClick={() => refetch()}> {data.getUserLastNameById[0].value}</span>);
            }}
        </Query>
    )
;const GETPNAME = ({uid}) => (
        <Query query={GET_USER_PNAME} variables={{uid}} notifyOnNetworkStatusChange>
            {({loading, error, data, refetch, networkStatus}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (networkStatus === 4) return "Refetching!";
                return (<span id="re_004" onClick={() => refetch()}> {data.getUserPreferNameById[0].value}</span>);
            }}
        </Query>
    )
;

class EditName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            fName: '',
            lName: '',
            pName: ''
        };
        this.toogleField = this.toogleField.bind(this);
        this.revertChanges = this.revertChanges.bind(this);
        this.updateChange = this.updateChange.bind(this);
        this.whenUpdated = this.whenUpdated.bind(this);

    }

    submitForm(data) {
        if (!data.loginViaEmail.length) {

        } else {
            document.cookie = "id=" + data.loginViaEmail;
            this.props.history.push('/setting');

        }

    }

    updateChange(event) {
        if (event.target.id === 'fName')
            this.setState({fName: event.target.value});
        if (event.target.id === 'lName')
            this.setState({lName: event.target.value});
        if (event.target.id === 'pName')
            this.setState({pName: event.target.value});
    }

    componentDidMount() {
        for (var i = 0; i < document.getElementsByClassName('editField').length; i++) {
            document.getElementsByClassName('editField')[i].style.display = 'none';
        }
        const that = this;
        client.query({query: GET_USER_FNAME, variables: {uid: document.cookie.split('id=')[1]}}).then(function (data) {
            that.setState({fName: data.data.getUserFisrtNameById[0].value}, () => {
            })
        }, function (error) {

        });
        client.query({query: GET_USER_LNAME, variables: {uid: document.cookie.split('id=')[1]}}).then(function (data) {

            that.setState({lName: data.data.getUserLastNameById[0].value}, () => {
            })
        }, function (error) {

        });
        client.query({query: GET_USER_PNAME, variables: {uid: document.cookie.split('id=')[1]}}).then(function (data) {
            that.setState({pName: data.data.getUserPreferNameById[0].value}, () => {

            })
        }, function (error) {

        });
    }

    whenUpdated() {
        const that = this;
        client.query({query: GET_USER_FNAME, variables: {uid: document.cookie.split('id=')[1]}}).then(function (data) {
            that.setState({fName: data.data.getUserFisrtNameById[0].value}, () => {
            })
        }, function (error) {

        });
        client.query({query: GET_USER_LNAME, variables: {uid: document.cookie.split('id=')[1]}}).then(function (data) {

            // debugger;
            that.setState({lName: data.data.getUserLastNameById[0].value}, () => {
            })
        }, function (error) {

        });
        client.query({query: GET_USER_PNAME, variables: {uid: document.cookie.split('id=')[1]}}).then(function (data) {
            that.setState({pName: data.data.getUserPreferNameById[0].value}, () => {
            })
        }, function (error) {

        });

        this.props.setData(this.state.pName, this.state.lName);
    }

    toogleField(e) {
        e.preventDefault();
        for (var i = 0; i < document.getElementsByClassName('editField').length; i++) {
            document.getElementsByClassName('editField')[i].style.display = 'inline';
        }
        document.getElementById('edit-edit').style.display = 'none';
        this.whenUpdated();
    };

    revertChanges(e) {
        // debugger
        if (e.target.innerText === 'Cancel') {
            e.preventDefault();
        }
        for (var i = 0; i < document.getElementsByClassName('editField').length; i++) {
            document.getElementsByClassName('editField')[i].style.display = 'none';
        }
        document.getElementById('edit-edit').style.display = 'inline';
    };

    onChange = date => this.setState({date});

    render() {
        let uid = document.cookie.split('id=')[1];
        return (
            <div>
                <div className="container-fluid2 container ">
                    < Mutation mutation={UPDATE_USER_FNAME}>
                        {(updateUserFirstName, {data}) => (
                            < Mutation mutation={UPDATE_USER_LNAME}>
                                {(updateUserLastName, {data}) => (
                                    < Mutation mutation={UPDATE_USER_PNAME}>
                                        {(updateUserPreferName, {data}) => (
                                            <form onSubmit={e => {
                                                e.preventDefault();
                                                if (this.state.fName == "" && this.state.lName == "" && this.state.pName == "") {
                                                    return 0
                                                }
                                                updateUserLastName({
                                                    variables: {uid: uid, lname: this.state.lName}
                                                }).then(function (data) {
                                                    document.getElementById('re_003').click();
                                                }, function (error) {

                                                });

                                                updateUserFirstName({
                                                    variables: {uid: uid, fname: this.state.fName}
                                                }).then(function (data) {
                                                    document.getElementById('re_002').click();
                                                }, function (error) {

                                                });
                                                updateUserPreferName({
                                                    variables: {uid: uid, pname: this.state.pName}
                                                }).then(function (data) {
                                                    document.getElementById('re_004').click();
                                                }, function (error) {

                                                });
                                                this.whenUpdated();
                                            }}>
                                                < ListGroup>
                                                    < div className="hearderbackground">
                                                        <ListGroupItem className="text-left">
                                                            <table>
                                                                <tbody>
                                                                <tr>
                                                                    <td className="tableWidth"><h4>Name</h4> </td>
                                                                      <td className="float-right">
                                                                        <div className="editField ">
                                                                            <button className=" btn btnSaveOne "
                                                                                    onClick={this.revertChanges}
                                                                                    type="submit">Save
                                                                            </button>
                                                                            <button className="btn btnCancel "
                                                                                onClick={this.revertChanges}>Cancel</button>
                                                                        </div>
                                                                    </td>
                                                                    <td className="">
                                                                        <div>
                                                                            <button className="btn btnEditOne float-right "
                                                                                    id="edit-edit"
                                                                                    onClick={this.toogleField}>Edit
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </ListGroupItem>
                                                        <ListGroupItem className="text-left">
                                                            <h4>First Name</h4> <h6><GETFNAME uid={uid}/></h6>
                                                            <div><input type="text" className="editField" id='fName'
                                                                        value={this.state.fName}
                                                                        onChange={this.updateChange}/></div>
                                                        </ListGroupItem>
                                                        <ListGroupItem className="text-left">
                                                            <h4>Last Name</h4> <h6><GETLNAME uid={uid}/></h6>
                                                            <div><input type="text" className="editField"
                                                                        value={this.state.lName}
                                                                        id='lName'
                                                                        onChange={this.updateChange}/></div>
                                                        </ListGroupItem>
                                                        <ListGroupItem className="text-left">
                                                            <h4>Preferred Name</h4> <h6><GETPNAME uid={uid}/></h6>
                                                            <div><input type="text" className="editField"
                                                                        value={this.state.pName}
                                                                        id='pName'
                                                                        onChange={this.updateChange}/></div>
                                                        </ListGroupItem>
                                                        <ListGroupItem className="text-left">
                                                            <h4>Please Note</h4><h6>At Guided we take the accuracy of
                                                            names
                                                            seriously
                                                            for
                                                            legal
                                                            and
                                                            banking reasons.
                                                            A change to a First or Last Name will require corresponding
                                                            changes
                                                            to
                                                            appear on
                                                            payment
                                                            and government
                                                            documents that you may have, or will provide. Click <a
                                                                href="null">here</a> to
                                                            visit
                                                            your government issued documents.</h6>
                                                        </ListGroupItem>
                                                    </div>
                                                </ListGroup>
                                            </form>
                                        )}</Mutation>
                                )}</Mutation>

                        )}
                    </Mutation>
                </div>
            </div>

        )
    }
}

export default EditName;

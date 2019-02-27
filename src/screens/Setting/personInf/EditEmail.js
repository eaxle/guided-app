import React, {Component} from 'react';
// import Calendar from 'react-calendar';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
// import {NavLink, Link} from "react-router-dom";
import validator from 'validator';
import gql from "graphql-tag";
import { Query} from "react-apollo";
import {Mutation} from "react-apollo";
import {client} from "../../../index";

const UPDATE_EMAIL = gql`
  mutation updateUserEmail($uid: String!,$email:String!) {
    updateUserEmail(uid: $uid,email:$email) {
     value
    }
  }
`;
const GET_EMAIL = gql`
               query getUserEmailById($uid:String!){
                   getUserEmailById(uid:$uid) {
                     value
                   }
                 }
               `;

const GETUSER = ({uid}) => (
        <Query query={GET_EMAIL} variables={{uid}} notifyOnNetworkStatusChange>
            {({loading, error, data, refetch, networkStatus}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (networkStatus === 4) return "Refetching!";
                return (<span id="re_001" onClick={() => refetch()}> {data.getUserEmailById[0].value}</span>);
            }}
        </Query>
    )
;

class EditEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            email: '',
            disable: false
        };
        this.validateEmail = this.validateEmail.bind(this);
        this.assignValue = this.assignValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.email = this.email.bind(this);
        this.getResult = this.getResult.bind(this);
        this.result = "";
    }

    validateEmail() {
        // console.log('called');
        if (!validator.isEmail(this.state.email) || (!this.state.email.toString().trim().length)) {
            this.setState({disable: false}, () => {
                // this.state.disable;
            });

        } else {
            this.setState({disable: true}, () => {
                // this.state.disable;
            });
        }

    }

    assignValue(event) {
        this.setState({email: event.target.value}, () => {
            localStorage.setItem('email', this.state.email);
        });
    }

    handleChange(event) {
        event.preventDefault()
        this.setState({email: event.target.value}, () => {

        });
    }

    email() {

    }

    getResult(data) {
        // debugger
        this.result = data.getUserEmailById[0].value;
        this.forceUpdate();
    }

    componentDidMount() {
        let that = this;
        client.query({query: GET_EMAIL, variables: {uid: document.cookie.split('id=')[1]}}).then(function (data) {
            that.setState({email: data.data.getUserEmailById[0].value}, () => {
            })
        }, function (error) {

        });
    }

    render() {
        let uid = document.cookie.split('id=')[1];
        return (
            <div className="container-fluid2 container ">
                <div>
                    <ListGroup>
                        <div className="">
                            <Mutation mutation={UPDATE_EMAIL}>
                                {(updateUserEmail, {loading, error}) => (
                                    <Form onSubmit={e => {
                                        if (e.target.value === 'save') {
                                            let that = this
                                            e.preventDefault();
                                            if (this.state.email == '') {
                                                return ''
                                            }
                                            updateUserEmail({
                                                variables: {
                                                    uid: uid,
                                                    email: this.state.email
                                                }
                                            }).then(function (data) {
                                                document.getElementById('re_001').click();
                                            }, function (error) {

                                            });
                                        }
                                    }}
                                    >

                                        <ListGroupItem className="text-left">
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td className="tableWidth"><h4>Email</h4></td>
                                                    <td>
                                                        <div>
                                                            <input className="btn btnSave float-right "
                                                                   type='submit' value='Save'/>
                                                        </div>
                                                    </td>
                                                    <td className="">
                                                        <div>
                                                            <button
                                                                className="btn btnCancel float-right ">Cancel
                                                            </button>
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
                                                    <td className=""><h4>Email Address</h4>
                                                        <h6><GETUSER uid={uid}/></h6></td>

                                                    <td className="tableWidth2">

                                                        <Input type="email" className="email-input "
                                                               id="usr"
                                                               name="email"
                                                               value={this.state.email}
                                                               onChange={this.handleChange}
                                                               validations={[this.validateEmail, this.email]}/>

                                                    </td>

                                                </tr>
                                                </tbody>
                                            </table>
                                        </ListGroupItem>
                                        <div
                                            className={validator.isEmail(this.state.email) || (!this.state.email.toString().trim().length) ? "displayNone" : "errorMessage"}>
                                            <h6>ERROR: The email address that you have entered is incomplete
                                                or matches
                                                that of
                                                another user. Please try again.</h6></div>

                                    </Form>

                                )}

                            </Mutation>


                        </div>
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default EditEmail;

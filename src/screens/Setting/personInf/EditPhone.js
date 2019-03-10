import React, {Component} from 'react';
import IntlTelInput from 'react-intl-tel-input';
import /*'file?name=main.js!*/'../../../../node_modules/react-intl-tel-input/dist/main.js';
import '../../../../node_modules/react-intl-tel-input/dist/main.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
// import {NavLink, Link} from "react-router-dom";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import {Mutation} from "react-apollo";
import Form from "react-validation/build/form";

const UPDATE_PHONE = gql`
  mutation updateUserPhoneNumber($uid: String!,$number:String!) {
    updateUserPhoneNumber(uid: $uid,number:$number) {
     value
    }
  }
`;
const UPDATE_CODE = gql`
  mutation updateUserPhoneCode($uid: String!,$code:String!) {
    updateUserPhoneCode(uid: $uid,code:$code) {
     value
    }
  }
`;
const GET_PHONE = gql`
               query getUserPhoneNumberById($uid:String!){
                   getUserPhoneNumberById(uid:$uid) {
                     value
                   }
                 }
               `;
const GET_PHONE_CODE = gql`
               query getUserPhoneCodeById($uid:String!){
                   getUserPhoneCodeById(uid:$uid) {
                     value
                   }
                 }
               `;
const GETPHONE = ({uid}) => (
        <Query query={GET_PHONE} variables={{uid}} notifyOnNetworkStatusChange>
            {({loading, error, data, refetch, networkStatus}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (networkStatus === 4) return "Refetching!";
                // debugger;
                return (<span id="re_005" onClick={() => refetch()}> {data.getUserPhoneNumberById[0].value}</span>);
            }}
        </Query>
    )
;
const GETPHONECODE = ({uid}) => (
        <Query query={GET_PHONE_CODE} variables={{uid}} notifyOnNetworkStatusChange>
            {({loading, error, data, refetch, networkStatus}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (networkStatus === 4) return "Refetching!";
                // debugger;
                return (<span id="re_006" onClick={() => refetch()}> {data.getUserPhoneCodeById[0].value}</span>);
            }}
        </Query>
    )
;

class EditPhone extends Component {
    constructor(props) {
        super(props);
        this.disable = true;
        this.state = {
            countryCode: '',
            phone: ''
        };
        this.handler = this.handler.bind(this);
    }

    state = {
        date: new Date(),
    };

    handler(status, value, countryData, number, id) {
        // console.log("status: " + status + "\n" + "value: " + value + "\n" + "countryData: " + JSON.stringify(countryData) + "\n" + "number: " + number + "\n id: " + id);
        if (status === true) {
            this.setState({countryCode: countryData.dialCode}, () => {
                // localStorage.setItem('countryCode', this.state.countryCode)

            });
            this.setState({phone: number}, () => {

                // localStorage.setItem('phone', value);
            });
            this.disable = false;
            //  alert(value)
        } else {
            this.setState({phone: ""}, () => {
                // localStorage.setItem('phone', this.state.phone)
            });

            this.disable = true;

        }
    };

    onChange = date => this.setState({date});

    render() {
        let uid = document.cookie.split('id=')[1];
        return (
            <div className="container-fluid2 container ">
                <div>
                    <ListGroup>
                        <div className="">
                            <Mutation mutation={UPDATE_PHONE}>
                                {(updateUserPhoneNumber, {data}) => (
                                    <Mutation mutation={UPDATE_CODE}>
                                        {(updateUserPhoneCode, {data}) => (
                                            <Form onSubmit={e => {
                                                e.preventDefault();
                                                updateUserPhoneNumber({
                                                    variables: {
                                                        uid: uid,
                                                        number: this.state.phone
                                                    }
                                                }).then(function (data) {
                                                    document.getElementById('re_005').click();
                                                }, function (error) {

                                                });
                                                updateUserPhoneCode({
                                                    variables: {
                                                        uid: uid,
                                                        code: this.state.countryCode
                                                    }
                                                }).then(function (data) {
                                                    document.getElementById('re_006').click();
                                                }, function (error) {

                                                });
                                                //input.value = "";
                                            }}>
                                                <ListGroupItem className="text-left">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td className="tableWidth"><h4>Phone</h4></td>
                                                            <td>
                                                                <div>
                                                                    <button className="btn btnSave float-right "
                                                                            type='submit'>Save
                                                                    </button>
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
                                                            <td className=""><h4>Phone Number</h4> <h6><GETPHONECODE
                                                                uid={uid}/><GETPHONE uid={uid}/>
                                                            </h6></td>
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
                                            </Form>
                                        )}
                                    </Mutation>
                                )}
                            </Mutation>
                        </div>
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default EditPhone;

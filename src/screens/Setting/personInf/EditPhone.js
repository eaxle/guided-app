import React, {Component} from 'react';
import IntlTelInput from 'react-intl-tel-input';
import /*'file?name=libphonenumber.js!*/'../../../../node_modules/react-intl-tel-input/dist/libphonenumber.js';
import '../../../../node_modules/react-intl-tel-input/dist/main.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
import {NavLink, Link} from "react-router-dom";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import {Mutation} from "react-apollo";
import Form from "react-validation/build/form";

const UPDATE_PHONE = gql`
  mutation updateUserPhoneNumber($uid: String!,$number:String!) {
    updateUserPhoneNumber(uid: $uid,number:$number) {
     Phone_Number
    }
  }
`;
const GET_PHONE = gql`
               query getUserPhoneNumberById($uid:String!){
                   getUserPhoneNumberById(uid:$uid) {
                     Phone_Number
                   }
                 }
               `;

class EditPhone extends Component {
    state = {
        date: new Date(),
    };

    onChange = date => this.setState({date});

    render() {
        let uid = document.cookie.split('id=')[1];
        return (
            <div className="container-fluid2 container ">
                <div>
                    <Query query={GET_PHONE} variables={{uid}}>

                        {({loading, error, data}) => {
                            if (loading) return "Loading...";
                            if (error) return `Error! ${error.message}`;

                            return (
                                {data}
                            );
                        }}
                    </Query>
                    <ListGroup>
                        <div className="">
                            <Mutation mutation={UPDATE_PHONE}>
                                {(updateUserPhoneNumber, {data}) => (
                                    <Form onSubmit={e => {
                                        e.preventDefault();
                                        updateUserPhoneNumber({
                                            variables: {
                                                uid: uid,
                                                phone: '+61 0450902056'
                                            }
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
                                                            <button className="btn btnCancel float-right ">Cancel
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
                                                    <td className=""><h4>Phone Number</h4> <h6>+612345556</h6></td>
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
                        </div>
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default EditPhone;

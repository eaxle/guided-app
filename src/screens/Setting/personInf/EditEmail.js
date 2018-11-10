import React, {Component} from 'react';
// import Calendar from 'react-calendar';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
import {NavLink, Link} from "react-router-dom";
import validator from 'validator';


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
    }

    validateEmail() {
        console.log('called');
        if (!validator.isEmail(this.state.email) || (!this.state.email.toString().trim().length)) {
            this.setState({disable: false}, () => {
                this.state.disable;
            });

        } else {
            this.setState({disable: true}, () => {
                this.state.disable;
            });
        }

    }

    assignValue(event) {
        this.setState({email: event.target.value}, () => {
            localStorage.setItem('email', this.state.email);
        });
    }

    handleChange(event) {
        this.setState({email: event.target.value}, () => {

        });
    }

    email() {

    }


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
                                        <td className="tableWidth"><h4>Email</h4></td>
                                        <td>
                                            <div>
                                                <button className="btn btnSave float-right ">Save</button>
                                            </div>
                                        </td>
                                        <td className="">
                                            <div>
                                                <button className="btn btnCancel float-right ">Cancel</button>
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
                                        <td className=""><h4>Email Address</h4> <h6>John.smith@gmail.com</h6></td>
                                        <td className="tableWidth2">
                                            <Form>
                                                <Input type="email" className="email-input " id="usr" name="email"
                                                       value={this.state.email} onChange={this.handleChange}
                                                       validations={[this.validateEmail, this.email]}/>
                                            </Form>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </ListGroupItem>
                            <div
                                className={validator.isEmail(this.state.email) || (!this.state.email.toString().trim().length) ? "displayNone" : "errorMessage"}>
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

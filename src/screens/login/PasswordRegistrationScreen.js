import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import Recaptcha from 'react-recaptcha';
import ReactPasswordStrength from 'react-password-strength';

import './loginStyles.css';

const ADD_USER = gql`
               mutation createUser($first_name: String!,
                                   $last_name: String!,
                                   $email: String!,
                                   $birth: String!,
                                   $phone: String!,
                                   $gender: String!,
                                   $password: String!) {
                   createUser(first_name:$first_name,
                                                                 last_name: $last_name,
                                                                 email: $email,
                                                                 birth: $birth,
                                                                 phone: $phone,
                                                                 gender: $gender,
                                                                 password: $password) {
                     id

                   }
                 }
               `;
class PasswordRegistrationScreen extends Component {
    constructor(props) {
        super(props);
        this.recaptchaPass = false;
        this.state = {
            email: this.props.location.state.value.email,
            fName: this.props.location.state.value.fName,
            lName: this.props.location.state.value.lName,
            day: this.props.location.state.value.day,
            month: this.props.location.state.value.month,
            year: this.props.location.state.value.year,
            countryCode: this.props.location.state.value.countryCode,
            phone: this.props.location.state.value.phone,
            password: this.props.location.state.value.password,
            rePassword: this.props.location.state.value.rePassword || "",
            gender: this.props.location.state.value.gender,
            disable: true
        };
        this.rePassword = "";
        this.handleFormData = this.handleFormData.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.matchPassword = this.matchPassword.bind(this);
        this.verifyCall = this.verifyCall.bind(this);
    }

    registerUser(score, password, isValid) {
        this.setState({password: score.password}, this.matchPassword);

    }
    handleFormData(event) {
        event.preventDefault();
        if (event.target.name === "password") {
            this.setState({password: event.target.value});
        } else {
            this.setState({rePassword: event.target.value});
            this.rePassword = event.target.value;
        }
        this.matchPassword();
    }

    matchPassword() {
        //console.log(this.state.password, this.rePassword);
        if ((this.state.password == this.rePassword) && this.state.password.toString().trim().length) {
            this.setState({disable: false});
        } else {
            this.setState({disable: true});
        }
    }

    verifyCall(response) {
        this.recaptchaPass = true;
        console.log(response);
    };

    submitForm(e) {
        e.preventDefault();
        if (this.state.disable || !this.state.password.toString().trim().length || !this.recaptchaPass) {
            return
        }
        this.props.mutate({
            variables: {
                first_name: this.state.fName,
                last_name: this.state.lName,
                email: this.state.email,
                birth: this.state.year,
                phone: this.state.phone,
                gender: this.state.gender,
                password: this.state.password
            }
        }).then(res => {
            localStorage.setItem('email', "");
            ;
            alert('success')

        }).catch(err => {
            alert('error')
        })
    }


    render() {
        let {data} = this.props;

        return (

            <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
                <div className="row col-sm-12 welcome">Welcome to Guided
                </div>
                <div className="row">

                    <div className="col-sm-12 font-weight-bold subtitle">
                        <p>Choose a password </p>
           </div>
           <div className="col-sm-12 subsubtitle">
             <p>Password must be at least 6 characters,</p>
             <p>contain a number, a symbol, and a mix of </p>
             <p>upper and lower-case letters</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12  inputs inputName">
                        <ReactPasswordStrength
                            className="form-group"

                            minLength={5}
                            minScore={2}
                            scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
                            changeCallback={this.registerUser}
                            inputProps={{name: this.state.password, autoComplete: "off", className: "col-sm-12  inputs inputName"}}
                        />
                    </div>
                    <div className="col-sm-12  inputs inputName">
                        <input type="password" placeholder="password here" name="rePassword"
                               value={this.state.rePassword} onChange={this.handleFormData}
                               className="col-sm-4 form-control form-control-sm  "/>
                    </div>

                    <Recaptcha
                        verifyCallback={this.verifyCall}
                        sitekey="6Lc3MmgUAAAAALxmVo0T2oNJsL2n_xfmqQH-atDd"
                    />
                </div>

                <div className="row col-sm-12 Continuebottonmargin">
                    <NavLink disabled={this.state.disable}
                             to="/#" className="btn  btncreate generalbtn" onClick={this.submitForm}>
                        Sign Up
                    </NavLink></div>
                <div className="row"><div className="row font-weight-bold h5" id = "account" >Already have an account?</div>

                <footer className="page-footer footer-costomized">step 5 of 6</footer>
         </div>
            </div>

        );
    }
}

PasswordRegistrationScreen = graphql(ADD_USER)(PasswordRegistrationScreen)
export default PasswordRegistrationScreen;

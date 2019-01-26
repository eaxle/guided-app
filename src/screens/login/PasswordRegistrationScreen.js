import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import Recaptcha from 'react-recaptcha';
import ReactPasswordStrength from 'react-password-strength';
import './loginStyles.css';

const ADD_USER = gql`
               mutation email_registration(
               $first_name: String!,
               $last_name: String!,
               $preferred_name:String!,
               $dob_year: String!,
               $dob_month: String!,
               $dob_day: String!,
               $country_code: String!,
               $email: String!,
               $gender: String!,
               $password: String!,
               $phone_number: String!)
               {
               email_registration(
               first_name:$first_name,
               last_name:$last_name,
               preferred_name:$preferred_name,
               dob_year:$dob_year,
               dob_month:$dob_month,
               dob_day:$dob_day,
               country_code:$country_code,
               email:$email,
               gender:$gender,
               password:$password,
               phone_number:$phone_number
               ) {
                user_id
                   }
                 }
               `;

class PasswordRegistrationScreen extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state);
        this.recaptchaPass = false;
        this.title = '';
        this.body = '';
        this.state = {
            create_date: new Date(),
            update_date: new Date(),
            fName: localStorage.getItem('fName'),
            lName: localStorage.getItem('lName'),
            pName: localStorage.getItem('pName'),
            year: localStorage.getItem('day'),
            month: localStorage.getItem('month'),
            day: localStorage.getItem('day'),
            countryCode: localStorage.getItem('countryCode'),
            email: localStorage.getItem('email'),
            phone: localStorage.getItem('phone'),
            gender: localStorage.getItem('gender'),
            password: '',
            disable: true
        };
        this.rePassword = "";
        this.handleFormData = this.handleFormData.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.matchPassword = this.matchPassword.bind(this);
        this.verifyCall = this.verifyCall.bind(this);
        this.showSuccessMessage = null;
        this.showErrorMessage = null;
    }

    goBack() {
        window.history.back();
    }

    registerUser(score, password, isValid) {
        this.setState({password: score.password}, this.matchPassword);

    }

    handleFormData(event) {
        event.preventDefault();
        if (event.target.name === "password") {
            this.setState({password: event.target.value}, () => {
            });
        } else {
            this.rePassword = event.target.value;

        }
        this.matchPassword();
    }

    matchPassword() {
        if ((this.state.password === this.rePassword) && this.state.password.toString().trim().length) {
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
                preferred_name: this.state.pName,
                dob_year: this.state.year,
                dob_month: this.state.month,
                dob_day: this.state.day,
                email: this.state.email,
                phone_number: this.state.phone,
                gender: this.state.gender,
                password: this.state.password,
                country_code: this.state.countryCode
            }
        }).then(res => {
            localStorage.clear();

            this.showSuccessMessage = true;
            this.showErrorMessage = false;
            setTimeout(function () {
                //window.location.href = '/MainLogin'
            }, 3000)
        }).catch(err => {
            // alert('error')
            this.showSuccessMessage = false;
            this.showErrorMessage = true;

        })
    }


    render() {
        let {data} = this.props;

        return (

            <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
                <div className="row col-sm-12 righttop ">
                    <button className="btn btnBack float-right" onClick={this.goBack}>Back</button>
                </div>
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
                    {this.showSuccessMessage &&
                    <span className='btn btn-success'>You've successfully registered your account. Welcome to the Family!</span>
                    }
                    {this.showErrorMessage &&
                    <span className='btn btn-danger'>Oops! Something has gone wrong. Please try again.</span>}
                    <div className="col-sm-12  inputs inputName">
                        <ReactPasswordStrength
                            className="form-group"
                            minLength={5}
                            minScore={2}
                            scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
                            changeCallback={this.registerUser}
                            inputProps={{
                                name: this.state.password,
                                autoComplete: "off",
                                className: "col-sm-12  inputs inputName"
                            }}
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
                <div className="row">
                    <div className="row font-weight-bold h5" id="account">Already have an account?</div>

                    <footer className="page-footer footer-costomized">step 5 of 6</footer>
                </div>

            </div>

        );
    }
}

PasswordRegistrationScreen = graphql(ADD_USER)(PasswordRegistrationScreen)
export default PasswordRegistrationScreen;

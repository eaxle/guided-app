import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import Recaptcha from 'react-recaptcha';
import '../login/loginStyles.css';

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
            gender_type:$gender,
            password:$password,
            phone_number:$phone_number
        ) {
            user_id
        }
    }
`;

class ReCaptchaTest extends Component {
    constructor(props) {
        super(props);
        this.recaptchaPass = false;
        this.state = {
            fName: localStorage.getItem('fName'),
            lName: localStorage.getItem('lName'),
            pName: localStorage.getItem('pName') || localStorage.getItem('fName'),
            year: localStorage.getItem('day'),
            month: localStorage.getItem('month'),
            day: localStorage.getItem('day'),
            countryCode: localStorage.getItem('countryCode'),
            email: localStorage.getItem('email'),
            phone: localStorage.getItem('phone'),
            gender: localStorage.getItem('gender'),
            genderType: localStorage.getItem('genderType'),
            password: localStorage.getItem('password'),
            showSuccessMessage: false,
            showErrorMessage: false
        };
        this.submitForm = this.submitForm.bind(this);
        this.verifyCall = this.verifyCall.bind(this);
        this.goBack = this.goBack.bind(this);
    }


    goBack() {

        this.props.history.push('/register/password');
    }


    verifyCall(response) {
        console.log(response)
        this.recaptchaPass = true;
    };

    submitForm(e) {
        e.preventDefault();
        if (!this.recaptchaPass) {
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
                gender_type: this.state.genderType,
                password: this.state.password,
                country_code: this.state.countryCode
            }
        }).then((success) => {
            console.log(success);
            localStorage.clear();
            this.setState({showErrorMessage: false, showSuccessMessage: true});
            setTimeout(function () {
                this.props.history.push("/login");
            }, 3000)

        }).catch((error) => {
                console.log(this);
                this.setState({showErrorMessage: true, showSuccessMessage: false})

            }
        );
    }


    render() {
        // let {data} = this.props;

        return (

            <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
                <div className="row col-sm-12 righttop ">
                    <button className="btn btnBack float-right" onClick={this.goBack}>Back</button>
                </div>
                <div className="row col-sm-12 welcome">Welcome to Guided
                </div>
                <div className="row">

                    <div className="col-sm-12 font-weight-bold subtitle">
                        <p>Are you Human?</p>
                    </div>
                    <div className="col-sm-12 subsubtitle">
                        <p>We want to ensure that all of our users are</p>
                        <p> real people and not the robots who make a mess of internet services like Guided.</p>
                        <p>Please confirm that you're a human by selecting the box below and then press finish</p>
                    </div>
                </div>
                <div className="row">
                    <Recaptcha type="audio|image"
                               className="g-recaptcha col-sm-12  inputs inputName"
                               render="explicit"
                               verifyCallback={this.verifyCall}
                               sitekey="6Lc3MmgUAAAAALxmVo0T2oNJsL2n_xfmqQH-atDd"
                    />
                </div>

                <div className="row ">
                    <div className="col-sm-12 Continuebottonmargin">
                        <NavLink
                            to="/register/final" className="btn  btncreate generalbtn" onClick={this.submitForm}>
                            Finish
                        </NavLink>
                    </div>
                </div>
                < div className="row">
                    <footer className="page-footer footer-costomized"> step
                        6
                        of
                        6
                    </footer>

                </div>

            </div>
        );
    }
}

ReCaptchaTest = graphql(ADD_USER)(ReCaptchaTest);
export default ReCaptchaTest;

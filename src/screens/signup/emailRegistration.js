import React, {Component} from 'react';
import {NavLink, browserHistory} from 'react-router-dom';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import './mainRegistrationScreenStyles.css';
import '../login/loginStyles.css';
import FbLogin from '../login/facebook/fb';


class EmailRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', disable: true};
        if (localStorage.getItem('email')) {
            this.state.email = localStorage.getItem('email');
            this.state.disable = false;
        }
        this.handleChange = this.handleChange.bind(this);
        this.email = this.email.bind(this);
        this.toogleButton = this.toogleButton.bind(this);
    }

    goBack() {
        window.history.back();
    }

    toogleButton(event) {
        if (!validator.isEmail(this.state.email) && (this.state.email.toString().trim().length)) {
            event.preventDefault();
        } else {
            localStorage.setItem('email', this.state.email);
        }
    }

    handleChange(event) {
        this.setState({email: event.target.value}, () => {
            localStorage.setItem('email', this.state.email);
        });
        if (validator.isEmail(this.state.email) && (this.state.email.toString().trim().length)) {
            this.setState({disable: false});
        } else {
            this.setState({disable: true});
        }

    }


    email() {
        console.log(!validator.isEmail(this.state.email))
        if (!validator.isEmail(this.state.email)) {
            return <p className="  alert-danger">{this.state.email} is not a valid email!</p>;
        }
    };

    render() {
        return (
            <div className="container-fluid text-center d-flex justify-content-center align-items-center container">
                <div className="row col-sm-12 righttop ">
                    <button className="btn btnBack float-right" onClick={this.goBack}>Back</button>
                </div>
                <div className="row col-sm-12 welcome">
                    Welcome to Guided
                </div>
                <div className="row col-sm-12 h5 subtitle ">
                    <p>Choose an account</p>
                    <p>creation option</p>
                </div>
                <div className="row">
                    <div className="row col-sm-12 ">
                        <Form className="form-group formEmail">
                            <Input type="email" value={this.state.email} onChange={this.handleChange}
                                   placeholder="Email Address" validations={[/*this.required, */this.email]}
                                   className="col-sm-12 form-control form-control-sm  "/>
                        </Form>
                    </div>

                    <div className="row col-sm-12">
                        <NavLink onClick={this.toogleButton}
                                 to={{
                                     pathname: "/register/name",
                                     state: {email: this.state.email}
                                 }} className="btn btncreate generalbtn">
                            Continue
                        </NavLink></div>

                    <div className="row col-sm-12 h5 ">or</div>

                    <div className="row col-sm-12"><FbLogin><NavLink
                        to="/login" className="btn btnfb generalbtn">
                        Sign-Up With Facebook
                    </NavLink></FbLogin>
                    </div>

                    <div className="row col-sm-12"><NavLink
                        to="/login" className="btn  btngg generalbtn">
                        Sign-Up With Google
                    </NavLink></div>
                    <div className="row col-sm-12"><NavLink
                        to="/login" className="btn  btnlk generalbtn">
                        Sign-Up With LinkedIn
                    </NavLink></div>
                    <div className="row font-weight-bold h5">Already have an account?</div>
                </div>
            </div>

        );
    }
}

export default EmailRegistration;

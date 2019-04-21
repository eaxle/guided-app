import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import '../loginView/loginStyles.css';

class PasswordRegistrationView extends Component {
    constructor(props) {
        super(props);
        this.title = '';
        this.body = '';
        this.state = {
            fName: localStorage.getItem('fName') || '',
            lName: localStorage.getItem('lName') || '',
            pName: localStorage.getItem('pName') || '',
            year: localStorage.getItem('year') || '',
            month: localStorage.getItem('month') || '',
            day: localStorage.getItem('day') || '',
            countryCode: localStorage.getItem('countryCode') || '',
            email: localStorage.getItem('email') || '',
            phone: localStorage.getItem('phone') || '',
            gender: localStorage.getItem('gender') || '',
            password: '',
            disable: true,
            errMsg: ""
        };
        this.rePassword = "";
        this.handleFormData = this.handleFormData.bind(this);
        this.validateData = this.validateData.bind(this);
        this.goBack = this.goBack.bind(this);
    }


    goBack() {

        this.props.history.push('/register/gender');
    }

    handleFormData(event) {
        if (event.target.name === "password") {
            this.setState({password: event.target.value}, () => {
            });
        } else {
            this.rePassword = event.target.value;

        }

    }

    validateData(e) {
        if (this.state.password !== this.rePassword) {
            this.setState({errMsg: "Password doesn't match!"});
            e.preventDefault();
        } else if (!(/(?=.*\d)(?=.*[a-z])(?=.*[!#$%&?@"])(?=.*[A-Z]).{6,}/.test(this.state.password))) {
            this.setState({errMsg: "Password strength not matched!"});
            e.preventDefault();
        } else if (
            this.state.fName.length === 0 ||
            this.state.lName.length === 0 ||
            this.state.year.length === 0 ||
            this.state.month.length === 0 ||
            this.state.day.length === 0 ||
            this.state.countryCode.length === 0 ||
            this.state.email.length === 0 ||
            this.state.phone.length === 0 ||
            this.state.gender.length === 0) {
            this.setState({errMsg: "Form not completely filled out."});
            e.preventDefault();
        } else {
            localStorage.setItem('password', this.state.password);
            this.setState({disable: true});
        }
    }

    render() {
        return (
            <form>
                <div
                    className="container-fluid text-center d-flex justify-content-center align-items-center container ">
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
                    <div className="form-group col-sm-12 inputs inputName">
                        <input type="password" placeholder=" Enter Password" name="password"
                               value={this.state.password} onChange={this.handleFormData}
                               className=" col-sm-4 form-control form-control-sm  "/>

                    </div>
                    <div className=" form-group  col-sm-12 inputs inputName">
                        <input type="password" placeholder=" password here" name=" rePassword"
                               value={this.state.rePassword} onChange={this.handleFormData}
                               className=" col-sm-4 form-control form-control-sm  "/>
                        <p className="btn-danger">{this.state.errMsg}</p>
                    </div>

                    <div className=" form-group">
                        <div className=" col-sm-12 Continuebottonmargin">
                            <NavLink onClick={this.validateData}
                                     to="/register/final" className=" btn btncreate generalbtn">
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                    < div className=" row">
                        < div className=" row font-weight-bold h5" id=" account"> Already
                            have
                            an
                            account ?
                        </div>

                        <footer className=" page-footer footer-costomized"> step
                            5
                            of
                            6
                        </footer>

                    </div>

                </div>
            </form>

        );
    }
}

export default PasswordRegistrationView;

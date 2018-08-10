import React, {Component} from 'react';
import MetaTags from 'react-meta-tags';
import {NavLink} from 'react-router-dom';
import './loginStyles.css';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

class NameRegistrationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', fName: '', lName: '', disable: true}
        this.state.email = this.props.location.state.email;
        this.handleFormData = this.handleFormData.bind(this);
        this.toogleButton = this.toogleButton.bind(this);
        this.onBackButtonEvent = this.onBackButtonEvent.bind(this);
        this.assignData = this.assignData.bind(this);

    }

    onBackButtonEvent = function (e) {
        e.preventDefault();
        localStorage.setItem('email', this.state.email);
        e.goBack();
    }

    componentDidMount() {
        window.onpopstate = this.onBackButtonEvent;
    }

    handleFormData(event) {
        if (event.target.name === "fName") {
            this.setState({fName: event.target.value}, this.assignData);
        } else {
            this.setState({lName: event.target.value},this.assignData);
        }
        if ((!this.state.fName.toString().trim().length) || (!this.state.lName.toString().trim().length)) {
            this.setState({disable: true})
        } else {
            this.setState({disable: false})
        }
    }

    assignData() {
        console.log(this.state)
    }

    toogleButton(event) {

        if ((!this.state.fName.toString().trim().length) || (!this.state.lName.toString().trim().length)) {
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
                <MetaTags>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </MetaTags>

                <div className="row col-sm-12 welcome">Welcome to Guided
                </div>
                <div className="row">
                    <div className="col-sm-12 font-weight-bold subtitle">
                        <p>Whats your name? </p>
                    </div>
                    <div className="col-sm-12 subsubtitle">
                        <p>Please enter the name you use in real life</p>
                    </div>

                    <Form>
                        <div className="row">
                            <div className="col-sm-12 inputs inputName">
                                <Input type="text" placeholder="First Name" name="fName" value={this.state.fName}
                                       onChange={this.handleFormData}
                                       className="col-sm-4 form-control form-control-sm  "/>
                            </div>
                            <div className="col-sm-12">
                                <Input type="text" placeholder="Last Name" name="lName" value={this.state.lName}
                                       onChange={this.handleFormData}
                                       className="col-sm-4 form-control form-control-sm  "/>
                            </div>

                            <NavLink onClick={this.toogleButton} to={{
                                pathname: "/BirthdayRegistrationScreen",
                                state: {value: this.state}
                            }}
                                     className="btn  btncreate generalbtn" disabled={this.state.disable}>
                                Continue
                            </NavLink>
                        </div>
                        <div className="row font-weight-bold h5">Already have an account?</div>

                        <div className="row">
                        </div>
                        <footer>step 1 of 6</footer>
                    </Form>
                </div>
            </div>
        );
    }
}

export default NameRegistrationScreen;

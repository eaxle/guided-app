import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../login/loginStyles.css';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

class NameRegistrationView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fName: '',
            lName: '',
            pName: '',
            disable: true
        };

        if (localStorage.getItem('fName')) {

            this.state.fName = localStorage.getItem('fName')
        }
        if (localStorage.getItem('lName')) {

            this.state.lName = localStorage.getItem('lName')
        }
        if (localStorage.getItem('pName')) {

            this.state.pName = localStorage.getItem('pName')
        }
        this.handleFormData = this.handleFormData.bind(this);
        this.toogleButton = this.toogleButton.bind(this);
        this.assignData = this.assignData.bind(this);
        this.goBack = this.goBack.bind(this);

    }

    goBack() {
        this.props.history.push('/register/email');
    }


    handleFormData(event) {
        if (event.target.name === "fName") {
            this.setState({fName: event.target.value}, () => {

                localStorage.setItem('fName'
                    ,
                    this.state.fName
                )
            });
            ;
        } else if (event.target.name === "lName") {
            this.setState({lName: event.target.value}, () => {
                localStorage.setItem('lName', this.state.lName)
            });

        } else {
            this.setState({pName: event.target.value}, () => {
                localStorage.setItem('pName', this.state.pName)
            });
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

    toogleButton() {
        localStorage.setItem('fName', this.state.fName);
        localStorage.setItem('lName', this.state.lName);
        localStorage.setItem('pName', this.state.pName);
    }

    render() {
        return (
            <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
                <div className="row col-sm-12 righttop ">
                    <button className="btn btnBack float-right" onClick={this.goBack}>Back</button>
                </div>
                <div className="row col-sm-12 welcome">Welcome to Guided
                </div>
                <div className="row">
                    <div className="col-sm-12 font-weight-bold subtitle">
                        <p>What's your name? </p>
                    </div>
                    <div className="col-sm-12 subsubtitle">
                        <p>Pleaise enter the name you use in real life</p>
                    </div>

                    <Form>
                        <div className="row">
                            <div className="col-sm-12 inputs inputName">
                                <Input type="text" placeholder="First Name" name="fName" value={this.state.fName}
                                       onChange={this.handleFormData}
                                       className="col-sm-4 form-control form-control-sm  "/>
                            </div>
                            <div className="col-sm-12 inputName">
                                <Input type="text" placeholder="Last Name" name="lName" value={this.state.lName}
                                       onChange={this.handleFormData}
                                       className="col-sm-4 form-control form-control-sm  "/>
                            </div>
                            <div className="col-sm-12 inputName">
                                <Input type="text" placeholder="Preferred First Name" name="pName"
                                       value={this.state.pName}
                                       onChange={this.handleFormData}
                                       className="col-sm-4 form-control form-control-sm  "/>
                            </div>

                            <div className="row col-sm-12 Continuebottonmargin">
                                <NavLink onClick={this.toogleButton} to={{
                                    pathname: "/register/dob",
                                    state: {value: this.state}
                                }}
                                         className="btn  btncreate generalbtn">
                                    Continue
                                </NavLink>
                            </div>
                        </div>
                    </Form>

                    <div className="row font-weight-bold h5" id="account">Already have an account?</div>

                    <footer className="page-footer footer-costomized">step 1 of 6</footer>

                </div>
            </div>
        );
    }
}

export default NameRegistrationView;

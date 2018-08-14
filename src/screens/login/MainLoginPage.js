import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

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

class MainLoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: ''}
        this.handleFormData = this.handleFormData.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleFormData(e) {
        if (e.target.name == 'email') {
            this.setState({email: e.target.value}, () => {
                console.log(this.state.email);
            })
        } else {
            this.setState({password: e.target.value}, () => {
                console.log(this.state.password);
            })
        }
    }

    submitForm(e) {
        e.preventDefault();
        /*if (this.state.disable || !this.state.password.toString().trim().length || !this.recaptchaPass) {
            return
        }*/
        this.props.mutate({
            variables: {
                email: this.state.email,
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
        let {data} = this.props
        return (
            <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
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
                                <Input type="text" placeholder="Email address or Phone Number" name="email"
                                       value={this.state.fName}
                                       onChange={this.handleFormData}
                                       className="col-sm-4 form-control form-control-sm  "/>
                            </div>
                            <div className="col-sm-12">
                                <Input type="password" placeholder="password" name="password" value={this.state.lName}
                                       onChange={this.handleFormData}
                                       className="col-sm-4 form-control form-control-sm  "/>
                            </div>

                            <button onClick={this.submitForm}
                                    className="btn  btncreate generalbtn" disabled={this.state.disable}>
                                Continue
                            </button>
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

MainLoginPage = graphql(ADD_USER)(MainLoginPage)
export default MainLoginPage;
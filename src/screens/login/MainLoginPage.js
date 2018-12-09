import React, {Component} from 'react';
import gql from "graphql-tag";
import {ApolloConsumer} from "react-apollo";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import './loginStyles.css';
import {NavLink, browserHistory} from 'react-router-dom';
import FbLogin from './facebook/fb';
import {withCookies, Cookies} from 'react-cookie';


const LOGIN_USER = gql`
               query loginViaEmail($email: String!,$password: String!) {
                   loginViaEmail(email:$email,password: $password) {
                     id
                   }
                 }
               `;

class MainLoginPage extends Component {
    constructor(props) {
        super(props);
        const {cookies} = props;
        this.state = {email: '', password: ''};
        this.handleFormData = this.handleFormData.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.cookies = Cookies.isRequired;
        this.errMsg = false;

    }
    goBack() {
        window.history.back();
    }

    handleFormData(e) {
        if (e.target.name === 'email') {
            this.setState({email: e.target.value}, () => {
                console.log(this.state.email);
            })
        } else {
            this.setState({password: e.target.value}, () => {
                console.log(this.state.password);
            })
        }
    }

    submitForm(data) {

        if (!data.loginViaEmail.length) {
            this.errMsg = true;
            this.forceUpdate()
        } else {
            document.cookie = "id=" + data.loginViaEmail[0].id;
            // debugger
            this.props.history.push('/setting');
            this.errMsg = false;
            this.forceUpdate()
        }

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
                        <p>Choose a login option </p>
                    </div>
                    <Form>
                        <div className="row">
                            <div className="col-sm-12 inputs inputName">
                                <Input type="text" placeholder="Email address or Phone Number" name="email"
                                       value={this.state.fName}
                                       onChange={this.handleFormData}
                                       className="col-sm-4 form-control form-control-sm  "/>
                            </div>
                            <div className="col-sm-12 inputs inputName">
                                <Input type="password" placeholder="password" name="password" value={this.state.lName}
                                       onChange={this.handleFormData}
                                       className="col-sm-4 form-control form-control-sm  "/>
                            </div>

                            <ApolloConsumer>
                                {client => (
                                    <button className="btn  btncreate generalbtn"
                                            onClick={async (e) => {
                                                e.preventDefault();

                                                const {data} = await client.query({
                                                    query: LOGIN_USER,
                                                    variables: {email: this.state.email, password: this.state.password}
                                                });
                                                this.submitForm(data);
                                            }}
                                    >
                                        Continue
                                    </button>
                                )}
                            </ApolloConsumer>
                        </div>
                        <div className="row">
                            <div className="row font-weight-bold h5">Forget Password?</div>
                            {this.errMsg ? <div className="row font-weight-bold h5 btn-danger">Username or Password is
                                incorrect!
                            </div> : ""}

                            <div className="row col-sm-12"><FbLogin><NavLink
                                to="/login" className="btn btnfb generalbtn">
                                Continue With Facebook
                            </NavLink></FbLogin>
                            </div>

                            <div className="row col-sm-12"><NavLink
                                to="/login" className="btn  btngg generalbtn">
                                Continue With Google
                            </NavLink></div>
                            <div className="row col-sm-12"><NavLink
                                to="/login" className="btn  btnlk generalbtn">
                                Continue With LinkedIn
                            </NavLink></div>
                        </div>

                        <div className="row">
                        </div>

                    </Form>
                </div>
            </div>
        );
    }
}

// MainLoginPage = graphql(LOGIN_USER,queryOptions)(MainLoginPage)
export default MainLoginPage;

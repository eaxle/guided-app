import React, {Component} from 'react';
import gql from "graphql-tag";
import {ApolloConsumer} from "react-apollo";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';


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
        this.state = {email: '', password: ''};
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

    submitForm(data) {
        alert(JSON.stringify(data));

    }

    render() {
        let {data} = this.props;

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

                            <ApolloConsumer>
                                {client => (
                                    <button
                                        onClick={async (e) => {
                                            e.preventDefault();

                                            const {data} = await client.query({
                                                query: LOGIN_USER,
                                                variables: {email: this.state.email, password: this.state.password}
                                            });
                                            this.submitForm(data);
                                        }}
                                    >
                                        Click me!
                                    </button>
                                )}
                            </ApolloConsumer>
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

/*const queryOptions={
    options:props=>({
        variables:{
            email:props.state.email,
            password:props.state.password
        }
    })
}*/
// MainLoginPage = graphql(LOGIN_USER,queryOptions)(MainLoginPage)
export default MainLoginPage;
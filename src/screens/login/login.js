import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    <div className="container-fluid text-center">
        <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </MetaTags>
        <div className="row col-sm-12 text-center font-weight-bold text-capitalize h2">welcome to the guided
        </div>
        <div className="row">

        <div className="col-sm-12 font-weight-bold h4">
            The social marketplace for  things to do or use, and places to stay</div>
        </div>

      <div className="row col-sm-12">
            <button className="btn  btn-success">
                Create Account
            </button>
      </div>
           <span className="row col-sm-12"> or</span>
            <div className="row col-sm-12"><button className="btn btn-primary">Login</button></div>
            <div className="row font-weight-bold h4">By continuing, you agree to Guideds Term, Data Policy, Cookie Policy</div>
            <div className="row col-sm-12 h4 font-weight-bold">Continue as Guest</div>

    </div>
    );
  }
}
export default Login;
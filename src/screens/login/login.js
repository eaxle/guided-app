import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showComponent: false};
    this.handleChange = this.handleChange.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleChange(event) {
  alert();
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
   _onButtonClick() {
      this.setState({
        showComponent: true,
      });
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

      <NavLink
          to="/MainRegistrationScreen" className="btn  btn-success">
         Create Account
        </NavLink>
      </div>
           <span className="row col-sm-12"> or</span>
            <div className="row col-sm-12"><button className="btn btn-primary" onClick={this.intoLogin}>Login</button></div>
            <div className="row font-weight-bold h4">By continuing, you agree to Guided's Term, Data Policy, Cookie Policy</div>

        <NavLink
          to="#" className="row col-sm-12 h4 font-weight-bold">
         Continue as Guest
        </NavLink>

    </div>
    );
  }
}


export default Login;
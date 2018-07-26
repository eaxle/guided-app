import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './loginStyles.css';

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


    <div id="parent" className="container-fluid text-center container">

        <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </MetaTags>
        <div className="row col-sm-12 welcome">Welcome to Guided
        </div>
        <div>
          <div id="children" className="col-sm-12 subtitle">
            The social marketplace for  things to do or use, and places to stay</div>
            </div>
          <div id="children" className="row col-sm-12 center">
            <NavLink
            to="/MainRegistrationScreen" className="btn btn-success btncreate">
            Create Account
            </NavLink>
        <div className="row col-sm-12 welcome">Welcome to Guided</div>
        <div id="parent">
          <div id="child1" className="col-sm-12 subtitle">
            <p>The social marketplace</p>
            <p>for  things to do or use,</p>
            <p>and places to stay</p>
          </div>

          <div id = "buttons" >
            <div className="row col-sm-12 center">
              <NavLink
              to="/MainRegistrationScreen" className="btn btncreate generalbtn">
              Create Account
              </NavLink>
              </div>
            <div id = "child2" className="row col-sm-12 center">or</div>
            <div className="row col-sm-12 center"><button className="btn btnlogin generalbtn" onClick={this.intoLogin}>Login</button></div>
          </div>
            <div id="children" className="row col-sm-12 center">or</div>
            <div id="children" className="row col-sm-12 center"><button className="btn btn-primary btnlogin" onClick={this.intoLogin}>Login</button></div>

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

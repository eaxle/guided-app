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


    <div id ="body" className="container-fluid text-center container">
        <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </MetaTags>
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
            <div id = "child3" className="row font-weight-bold">
            <p>By continuing, you agree to Guided's</p>
            <p><a href="null">Terms</a>, <a href = "null">Data Policy</a>, and <a href = "null">Cookie Policy</a>. </p>
            </div>

<<<<<<< HEAD
              <NavLink
              to="#" className="row col-sm-12 h4 font-weight-bold">
              Continue as Guest
              </NavLink>
              </div>
              </div>
            );
          }
=======
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
>>>>>>> a43405166aa51121ad64505185b46dfe36f9aef5
}


export default Login;

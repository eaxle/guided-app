import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {Provider} from 'react-redux';
import { NavLink } from 'react-router-dom';
import './loginStyles.css';

// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     Dimensions,
// } from 'react-native';
//
// const {screenWidth,screenHeight} = Dimensions.get('window')

class NameRegistrationScreen extends React.Component {
  constructor(props) {
  console.log(props.value)
    super(props);
    this.state = {fName: ''};
    this.state = {lName: ''};
    this.handleFname = this.handleFname.bind(this);
    this.handleLname= this.handleLname.bind(this);
  }

  handleFname(event) {
  console.log(JSON.stringify(this.state))
    this.setState({fName: event.target.fName});
  }
  handleLname(event) {
    this.setState({lName: event.target.lName});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    return (
   <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
           <MetaTags>
               <meta name="viewport" content="width=device-width, initial-scale=1" />
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
           </div>


    <div className="row">
      <div className="inputs">
            <div className="col-sm-12 inputName">
            <input type="text" placeholder="First Name" value={this.state.fName} onChange={this.handleFname} className="col-sm-4 form-control form-control-sm  " />
            </div>
            <div className="col-sm-12 inputName">
            <input type="text" placeholder="Last Name" value={this.state.lName} onChange={this.handleLname} className="col-sm-4 form-control form-control-sm  " />
            </div>
        </div>
            <NavLink
                         to="/BirthdayRegistrationScreen" className="btn  btncreate generalbtn">
                        Continue
                       </NavLink>
            </div>
              <div className="row font-weight-bold h5">Already have an account?</div>

          <div className="row">

         </div>
         <footer>step 1 of 6</footer>
                     </div>

    );
  }
}
export default NameRegistrationScreen;

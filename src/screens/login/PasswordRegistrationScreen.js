import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {Provider} from 'react-redux';
import { NavLink } from 'react-router-dom';
import gql from "graphql-tag";
import { Query } from "react-apollo";


class PasswordRegistrationScreen extends React.Component {
  constructor(props) {
    super(props);
     this.state={
     email:this.props.location.state.value.email,
     fName:this.props.location.state.value.fName,
     lName:this.props.location.state.value.lName,
     day:'',
     month:'',
     year:'',
     countryCode:'',
     phone:'',
     password:'',
     rePassword:''}
    this.handleFormData= this.handleFormData.bind(this);
  }
    handleFormData(event) {
    if(event.target.name==="password"){
        this.setState({password: event.target.value});
    }else {
        this.setState({rePassword: event.target.value});
    }
    console.log(JSON.stringify(this.state));
    }

  render() {
    return (
   <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
           <MetaTags>
               <meta name="viewport" content="width=device-width, initial-scale=1" />
           </MetaTags>
           <div className="row col-sm-12 text-center font-weight-bold text-capitalize h2">welcome to the guided
           </div>
           <div className="row">

           <div className="col-sm-12 font-weight-bold h4">
               Choose an account creation option</div>
           </div>

    <div className="row">
        <div className="col-sm-12 form-group">
                    <input type="password" placeholder="password here" name="password" value={this.state.password} onChange={this.handleFormData} className="col-sm-4 form-control form-control-sm  " />
                    </div>
                    <div className="col-sm-12 form-group">
                    <input type="password" placeholder="password here" name="rePassword" value={this.state.rePassword} onChange={this.handleFormData} className="col-sm-4 form-control form-control-sm  " />
                    </div>
            </div>
            <div className="row col-sm-12">
                        <NavLink
                                     to="/login" className="btn  btn-success">
                                    Continue
                                   </NavLink></div>
          <div className="row">

         </div>
                     </div>
    );
  }
}
export default PasswordRegistrationScreen;
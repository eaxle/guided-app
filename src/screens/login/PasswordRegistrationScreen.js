import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { NavLink } from 'react-router-dom';
import gql from "graphql-tag";
import { Query,graphql } from "react-apollo";
import { Mutation } from "react-apollo";
const ADD_USER=gql`
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
class PasswordRegistrationScreen extends Component {
  constructor(props) {
    super(props);
     this.state={
     email:this.props.location.state.value.email,
     fName:this.props.location.state.value.fName,
     lName:this.props.location.state.value.lName,
     day:this.props.location.state.value.day,
     month:this.props.location.state.value.month,
     year:this.props.location.state.value.year,
     countryCode:this.props.location.state.value.countryCode,
     phone:this.props.location.state.value.phone,
     password:this.props.location.state.value.password,
     rePassword:this.props.location.state.value.rePassword,
     gender:this.props.location.state.value.gender}
    this.handleFormData= this.handleFormData.bind(this);
    this.registerUser= this.registerUser.bind(this);
    this.submitForm= this.submitForm.bind(this);
  }
   registerUser(){
    
   }
    handleFormData(event) {
    if(event.target.name==="password"){
        this.setState({password: event.target.value});
    }else {
        this.setState({rePassword: event.target.value});
    }

    console.log(JSON.stringify(this.state));
    }
submitForm(e){
e.preventDefault();
    console.log(JSON.stringify(this.state));
debugger;
this.props.mutate({variables:{first_name:this.state.fName,
                                                                 last_name: this.state.lName,
                                                                 email: this.state.email,
                                                                 birth: this.state.year,
                                                                 phone: this.state.phone,
                                                                 gender: this.state.gender,
                                                                 password: this.state.password}}).then(res=>{
                                                                 alert('success')

}).catch(err=>{
alert('error')
})
}
  render() {
let{data}=this.props

    return (

   <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
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
                                     to="/#" className="btn  btn-success" onClick={this.submitForm}>
                                    Continue
                                   </NavLink></div>
          <div className="row">

         </div>
                     </div>

    );
  }
}
PasswordRegistrationScreen=graphql(ADD_USER)(PasswordRegistrationScreen)
export default PasswordRegistrationScreen;
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { NavLink } from 'react-router-dom';
import './loginStyles.css';

class PhoneNumberRegistrationScreen extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
   // debugger;
     this.state={
     email:this.props.location.state.value.email,
     fName:this.props.location.state.value.fName,
     lName:this.props.location.state.value.lName,
     day:'',
     month:'',
     year:'',
     countryCode:'',
     phone:''}
    this.handleFormData= this.handleFormData.bind(this);
  }
 handleFormData(event) {
    if(event.target.name==="countryCode"){
        this.setState({day: event.target.value});
    }else {
        this.setState({month: event.target.value});
    }
  }

  render() {
    return (
   <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
        <div className="row col-sm-12 welcome">Welcome to Guided
        </div>
           <div className="row">

           <div className="col-sm-12 font-weight-bold subtitle">
               <p>Whats your phone Number? </p>
           </div>
           <div className="col-sm-12 subsubtitle">
             <p>We use this for two-factor authentication</p>
             <p> and account recovery. This information </p>
             <p>won’t be made public by default.</p>
           </div>
           </div>

           <div className="PhoneNumberTable">
           <table>
             <tr>
             <td className = "inputCountryCode"><input type="Number" onChange={this.handleFormData} placeholder="Country code" name="countryCode" className=" form-control form-control-sm  " />
            </td>
            <td></td>
               <td className = "inputPhoneNumber"> <input type="Number" placeholder="Phone Number" onChange={this.handleFormData} name="phone" className=" form-control form-control-sm  " /></td>
             </tr>
           </table>
           </div>



    <div className="row">
            </div>
            <div className="row col-sm-12 Continuebottonmargin">
                                   <NavLink onClick={this.toogleButton} to={{pathname:"/GenderRegistrationScreen",
                                   state:{value:this.state}}}
                                   className="btn  btncreate generalbtn" disabled={this.state.disable}>
                                   Continue
                                   </NavLink>
                                   </div>
          <div className="row">
          <div className="row font-weight-bold h5" id = "account" >Already have an account?</div>
          <footer className="page-footer footer-costomized">step 3 of 6</footer>

         </div>
        </div>
    );
  }
}
export default PhoneNumberRegistrationScreen;

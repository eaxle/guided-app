import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { NavLink } from 'react-router-dom';
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
           <div className="row col-sm-12 text-center font-weight-bold text-capitalize h2">welcome to the guided
           </div>
           <div className="row">

           <div className="col-sm-12 font-weight-bold h4">
               Choose an account creation option</div>
           </div>

    <div className="row">
        <div className="col-sm-2 form-group">
            <input type="Number" onChange={this.handleFormData} placeholder="Country code" name="countryCode" className="col-sm-4 form-control form-control-sm  " />
            </div>
            <div className="col-sm-2 form-group">
            <input type="Number" placeholder="Phone Number" onChange={this.handleFormData} name="phone" className="col-sm-4 form-control form-control-sm  " />
            </div>
            </div>
            <div className="row col-sm-12">
                                   <NavLink onClick={this.toogleButton} to={{pathname:"/PasswordRegistrationScreen",
                                   state:{value:this.state}}}
                                   className="btn  btn-success" disabled={this.state.disable}>
                                   Continue
                                   </NavLink>
                                   </div>
          <div className="row">

         </div>
                     </div>
    );
  }
}
export default PhoneNumberRegistrationScreen;
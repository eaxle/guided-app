import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {Provider} from 'react-redux';
import { NavLink } from 'react-router-dom';
class PhoneNumberRegistrationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
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
        <div className="col-sm-2 form-group">
            <input type="Number" placeholder="Country" className="col-sm-4 form-control form-control-sm  " />
            </div>
            <div className="col-sm-2 form-group">
            <input type="text" placeholder="Phone Number" className="col-sm-4 form-control form-control-sm  " />
            </div>

            </div>
            <div className="row col-sm-12">
                        <NavLink
                                     to="/PasswordRegistrationScreen" className="btn  btn-success">
                                    Continue
                                   </NavLink></div>
          <div className="row">

         </div>
                     </div>
    );
  }
}
export default PhoneNumberRegistrationScreen;
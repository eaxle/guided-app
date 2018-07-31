import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { NavLink } from 'react-router-dom';
class GenderRegistrationScreen extends Component {
  constructor(props) {
    super(props);
     this.state={
     email:this.props.location.state.value.email || '',
     fName:this.props.location.state.value.fName || '',
     lName:this.props.location.state.value.lName || '',
     day:this.props.location.state.value.day || '',
     month:this.props.location.state.value.month || '',
     year:this.props.location.state.value.year || '',
     countryCode:this.props.location.state.value.countryCode || '',
     phone:this.props.location.state.value.phone || ''}
    this.handleFormData= this.handleFormData.bind(this);
  }
 handleFormData(e) {
e.preventDefault();
        this.setState({gender: e.target.value});

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
        <label className="radio-inline"><input type="radio" value="m" name="gender" onChange={this.handleFormData} checked />Male</label>
        <label className="radio-inline"><input type="radio" value="f" name="gender" onChange={this.handleFormData} />Female</label>
        <label className="radio-inline"><input type="radio" name="gender" value="b" onChange={this.handleFormData} />both</label>
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
export default GenderRegistrationScreen;
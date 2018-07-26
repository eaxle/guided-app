import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import { NavLink } from 'react-router-dom';
import Form from 'react-validation/build/form';
class NameRegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state={ email:'', fName:'',lName:''}
    this.state.email=this.props.location.state.email;
    this.handleFormData = this.handleFormData.bind(this);
  }

  handleFormData(event) {
    console.log(event.target);
    if(event.target.name=="fName"){
        this.setState({fName: event.target.value});
    }else{
    this.setState({lName: event.target.value});
    }
    console.log(JSON.stringify(this.state))
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
<Form>
    <div className="row">
        <div className="col-sm-12">
            <input type="text" placeholder="First Name" name="fName" value={this.state.fName} onChange={this.handleFormData} className="col-sm-4 form-control form-control-sm  " />
            </div>
            <div className="col-sm-12">
            <input type="text" placeholder="Last Name" name="lName" value={this.state.lName} onChange={this.handleFormData} className="col-sm-4 form-control form-control-sm  " />
            </div>
            <NavLink to={{pathname:"/BirthdayRegistrationScreen",
                                               state:{value:this.state}}}
                          className="btn  btn-success">
                        Continue
                       </NavLink>
            </div>
          <div className="row">
         </div></Form>
                     </div>
    );
  }
}
export default NameRegistrationScreen;
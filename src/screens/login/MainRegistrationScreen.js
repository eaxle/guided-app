import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
class MainRegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '',disable:true};
    this.handleChange = this.handleChange.bind(this);
    this.required= this.required.bind(this);
    this.email= this.email.bind(this);
    if(this.state.email){
    this.state.disable=false;
    }
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

required(value){
  if (!value.toString().trim().length) {

    return <p className='form-control alert alert-danger'>required!</p>;
  }
};
 email(){
  if (!validator.isEmail(this.state.email)) {
    return <p className="form-control alert alert-danger">{this.state.email} is not a valid email!</p>;
  }
};

  render() {
    return (
   <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
           <div className="row col-sm-12 text-center font-weight-bold text-capitalize h2">
           welcome to the guided
           </div>
           <div className="row">

           <div className="col-sm-12 font-weight-bold h4">
               Choose an account creation option</div>
           </div>

    <div className="row">
        <div className="col-sm-4">
        <Form>
    <Input type="email" value={this.state.email} onChange={this.handleChange}
    placeholder="Email Address" validations={[this.required,this.email]}
    className="col-sm-6 form-control form-control-sm  form-inline" />
            </Form>
            </div>
            <NavLink
                         to="/NameRegistrationScreen" className="btn  btn-success" disabled={this.disable}>
                        Continue
                       </NavLink>
            </div>
          <div className="row">

         </div>
              <span className="row col-sm-12"> or</span>
              <div className="row">
                <div className=" col-sm-12"><NavLink
                                                                    to="/login" className="btn  btn-primary">
                                                                   Sign-Up Facebook
                                                                  </NavLink></div></div>
               <div className="row col-sm-12"><NavLink
                                                                       to="/login" className="btn  btn-primary">
                                                                      Sign-Up LinkedIn
                                                                     </NavLink></div>
                            <div className="row col-sm-12"><NavLink
                                                                       to="/login" className="btn  btn-primary">
                                                                      Sign-Up Google
                                                                     </NavLink>
                            </div>
                   <div className="row font-weight-bold h4">By continuing, you agree to Guided's Term, Data Policy, Cookie Policy
               </div>

       </div>
    );
  }
}
export default MainRegistrationScreen;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import './mainRegistrationScreenStyles.css';
import './loginStyles.css';

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
   <div className="container-fluid text-center container ">
           <div className="row col-sm-12 welcome">
           Welcome to Guided
           </div>
           <div id="parent2">

           <div id = "child21" className="col-sm-12 subtitle">
               <p>Choose an account</p>
               <p>creation option</p>
           </div>


           <div id="child22">

            <div id="email" className="col-sm-4">
              <Form>
               <div id = "formEmail">
                <Input type="email" value={this.state.email} onChange={this.handleChange}
                placeholder="Email Address" validations={[this.required,this.email]}
                className="col-sm-6 form1 form-control form-control-sm  form-inline" />
                </div>
             </Form>
            </div>

            <NavLink
                         to="/NameRegistrationScreen" className="btn btncreate generalbtn" disabled={this.disable}>
                        Continue
            </NavLink>

              <div id="or" className="row col-sm-12 center generalbtn">or</div>

              <div className="row">
                <div className="col-sm-12"><NavLink
                      to="/login" className="btn btnfb generalbtn">
                      Sign-Up Facebook
                      </NavLink>
                </div>

                <div className="row col-sm-12"><NavLink
                      to="/login" className="btn  btngg generalbtn">
                    Sign-Up Google
                    </NavLink></div>
                <div className="row col-sm-12"><NavLink
                     to="/login" className="btn  btnlk generalbtn">
                    Sign-Up LinkedIn
                    </NavLink></div>
                  <div className="row font-weight-bold h5">Already have an account?</div>
              </div>
          </div>
          </div>
       </div>
    );
  }
}
export default MainRegistrationScreen;

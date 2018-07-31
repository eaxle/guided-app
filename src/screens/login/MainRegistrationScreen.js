import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import './mainRegistrationScreenStyles.css';
import './loginStyles.css';
import FbLogin from './facebook/fb';
class MainRegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '',disable:true};
    this.handleChange = this.handleChange.bind(this);
    this.required= this.required.bind(this);
    this.email= this.email.bind(this);
    this.toogleButton= this.toogleButton.bind(this);

  }
toogleButton(event){
if (!validator.isEmail(this.state.email) || (!this.state.email.toString().trim().length)) {
       event.preventDefault();
      }
      }
  handleChange(event) {
    this.setState({email: event.target.value});
    this.props={email:event.target.value};
     if (validator.isEmail(this.state.email) && (this.state.email.toString().trim().length)) {
            this.setState({disable: false});
      }else{
          this.setState({disable: true});
      }

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


    <div className="row" id="child22">
        <div className="col-sm-4" id="email">
        <Form className="form-group" id="formEmail">
    <Input type="email" value={this.state.email} onChange={this.handleChange}
    placeholder="Email Address" validations={[this.required,this.email]}
    className="col-sm-6 form-control form-control-sm  " />
            </Form>
            </div>
            <div className="col-sm-12 btn">
            <NavLink onClick={this.toogleButton}
                         to={{
                         pathname:"/NameRegistrationScreen",
                          state:{email:this.state.email}}} className="btn  btn-success" disabled={this.state.disable} >
                        Continue
                       </NavLink></div>
            </div>
          <div className="row">
                <div className="col-sm-12"><FbLogin><NavLink
                      to="/login" className="btn btnfb generalbtn">
                      Sign-Up Facebook
                      </NavLink></FbLogin>
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

    );
  }
}
export default MainRegistrationScreen;

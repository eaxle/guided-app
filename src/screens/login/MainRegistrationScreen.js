import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {Provider} from 'react-redux';
import { NavLink } from 'react-router-dom';
class MainRegistrationScreen extends React.Component {
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
        <div className="col-sm-4">
            <input type="email" placeholder="Email Address" className="col-sm-6 form-control form-control-sm  form-inline" />
            </div>
            <NavLink
                         to="/NameRegistrationScreen" className="btn  btn-success">
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
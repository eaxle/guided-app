import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
import './loginStyles.css';

// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     Dimensions,
// } from 'react-native';
//
// const {screenWidth,screenHeight} = Dimensions.get('window')

class NameRegistrationScreen extends React.Component {
=======
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
class NameRegistrationScreen extends Component {
>>>>>>> a43405166aa51121ad64505185b46dfe36f9aef5
  constructor(props) {
    super(props);
    this.state={ email:'', fName:'',lName:'',disable:true}
    this.state.email=this.props.location.state.email;
    this.handleFormData = this.handleFormData.bind(this);
    this.toogleButton= this.toogleButton.bind(this);

  }

  handleFormData(event) {
   // console.log(event.target);
    if(event.target.name==="fName"){
        this.setState({fName: event.target.value});
    }else{
    this.setState({lName: event.target.value});
    }
   if ((!this.state.fName.toString().trim().length) || (!this.state.lName.toString().trim().length) ) {
          this.setState({disable:true})
         }else{
          this.setState({disable:false})
         }
  }


    toogleButton(event){
    //console.log("sd");
        if ((!this.state.fName.toString().trim().length) || (!this.state.lName.toString().trim().length) ) {
       event.preventDefault();
      }
      }

  render() {
    return (
   <div className="container-fluid text-center d-flex justify-content-center align-items-center container ">
           <MetaTags>
               <meta name="viewport" content="width=device-width, initial-scale=1" />
           </MetaTags>

           <div className="row col-sm-12 welcome">Welcome to Guided
           </div>
           <div className="row">
           <div className="col-sm-12 font-weight-bold subtitle">
               <p>Whats your name? </p>
           </div>
           <div className="col-sm-12 subsubtitle">
             <p>Please enter the name you use in real life</p>
           </div>
<<<<<<< HEAD
           </div>


    <div className="row">
      <div className="inputs">
            <div className="col-sm-12 inputName">
            <input type="text" placeholder="First Name" value={this.state.fName} onChange={this.handleFname} className="col-sm-4 form-control form-control-sm  " />
            </div>
            <div className="col-sm-12 inputName">
            <input type="text" placeholder="Last Name" value={this.state.lName} onChange={this.handleLname} className="col-sm-4 form-control form-control-sm  " />
            </div>
        </div>
            <NavLink
                         to="/BirthdayRegistrationScreen" className="btn  btncreate generalbtn">
=======
<Form>
    <div className="row">
        <div className="col-sm-12">
            <Input type="text" placeholder="First Name" name="fName" value={this.state.fName} onChange={this.handleFormData} className="col-sm-4 form-control form-control-sm  " />
            </div>
            <div className="col-sm-12">
            <Input type="text" placeholder="Last Name" name="lName" value={this.state.lName} onChange={this.handleFormData} className="col-sm-4 form-control form-control-sm  " />
            </div>
            <NavLink onClick={this.toogleButton} to={{pathname:"/BirthdayRegistrationScreen",
                                               state:{value:this.state}}}
                          className="btn  btn-success" disabled={this.state.disable}>
>>>>>>> a43405166aa51121ad64505185b46dfe36f9aef5
                        Continue
                       </NavLink>
            </div>
              <div className="row font-weight-bold h5">Already have an account?</div>

          <div className="row">
<<<<<<< HEAD

         </div>
         <footer>step 1 of 6</footer>
=======
         </div></Form>
>>>>>>> a43405166aa51121ad64505185b46dfe36f9aef5
                     </div>

    );
  }
}
export default NameRegistrationScreen;

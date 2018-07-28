import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import { NavLink } from 'react-router-dom';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
class NameRegistrationScreen extends Component {
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
           <div className="row col-sm-12 text-center font-weight-bold text-capitalize h2">welcome to the guided
           </div>
           <div className="row">

           <div className="col-sm-12 font-weight-bold h4">
               Choose an account creation option</div>
           </div>
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
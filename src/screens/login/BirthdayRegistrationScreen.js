import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {Provider} from 'react-redux';
import { NavLink } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
class BirthdayRegistrationScreen extends Component {
  constructor(props) {
    super(props);
     this.state={ email:this.props.location.state.value.email, fName:this.props.location.state.value.fName,lName:this.props.location.state.value.lName,day:'',month:'',year:''}
    this.handleFormData= this.handleFormData.bind(this);
  }
    handleFormData(event) {
    if(event.target.name==="day"){
        this.setState({day: event.target.value});
    }else if(event.target.name==="month"){
        this.setState({month: event.target.value});
    }else{
    this.setState({year: event.target.value});
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
    <Form className="form-inline">
    <div className="row">
    <div className="col-auto">
   <Input type="Number" name="day" placeholder="Day" className="form-control " value={this.state.day} onChange={this.handleFormData}/>
   </div>
    <div className="col-auto">
            <Input type="text"  name="month" placeholder="Month" className="form-control " value={this.state.month} onChange={this.handleFormData}/>
            </div>
             <div className="col-auto">
            <Input type="Number" name="year" placeholder="Year" className="form-control " value={this.state.year} onChange={this.handleFormData}/>
</div>
        </div>
        </Form>
            <div className="row col-sm-12">
                                   <NavLink onClick={this.toogleButton} to={{pathname:"/PhoneNumberRegistrationScreen",
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
export default BirthdayRegistrationScreen;

import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import {Provider} from 'react-redux';
import { NavLink } from 'react-router-dom';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import './loginStyles.css';


const arr=[];
const arrMonth = [];
const arrDay = [];
class BirthdayRegistrationScreen extends Component {
  constructor(props) {
    super(props);
     this.state={ email:this.props.location.state.value.email, fName:this.props.location.state.value.fName,lName:this.props.location.state.value.lName,day:'',month:'',year:''}
    this.handleFormData= this.handleFormData.bind(this);
  console.log(this.props)
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
   <div className="container-fluid text-center d-flex justify-content-center align-items-center container " >
           <MetaTags>
               <meta name="viewport" content="width=device-width, initial-scale=1" />
           </MetaTags>
           <div className="row col-sm-12 welcome">Welcome to Guided
           </div>
           <div className="row">

           <div className="col-sm-12 subtitle">
               <p>Whats your date of birth?</p>
           </div>
           <div className="col-sm-12 subsubtitle">
             <p>This information wont be made public.</p>
           </div>
           </div>


        <table>
          <tr>
            <td><div class="col-sm-4">
              <select class="form-control  seletBOD minimal" name='day' id='dayddl' placeholder="Day">
              <option >Day</option>
              {(function(){
                for(var i=1;i<32;i++){
                // debugger;
                arrDay.push(<option value={i}>{i}</option>);
             }})()}
              {arrDay}
              </select>
              </div></td>
            <td><div class="col-sm-4 ">
            <select class="form-control seletBOD minimal" name='month' id='monthddl' placeholder="Month">
            <option >Month</option>
            {(function(){
              for(var i=1;i<13;i++){
                // debugger;
                arrMonth.push(<option value={i}>{i}</option>);
              }})()}
              {arrMonth}
            </select>
            </div></td>
            <td><div class="col-sm-4 ">
            <select className="form-control seletBOD minimal" name='year' id='yearddl' placeholder="Year">
            <option >Year</option>
              {(function(){
                for(var i=1994;i<new Date().getFullYear();i++){
                  // debugger;
                  arr.push(<option value={i}>{i}</option>);
                }})()}
                {arr}
                </select>
            </div></td>
          </tr>
        </table>



    <Form className="form-inline">
      <div class="form-group">
      <div class="container-fluid">
      <div class="row">
    




      </div>
      </div>

        <div className="col-sm-4 inputName">
          <Input type="Number" name="day" placeholder="Day" className="form-control " value={this.state.day} onChange={this.handleFormData}/>
          </div>
        <div className="col-sm-4">
            <Input type="text"  name="month" placeholder="Month" className="form-control " value={this.state.month} onChange={this.handleFormData}/>
        </div>
        <div className="col-sm-4">
            <Input type="Number" name="year" placeholder="Year" className="form-control " value={this.state.year} onChange={this.handleFormData}/>
        </div>
      </div>
    </Form>
            <div className="row col-sm-12">
                                   <NavLink onClick={this.toogleButton} to={{pathname:"/PhoneNumberRegistrationScreen",
                                                                                  state:{value:this.state}}}
                                                             className="btn btncreate generalbtn" disabled={this.state.disable}>
                                                           Continue
                                                          </NavLink>
                                   </div>
                      <div className="row">
                      <div className="row font-weight-bold h5" id = "account" >Already have an account?</div>
                      <footer className="page-footer footer-costomized">step 2 of 6</footer>

                      </div>
                     </div>
    );
  }
}
export default BirthdayRegistrationScreen;

import React, { Component } from 'react';
// import Calendar from 'react-calendar';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';
import {NavLink, Link } from "react-router-dom";


const arr=[];
const arrMonth = [];
const arrDay = [];
class EditDOB extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="container-fluid2 container ">
            <div>
                <ListGroup>
                <div className="hearderbackground">
                <ListGroupItem className="text-left">
                <table>
                  <tbody className="wholeWidth">
                  <tr>
                  <td className="tableWidth"> <h4>Date of Birth</h4> </td>
                    <td className=""><div><button className="btn btnSave float-right ">Save</button></div></td>
                  </tr>
                  </tbody>
                  </table></ListGroupItem>

                    <ListGroupItem className="text-left">
                    <table>
                      <tbody className="wholeWidth">
                      <tr>
                      <td className="tableWidth2"> <h4>Day</h4></td>
                        <td className=""><div className="col-sm-4">
              <select className="form-control  seletBOD minimal" name='day' id='dayddl' placeholder="Day">
              <option >Day</option>
              {(function(){
                for(var i=1;i<32;i++){
                // debugger;
                arrDay.push(<option value={i}>{i}</option>);
             }})()}
              {arrDay}
              </select>
              </div></td>
                      </tr>
                      </tbody>
                      </table></ListGroupItem>

                    <ListGroupItem className="text-left">
                    <table className="wholeWidth">
                      <tbody className="wholeWidth">
                      <tr>
                      <td className="tableWidth2"> <h4>Month</h4></td>
                        <td className=""><div className="col-sm-4 ">
            <select className="form-control seletBOD minimal" name='month' id='monthddl' placeholder="Month">
            <option >Month</option>
            {(function(){
              for(var i=1;i<13;i++){
                // debugger;
                arrMonth.push(<option value={i}>{i}</option>);
              }})()}
              {arrMonth}
            </select>
            </div></td>
                      </tr>
                      </tbody>
                      </table></ListGroupItem>

                    <ListGroupItem className="text-left">
                    <table>
                    <tbody>
                    <tr>
                    <td className="tableWidth2"> <h4>Year</h4> </td>
                      <td className=""><div className="col-sm-4 ">
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
                    </tbody>
                    </table></ListGroupItem>

                    <ListGroupItem className="text-left">
                    <h4>Please Note</h4><h6>At Guided we take the accuracy of birth-dates seriously for legal reasons. While it is possible to
                     initially enter an incorrect birth-date during registration, all changes to birth-dates will be reviewed using government
                     issued documents that you may have, or will provide.  Attempts to falsify a birth-date will be dealt with at our discretion,
                     and account suspension is an option.</h6>
                    </ListGroupItem>
                    </div>
                </ListGroup>
            </div>
      </div>

    )
  }
}
export default EditDOB;

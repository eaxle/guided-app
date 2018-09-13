import React, { Component } from 'react';
// import Calendar from 'react-calendar';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';
import {NavLink, Link } from "react-router-dom";


// var ScrollArea = require('react-scrollbar');
// var ReactDOM = require('react-dom');
// var React = require('react');
class Setting extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="container-fluid2 container ">
            <div>
                <ListGroup>
                <div className="">
                    <ListGroupItem className="text-left">
                    <table>
                      <tbody>
                      <tr>
                        <td className="tableWidth"> <h4>Gender</h4> </td>
                        <td ><div><button className="btn btnSave float-right ">Save</button></div></td>
                        <td className=""><div><button className="btn btnCancel float-right ">Cancel</button></div></td>
                      </tr>
                      </tbody>
                      </table></ListGroupItem>
                      <ListGroupItem className="text-left">
                      <table>
                        <tbody>
                        <tr>
                          <td className = ""> <h4>Gender</h4> <h6>Male</h6></td>
                        </tr>
                        <tr>
                          <div className="rowtablediv">

                    <table>
                        <tbody>
                        <tr>
                            <td><label>Male</label></td>
                            <td><input type="radio" value="m" name="gender" /></td>
                        </tr>
                        <tr>
                            <td><label>
                                Female</label></td>
                            <td><input type="radio" value="f" name="gender" /></td>
                        </tr>
                        <tr>
                            <td><label>Other</label></td>
                            <td><input type="radio" value="o" name="gender" /></td>
                        </tr>
                        <tr>
                          <td>Do not show gender</td>
                          <td>
                            <div className="switch">
                            <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                            <label for="cmn-toggle-4"></label>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                    </table>
                          </div>
                        </tr>
                        </tbody>
                      </table>
                      <div className="">
                      <h6>We encourage you to list the gender that you are most comfortable with. Doing so may help
                      you to better find listings that fit your needs. You may enter text into this box to identify
                      an alternative gender if you so wish. You do not have to enter a value in this box and if you
                      do not, “Other” will be the defaut.</h6></div>
                      </ListGroupItem>

                    </div>
                </ListGroup>
            </div>
      </div>
    )
  }
}
export default Setting;

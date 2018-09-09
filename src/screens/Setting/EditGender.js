import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';
import {NavLink, Link } from "react-router-dom";

class EditGender extends Component {
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
                            <td><input type="radio" value="m" name="gender" checked={this.state.gender === 'm'}
                                       onChange={this.handleFormData}/></td>
                        </tr>
                        <tr>
                            <td><label>
                                Female</label></td>
                            <td><input type="radio" value="f" name="gender" checked={this.state.gender === 'f'}
                                       onChange={this.handleFormData}/></td>
                        </tr>
                        <tr>
                            <td><label>other</label></td>
                            <td><input type="radio" value="o" name="gender" checked={this.state.gender === 'o'}
                                       onChange={this.handleFormData}/></td>
                        </tr>
                        </tbody>
                    </table>
                          </div>
                        </tr>
                        </tbody>
                      </table>
                      </ListGroupItem>
                      <div className="errorMessage">
                      <h6>ERROR: The phone number that you have entered is incomplete or
                      matches that of another user. Please try again.</h6></div>
                    </div>
                </ListGroup>
            </div>
      </div>
    )
  }
}
export default EditGender;

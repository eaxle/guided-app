import React, {Component} from 'react';
import {ReactDOM} from 'react-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
import {NavLink, Link} from "react-router-dom";

class EditName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
        this.toogleField = this.toogleField.bind(this);
        this.revertChanges = this.revertChanges.bind(this);
    }

    componentDidMount() {
        for (var i = 0; i < document.getElementsByClassName('editField').length; i++) {
            document.getElementsByClassName('editField')[i].style.display = 'none';
        }

    }

    toogleField() {
        for (var i = 0; i < document.getElementsByClassName('editField').length; i++) {
            document.getElementsByClassName('editField')[i].style.display = 'inline';
        }
        document.getElementById('edit-edit').style.display = 'none';
    };

    revertChanges() {
        for (var i = 0; i < document.getElementsByClassName('editField').length; i++) {
            document.getElementsByClassName('editField')[i].style.display = 'none';
        }
        document.getElementById('edit-edit').style.display = 'inline';
    };

    onChange = date => this.setState({date});

    render() {
        return (
            <div className="container-fluid2 container ">
                <div>
                    <ListGroup>
                        <div className="hearderbackground">

                            <ListGroupItem className="text-left">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className="tableWidth"><h4>Name</h4>
                                            <div className="editField">
                                                <h4 className=" btn btn-default" onClick={this.revertChanges}>Save</h4>
                                                <h4 className="btn btn-danger" onClick={this.revertChanges}>Cancel</h4>
                                            </div>
                                        </td>
                                        <td className="">
                                            <div>
                                                <button className="btn btnEdit float-right " id="edit-edit"
                                                        onClick={this.toogleField}>Edit
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </ListGroupItem>
                            <ListGroupItem className="text-left">
                                <h4>First Name</h4> <h6>Edward</h6>
                                <div><input type="text" className="editField"/></div>
                            </ListGroupItem>
                            <ListGroupItem className="text-left">
                                <h4>Last Name</h4> <h6>Smith</h6>
                                <div><input type="text" className="editField"/></div>
                            </ListGroupItem>
                            <ListGroupItem className="text-left">
                                <h4>Preferred Name</h4> <h6>John</h6>
                                <div><input type="text" className="editField"/></div>
                            </ListGroupItem>
                            <ListGroupItem className="text-left">
                                <h4>Please Note</h4><h6>At Guided we take the accuracy of names seriously for legal and
                                banking reasons.
                                A change to a First or Last Name will require corresponding changes to appear on payment
                                and government
                                documents that you may have, or will provide. Click <a href="null">here</a> to visit
                                your government issued documents.</h6>
                            </ListGroupItem>
                        </div>
                    </ListGroup>
                </div>
            </div>

        )
    }
}

export default EditName;

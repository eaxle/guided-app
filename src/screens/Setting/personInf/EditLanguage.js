import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';
import {NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class EditLanguage extends Component {
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
                                        <td className="tableWidth"> <h4>Languages</h4> </td>
                                        <td ><div><button className="btn btnSave float-right ">Save</button></div></td>
                                        <td className=""><div><button className="btn btnCancel float-right ">Cancel</button></div></td>
                                    </tr>
                                    </tbody>
                                </table></ListGroupItem>
                            <ListGroupItem>
                                <h6>Please select all languages spoken</h6>
                            </ListGroupItem>
                            <ListGroupItem className="text-left">
                                <table>
                                    <tbody>
                                    <tr>
                                        <div className="rowtablediv">

                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td className=" tableWidth">English</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="English" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" checked="checked"  />
                                                            <label for="English"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Arabic</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Arabic" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Arabic"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Chinese (Mandarin)</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Chinese(Mandarin)" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Chinese(Mandarin)"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Chinese (Cantonese)</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Chinese(Cantonese)" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Chinese(Cantonese)"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Danish</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Danish" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Danish"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Dutch</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Dutch" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Dutch"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Finnish</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Finnish" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Finnish"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">French</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="French" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="French"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">German</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="German" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="German"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Hindi</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Hindi" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Hindi"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Japanese</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Japanese" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Japanese"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Korean</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Korean" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Korean"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Parsi</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Parsi" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Parsi"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Portuguese</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Portuguese" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Portuguese"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Punjabi</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Punjabi" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="cPunjabi"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Spanish</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Spanish" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Spanish"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=" tableWidth">Urdu</td>
                                                    <td className="centerText ">
                                                        <div className="switch">
                                                            <input id="Urdu" className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                                                            <label for="Urdu"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </tr>
                                    </tbody>
                                </table>
                            </ListGroupItem>

                        </div>
                    </ListGroup>
                </div>
            </div>
        )
    }
}
export default EditLanguage;

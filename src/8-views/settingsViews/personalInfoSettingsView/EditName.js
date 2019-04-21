import React, {Component} from 'react';
import {ReactDOM} from 'react-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
import {Mutation} from "react-apollo";
// import {client} from "../../../index";
import {GET_USER_NAME, UPDATE_USER_NAME, getClientName} from "./../../../5-components/services/userService";

class EditName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            fName: '',
            lName: '',
            pName: ''
        };
        this.toogleField = this.toogleField.bind(this);
        this.revertChanges = this.revertChanges.bind(this);
        this.updateChange = this.updateChange.bind(this);
        this.whenUpdated = this.whenUpdated.bind(this);
        this.getClientName = this.getClientName.bind(this);

    }

    submitForm(data) {
        if (!data.loginViaEmail.length) {

        } else {
            document.cookie = "id=" + data.loginViaEmail;
            this.props.history.push('/setting');

        }

    }

    updateChange(event) {
        if (event.target.id === 'fName')
            this.setState({fName: event.target.value});
        if (event.target.id === 'lName')
            this.setState({lName: event.target.value});
        if (event.target.id === 'pName')
            this.setState({pName: event.target.value});
    }

    getClientName() {
        let that = this;
        getClientName().then(function (data) {
            console.log(data.data.getUserNameById[0].first_name);
            that.state.fName = data.data.getUserNameById[0].first_name;
            that.state.lName = data.data.getUserNameById[0].last_name;
            that.state.pName = data.data.getUserNameById[0].preferred_name;
        }, function (error) {
        });

    }

    componentDidMount() {
        for (var i = 0; i < document.getElementsByClassName('editField').length; i++) {
            document.getElementsByClassName('editField')[i].style.display = 'none';
        }
        this.getClientName();
    }

    whenUpdated() {

        this.getClientName();
    }

    toogleField(e) {
        e.preventDefault();
        for (var i = 0; i < document.getElementsByClassName('editField').length; i++) {
            document.getElementsByClassName('editField')[i].style.display = 'inline';
        }
        document.getElementById('edit-edit').style.display = 'none';
        this.whenUpdated();
    };

    revertChanges(e) {
        // debugger
        if (e.target.innerText === 'Cancel') {
            e.preventDefault();
        }
        for (var i = 0; i < document.getElementsByClassName('editField').length; i++) {
            document.getElementsByClassName('editField')[i].style.display = 'none';
        }
        document.getElementById('edit-edit').style.display = 'inline';
    };

    onChange = date => this.setState({date});

    render() {
        let uid = document.cookie.split('id=')[1];
        return (
            <div>
                <div className="container-fluid2 container ">
                    < Mutation mutation={UPDATE_USER_NAME}>
                        {(update_user_name, {data}) => (
                            <form onSubmit={e => {
                                e.preventDefault();
                                if (this.state.fName == "" && this.state.lName == "" && this.state.pName == "") {
                                    return 0
                                }
                                update_user_name({
                                    variables: {
                                        user_id: uid,
                                        first_name: this.state.fName,
                                        last_name: this.state.lName,
                                        preferred_name: this.state.pName
                                    }
                                }).then(function (data) {
                                    document.getElementById('re_004').click();
                                }, function (error) {

                                });
                                this.whenUpdated();
                            }}>
                                < ListGroup>
                                    < div className="hearderbackground">
                                        <ListGroupItem className="text-left">
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td className="tableWidth"><h4>Name</h4></td>
                                                    <td className="float-right">
                                                        <div className="editField ">
                                                            <button className=" btn btnSaveOne "
                                                                    onClick={this.revertChanges}
                                                                    type="submit">Save
                                                            </button>
                                                            <button className="btn btnCancel "
                                                                    onClick={this.revertChanges}>Cancel
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="">
                                                        <div>
                                                            <button
                                                                className="btn btnEditOne float-right "
                                                                id="edit-edit"
                                                                onClick={this.toogleField}>Edit
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </ListGroupItem>
                                        <ListGroupItem className="text-left">
                                            <h4>First Name</h4> <h6>{this.state.fName}</h6>
                                            <div><input type="text" className="editField" id='fName'
                                                        value={this.state.fName}
                                                        onChange={this.updateChange}/></div>
                                        </ListGroupItem>
                                        <ListGroupItem className="text-left">
                                            <h4>Last Name</h4> <h6>{this.state.lName}</h6>
                                            <div><input type="text" className="editField"
                                                        value={this.state.lName}
                                                        id='lName'
                                                        onChange={this.updateChange}/></div>
                                        </ListGroupItem>
                                        <ListGroupItem className="text-left">
                                            <h4>Preferred Name</h4> <h6>{this.state.pName}</h6>
                                            <div><input type="text" className="editField"
                                                        value={this.state.pName}
                                                        id='pName'
                                                        onChange={this.updateChange}/></div>
                                        </ListGroupItem>
                                        <ListGroupItem className="text-left">
                                            <h4>Please Note</h4><h6>At Guided we take the accuracy of
                                            names
                                            seriously
                                            for
                                            legal
                                            and
                                            banking reasons.
                                            A change to a First or Last Name will require corresponding
                                            changes
                                            to
                                            appear on
                                            payment
                                            and government
                                            documents that you may have, or will provide. Click <a
                                                href="null">here</a> to
                                            visit
                                            your government issued documents.</h6>
                                        </ListGroupItem>
                                    </div>
                                </ListGroup>
                            </form>

                        )}
                    </Mutation>
                </div>
            </div>

        )
    }
}

export default EditName;

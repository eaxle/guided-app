import React, {Component} from 'react';
import {ReactDOM} from 'react-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
import {NavLink, Link} from "react-router-dom";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import {Mutation} from "react-apollo";
//9:30,9:47,10:39,11:00,10:20,11:00
//9:00-11:15
const UPDATE_USER = gql`
  mutation updateUserEmail($uid: String!,$email:String!) {
    updateUserEmail(uid: $uid,email:$email) {
     Email
    }
  }
`;

const LOGIN_USER = gql`
               query getUserFisrtNameById($uid:String!){
                   getUserFisrtNameById(uid:$uid) {
                     First_Name
                   }
                 }
               `;


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
        let uid = document.cookie.split('id=')[1];

        return (
            <div className="container-fluid2 container ">
                <Query query={LOGIN_USER} variables={{uid}}>

                    {({loading, error, data}) => {
                        if (loading) return "Loading...";
                        if (error) return `Error! ${error.message}`;

                        return (
                            {data}
                        );
                    }}
                </Query>
                <div>
                    <Mutation mutation={UPDATE_USER}>
                        {(updateUserEmail, {data}) => (
                            <form onSubmit={e => {
                                e.preventDefault();
                                updateUserEmail({variables: {uid: uid, email: 'eaxle07@gmail.com'}});
                                //input.value = "";
                            }}>
                                <ListGroup>
                                    <div className="hearderbackground">
                                        {/*<ApolloConsumer>
                                {client => (
                                    <button className="btn  btncreate generalbtn"
                                            onClick={async (e) => {
                                                e.preventDefault();

                                                const {data} = await client.query({
                                                    query: LOGIN_USER,
                                                    variables: {uid: uid}
                                                });
                                                console.log(JSON.stringify(data));
                                            }}
                                    >
                                        Continue
                                    </button>
                                )}
                            </ApolloConsumer>*/}
                                        <ListGroupItem className="text-left">
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td className="tableWidth"><h4>Name</h4>
                                                        <div className="editField">
                                                            <button className=" btn btn-default"
                                                                    onClick={this.revertChanges} type="submit">Save
                                                            </button>
                                                            <h4 className="btn btn-danger"
                                                                onClick={this.revertChanges}>Cancel</h4>
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
                                            <div><input type="text" className="editField" id='fName'
                                                        value={this.state.fName}
                                                        onChange={this.updateChange}/></div>
                                        </ListGroupItem>
                                        <ListGroupItem className="text-left">
                                            <h4>Last Name</h4> <h6>Smith</h6>
                                            <div><input type="text" className="editField" value={this.state.lName}
                                                        id='lName'
                                                        onChange={this.updateChange}/></div>
                                        </ListGroupItem>
                                        <ListGroupItem className="text-left">
                                            <h4>Preferred Name</h4> <h6>John</h6>
                                            <div><input type="text" className="editField" value={this.state.pName}
                                                        id='pName'
                                                        onChange={this.updateChange}/></div>
                                        </ListGroupItem>
                                        <ListGroupItem className="text-left">
                                            <h4>Please Note</h4><h6>At Guided we take the accuracy of names seriously
                                            for
                                            legal
                                            and
                                            banking reasons.
                                            A change to a First or Last Name will require corresponding changes to
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

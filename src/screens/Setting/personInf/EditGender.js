import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
import {NavLink, Link} from "react-router-dom";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import {Mutation} from "react-apollo";
import Form from "react-validation/build/form";

const UPDATE_GENDER = gql`
  mutation updateUserGender($uid: String!,$gender:String!) {
    updateUserGender(uid: $uid,gender:$gender) {
     Gender
    }
  }
`;
const GET_GENDER = gql`
               query getGenderById($uid:String!){
                   getGenderById(uid:$uid) {
                     Gender
                   }
                 }
               `;


class EditGender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            toogle: true
        };
        this.toogleOther = this.toogleOther.bind(this);
    }

    toogleOther(changeEvent) {
        //debugger
        this.setState({toogle: changeEvent.target.value}, () => {
            this.toogle;
        })
        console.log(this.state.toogle)
    }

    // onChange = date => this.setState({date})

    render() {
        let uid = document.cookie.split('id=')[1];

        return (
            <div className="container-fluid2 container ">
                <div>
                    <Query query={GET_GENDER} variables={{uid}}>

                        {({loading, error, data}) => {
                            if (loading) return "Loading...";
                            if (error) return `Error! ${error.message}`;

                            return (
                                {data}
                            );
                        }}
                    </Query>
                    <ListGroup>
                        <div className="">
                            <Mutation mutation={UPDATE_GENDER}>
                                {(updateUserGender, {data}) => (
                                    <Form onSubmit={e => {
                                        e.preventDefault();
                                        updateUserGender({
                                            variables: {
                                                uid: uid,
                                                gender: 'M'
                                            }
                                        });
                                        //input.value = "";
                                    }}>
                                        <ListGroupItem className="text-left">
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td className="tableWidth"><h4>Gender</h4></td>
                                                    <td>
                                                        <div>
                                                            <button className="btn btnSave float-right "
                                                                    type='submit'>Save
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="">
                                                        <div>
                                                            <button className="btn btnCancel float-right ">Cancel
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </ListGroupItem>
                                        <ListGroupItem className="text-left">
                                            <table>
                                                <tbody>
                                                <tr>
                                                    <td className=""><h4>Gender</h4> <h6>Male</h6></td>
                                                </tr>
                                                <tr>
                                                    <div className="rowtablediv">

                                                        <table>
                                                            <tbody>
                                                            <tr>
                                                                <td><label>Male</label></td>
                                                                <td className="centerText">
                                                                    <div className="radioGender"><input type="radio"
                                                                                                        value="m"
                                                                                                        onChange={this.toogleOther}
                                                                                                        name="gender"/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>Female</label></td>
                                                                <td className="centerText">
                                                                    <div className="radioGender"><input type="radio"
                                                                                                        value="f"
                                                                                                        onChange={this.toogleOther}
                                                                                                        name="gender"/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>Other</label></td>
                                                                <td className="centerText">
                                                                    <div className="radioGender"><input type="radio"
                                                                                                        value="o"
                                                                                                        onChange={this.toogleOther}
                                                                                                        name="gender"/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className={this.state.toogle != 'o' ? "displayNone" : "centerText"}>
                                                                    <div className="radioGender"><input type="text"
                                                                                                        name="other"/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Do not show gender</td>
                                                                <td className="centerText">
                                                                    <div className="switch">
                                                                        <input id="cmn-toggle-4"
                                                                               class="cmn-toggle cmn-toggle-round-flat"
                                                                               type="checkbox"/>
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
                                                <h6>We encourage you to list the gender that you are most comfortable
                                                    with. Doing so
                                                    may help
                                                    you to better find listings that fit your needs. You may enter text
                                                    into this
                                                    box to identify
                                                    an alternative gender if you so wish. You do not have to enter a
                                                    value in this
                                                    box and if you
                                                    do not, “Other” will be the defaut.</h6></div>
                                        </ListGroupItem>
                                    </Form>
                                )}
                            </Mutation>
                        </div>
                        <
                        /ListGroup>
                </div>
            </div>
    )
    }
    }

    export default EditGender;

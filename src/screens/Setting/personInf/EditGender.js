import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles.css';
import {NavLink, Link} from "react-router-dom";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import {Mutation} from "react-apollo";
import Form from "react-validation/build/form";
import {client} from '../../../index'

const UPDATE_GENDER = gql`
  mutation updateUserGender($uid: String!,$gender:String!) {
    updateUserGender(uid: $uid,gender:$gender) {
     value
    }
  }
`;
const GET_GENDER = gql`
               query getGenderById($uid:String!){
                   getGenderById(uid:$uid) {
                     value
                   }
                 }
               `;
const GETGENDER = ({uid}) => (
    <Query query={GET_GENDER} variables={{uid}} notifyOnNetworkStatusChange>
        {({loading, error, data, refetch, networkStatus}) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            if (networkStatus === 4) return "Refetching!";
            return (<span id="re_006" onClick={() => refetch()} hidden={true}> {data.getGenderById[0].value}</span>);

        }}
    </Query>
);

class EditGender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            gender: {
                type: 'M',
                value: 'Male',
                show: true
            }
        }

        ;
        this.toogleOther = this.toogleOther.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        if (e.target.type === 'checkbox')
            this.setState({show: e.target.value}, () => {
            })
    }

    componentDidMount() {
        const that = this;
        /*     client.query({query: GET_GENDER, variables: {uid: document.cookie.split('id=')[1]}}).then(function (data) {
                 that.setState({gender: data.data.getGenderById[0].value}, () => {
                 })
             }, function (error) {

             });
             this.setState({gender: 'M'}, () => {
                     console.log(this.state.gender)
                 }
             );
        */
    }

    toogleOther(changeEvent) {
        this.setState({gender: changeEvent.target.value}, () => {
        });
    }

    render() {
        let uid = document.cookie.split('id=')[1];
        return (
            <div className="container-fluid2 container ">

                <div>
                    <ListGroup>
                        <div className="">
                            <GETGENDER uid={uid}/>
                            <Mutation mutation={UPDATE_GENDER}>
                                {(updateUserGender, {data}) => (
                                    <Form onSubmit={e => {
                                        e.preventDefault();
                                        updateUserGender({
                                            variables: {
                                                uid: uid,
                                                gender: this.state.gender
                                            }
                                        }).then(function () {
                                            document.getElementById('re_006').click();

                                        }, function (error) {

                                        });
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
                                                            <button
                                                                className="btn btnCancel float-right ">Cancel
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
                                                    <td className=""><h4>Gender</h4> <h6>
                                                    </h6></td>
                                                </tr>
                                                <tr>
                                                    <div className="rowtablediv">
                                                        <table>
                                                            <tbody>
                                                            <tr>
                                                                <td><label>Male</label></td>
                                                                <td className="centerText">

                                                                    <div className="radioGender"><input
                                                                        type="radio"
                                                                        checked={'M' === this.state.gender.type}
                                                                        value="M"
                                                                        onChange={this.toogleOther}
                                                                        name="gender"/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>Female</label></td>
                                                                <td className="centerText">
                                                                    <div className="radioGender"><input
                                                                        type="radio"
                                                                        checked={'F' === this.state.gender.type}
                                                                        value="F"
                                                                        onChange={this.toogleOther}
                                                                        name="gender"/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td><label>Other</label></td>
                                                                <td className="centerText">
                                                                    <div className="radioGender"><input
                                                                        type="radio"
                                                                        checked={'O' === this.state.gender.type}
                                                                        value="O"
                                                                        onChange={this.toogleOther}
                                                                        name="gender"/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className={this.state.toogle != 'O' ? "displayNone" : "centerText"}>
                                                                    <div className="radioGender"><input
                                                                        type="text"
                                                                        name="gender"/>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Do not show gender</td>
                                                                <td className="centerText">
                                                                    <div className="switch">
                                                                        <input id="cmn-toggle-4"
                                                                               value={this.state.gender.show}
                                                                               onChange={this.handleChange}
                                                                               className="cmn-toggle cmn-toggle-round-flat"
                                                                               type="checkbox"/>
                                                                        <label
                                                                            htmlFor="cmn-toggle-4"></label>
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
                                                <h6>We encourage you to list the gender that you are most
                                                    comfortable
                                                    with. Doing so
                                                    may help
                                                    you to better find listings that fit your needs. You may
                                                    enter text
                                                    into this
                                                    box to identify
                                                    an alternative gender if you so wish. You do not have to
                                                    enter a
                                                    value in this
                                                    box and if you
                                                    do not, “Other” will be the defaut.</h6></div>
                                        </ListGroupItem>
                                    </Form>
                                )}
                            </Mutation>
                        </div>
                    </ListGroup>)

                </div>
            </div>
        )
    }
}

export default EditGender;

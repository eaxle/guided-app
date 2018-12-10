import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './styles.css';
import gql from "graphql-tag";
import {client} from "../../index";
import {Query} from "react-apollo";

const GET_USER_LNAME = gql`
               query getUserLastNameById($uid:String!){
                   getUserLastNameById(uid:$uid) {
                     value
                   }
                 }
               `;
const GET_USER_PNAME = gql`
               query getUserPreferNameById($uid:String!){
                   getUserPreferNameById(uid:$uid) {
                     value
                   }
                 }
               `;


const GETLNAME = ({uid}) => (
        <Query query={GET_USER_LNAME} variables={{uid}} notifyOnNetworkStatusChange>
            {({loading, error, data, refetch, networkStatus}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (networkStatus === 4) return "Refetching!";
                return (<span id="re_003" onClick={() => refetch()}> {data.getUserLastNameById[0].value}</span>);
            }}
        </Query>
    )
;const GETPNAME = ({uid}) => (
        <Query query={GET_USER_PNAME} variables={{uid}} notifyOnNetworkStatusChange>
            {({loading, error, data, refetch, networkStatus}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (networkStatus === 4) return "Refetching!";
                return (<span id="re_004" onClick={() => refetch()}> {data.getUserPreferNameById[0].value}</span>);
            }}
        </Query>
    )
;

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.state = {
            pName: this.props.pName,
            lName: this.props.lName
        };

    }

    componentWillReceiveProps() {
        this.render();
    }


    goBack() {
        window.history.back();
    }


    render() {
        let uid = document.cookie.split('id=')[1];
        return (
            <Navbar fixedTop navbar-expand-sm>
                <Nav bsStyle="pills" pullLeft>
                    <NavItem onClick={() => this.props.toggleSidebar()}>
                        <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                    </NavItem>
                    <NavItem>

                        <GETPNAME uid={uid}/> <GETLNAME uid={uid}/>

                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem>
                        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </NavItem>
                    <NavItem>
                        <div>
                            <button className="btn btnSave float-right" onClick={this.goBack}>Back
                            </button>
                        </div>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default TopBar;

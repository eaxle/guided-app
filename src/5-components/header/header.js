import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
import './styles.css';
import gql from "graphql-tag";
import {client} from "../../index";
import {Query} from "react-apollo";

const GET_USER_NAME = gql`
    query getUserNameById($user_id:String!){
        getUserNameById(user_id:$user_id) {
            first_name,
            last_name,
            preferred_name

        }
    }
`;

const GETLNAME = ({user_id}) => (
        <Query query={GET_USER_NAME} variables={{user_id}} notifyOnNetworkStatusChange>
            {({loading, error, data, refetch, networkStatus}) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (networkStatus === 4) return "Refetching!";
                return (<span id="re_003"
                              onClick={() => refetch()}> {data.getUserNameById[0].preferred_name} {data.getUserNameById[0].last_name}</span>);
            }}
        </Query>
    )
;

class Header extends Component {
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
                <Grid>
                    <Row>
                        <Nav bsStyle="pills" pullLeft>
                            <NavItem onClick={() => this.props.toggleSidebar()}>
                                <span className="glyphicon glyphicon-align-justify iconfont" aria-hidden="true"></span>
                            </NavItem>
                            <NavItem>
                                <GETLNAME user_id={uid}/>

                            </NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem>
                                <span className="glyphicon glyphicon-search iconfont" aria-hidden="true"></span>
                            </NavItem>
                            <NavItem>
                                <div>
                                    <button className="btn btnSave float-right" onClick={this.goBack}>Back
                                    </button>
                                </div>
                            </NavItem>
                        </Nav>
                    </Row>
                </Grid>
            </Navbar>
        );
    }
}

export default Header;

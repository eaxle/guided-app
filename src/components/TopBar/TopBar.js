import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './styles.css';


class TopBar extends Component {
    state = {}
    render() { 
        return (
            <Navbar fixedTop navbar-expand-sm>
                <Nav bsStyle="pills" pullLeft>
                    <NavItem>
                        <span class="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                    </NavItem>
                    <NavItem>
                        John Smith
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem>
                        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
 
export default TopBar;
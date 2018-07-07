import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './styles.css';


class TopBar extends Component {
    render() {
        return (
            <Navbar fixedTop navbar-expand-sm>
                <Nav bsStyle="pills" pullLeft>
                    <NavItem onClick={() => this.props.toggleSidebar()}>
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

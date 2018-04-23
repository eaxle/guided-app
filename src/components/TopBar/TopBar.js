import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './styles.css';


class TopBar extends Component {
    state = {}
    render() { 
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Guided</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}
 
export default TopBar;
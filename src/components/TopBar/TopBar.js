import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './styles.css';


class TopBar extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);

    }

    goBack() {
        window.history.back();
    }

    render() {
        return (
            <Navbar fixedTop navbar-expand-sm>
                <Nav bsStyle="pills" pullLeft>
                    <NavItem onClick={() => this.props.toggleSidebar()}>
                        <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                    </NavItem>
                    <NavItem>
                        John Smith
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem>
                        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </NavItem>
                    <NavItem>
                        <div>
                            <button classNameName="btn btnSave float-right" onClick={this.goBack}>Back
                            </button>
                        </div>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default TopBar;

import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';
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
            <Grid>
              <Row>
                <Nav bsStyle="pills" pullLeft>
                    <NavItem onClick={() => this.props.toggleSidebar()}>
                        <span className="glyphicon glyphicon-align-justify iconfont" aria-hidden="true"></span>
                    </NavItem>
                    <NavItem>
                      <h4> John Smith</h4>
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

export default TopBar;

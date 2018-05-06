import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import './styles.css';

class BottomBar extends Component {
    render() { 
        return (
            <Navbar fixedBottom>
                <Grid>
                    <Row className="bottomRow">
                        <Col xs={3}>
                            <div className="tab">Post</div>
                        </Col>
                        <Col xs={3}>
                            <div className="tab">Do</div>
                        </Col>
                        <Col xs={3}>
                            <div className="tab">Use</div>
                        </Col>
                        <Col xs={3}>
                            <div className="tab">Stay</div>
                        </Col>
                    </Row>
                </Grid>
            </Navbar>
        )
    }
}
 
export default BottomBar;
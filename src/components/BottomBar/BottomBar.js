import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import './styles.css';

class BottomBar extends Component {
    render() { 
        return (
            <Navbar fixedBottom>
                <Grid>
                    <Row>
                        <Col xs={3}>
                            Post
                        </Col>
                        <Col xs={3}>
                            Do
                        </Col>
                        <Col xs={3}>
                            Use
                        </Col>
                        <Col xs={3}>
                            Stay
                        </Col>
                    </Row>
                </Grid>
            </Navbar>
        )
    }
}
 
export default BottomBar;
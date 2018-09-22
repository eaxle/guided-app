import React, { Component } from 'react';
import { Thumbnail, Image, Grid, Row, Col } from 'react-bootstrap';
import './styles.css';
import Rating from '../Rating';

class ProfileImageAndIcon extends Component {
    state = {}

    render() {
        return (
            <Thumbnail alt="242x200" src="/sampleImg.jpg">
                <Grid>
                    <Row>
                        <Col xs={8}>
                            <Image className="icon" src="/sampleIcon.jpg" circle/>
                        </Col>
                    </Row>
                    <Row className="margintop">
                        <Col xs={5}>
                            <span className="title">John Smith</span>
                        </Col>
                        <Col xs={3}>
                            <button className="btn editBtn">Edit Profile</button>
                        </Col>
                        <Col xs={3}>
                            <button className="btn following">Following</button>
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={6}>
                            <p><span className="glyphicon glyphicon-map-marker attr"></span>Current City, Country</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <span className="attr">Following??</span>
                        </Col>
                        <Col xs={5}>
                            <span className="attr right">Followed by ??</span>
                        </Col>
                    </Row>
                </Grid>
            </Thumbnail>
        )
    }
}

export default ProfileImageAndIcon;

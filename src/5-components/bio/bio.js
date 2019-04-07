import React, { Component } from 'react';
import { Thumbnail, Image, Grid, Row, Col } from 'react-bootstrap';
import './styles.css';


class Bio extends Component {
    state = {}

    render() {
        return (
            <Thumbnail>
          <Grid>
            <Row>
              <Col xs={12}>
              <h5 className="">Bio</h5>
                <div>
                  <h7>This is your personal bio area.</h7>
                  <h7>Tell us something interesting about yourself!</h7>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
              <h5 className="">Gender</h5>
                <div>
                  <h7>Male</h7>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
              <h5 className="">Date of Birth</h5>
                <div>
                  <h7>01 May 1990</h7>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
              <h5 className="">Languages Spoken</h5>
                <div>
                  <h7>English</h7>
                  <h7>Chinese</h7>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
              <h5 className="">Certification</h5>
                <div className="marginbottom">
                  <h7>Area of Expertise: skydiving</h7>
                  <h7>Qualification Level: instructor</h7>
                  <h7>Issuing Authority: SkyDive Oz</h7>
                </div>
              </Col>
            </Row>

          </Grid>
          </Thumbnail>
        )
    }
}

export default Bio;

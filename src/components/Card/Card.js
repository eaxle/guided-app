import React, { Component } from 'react';
import { Thumbnail, Image, Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import './styles.css';






class Card extends Component {


    render() {
        return (

            // <Thumbnail alt="242x200" src="/sampleImg.jpg" >
            // <h5>This is card section</h5>
            // </Thumbnail>
            <Thumbnail>
              <Grid>
                <Row className="margintop">
                  <Col xs={2}>
                    <div>
                      <Image className="icon2" src="/sampleIcon.jpg" circle/>
                    </div>

                  </Col>
                  <Col xs={3}>

                          <h5>Name</h5>
                          <h6>Time</h6>
                  </Col>
                  <Col xs={5}>
                  </Col>
                  <Col xs={2} className="margintop2">
                          <span className="glyphicon glyphicon-certificate" aria-hidden="true"></span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                  </Col>
                  <Col xs={10}>
                    <div className="">
                      <h5>This is a bit of sample text. You’re probably wasting your time reading this.
                      But hey, I also wasted part of my life writing this just to troll you :)</h5>
                      <h5>This is card section2</h5>

                    </div>
                    <div>
                      <h5>This is picture</h5>
                      <div className ="explorePictureDiv">
                        <Image className="postPictureSize" alt="242x200" src="/sampleImg.jpg" />
                      </div>
                    </div>
                  </Col>

                </Row>
                <Row>
                  <Col xs={2}>
                  </Col>
                  <Col xs={10}>
                      <span className="glyphicon glyphicon-heart margin" aria-hidden="true"></span>
                      <span className="marginleft">14</span>
                      <span className="glyphicon glyphicon-edit marginright " aria-hidden="true"></span>
                      <span className="marginleft">14</span>
                      <span className="glyphicon glyphicon-share marginright" aria-hidden="true"></span>
                      <span className="marginleft">14</span>
                  </Col>
                </Row>
              </Grid>
            </Thumbnail>
        )
    }
}

export default Card;

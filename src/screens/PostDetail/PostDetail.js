import React, { Component } from 'react';
import { Thumbnail, Image, Grid, Row, Col } from 'react-bootstrap';
import Rating from '../../components/Rating';
import OverflowText from '../../components/OverflowText';
import './styles.css';

class PostDetail extends Component {
  state = {}

  render() {
    return (
      <Thumbnail alt="242x200" src="/sampleImg.jpg">
        <Grid>
          <Row>
            <Col xs={8}>
              <Image className="icon" src="/sampleIcon.jpg" circle />
            </Col>
            <Col xs={4}>
              <span className="attr right">{this.props.user}</span>
            </Col>
          </Row>
          <span className="title">{this.props.title}</span>
          <Row>
            <Col xs={6}>
              <span className="attr">{this.props.location}</span>
            </Col>
            <Col xs={6}>
              <span className="attr right">{this.props.duration}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <span className="attr"><Rating rating={this.props.rating} /></span>
            </Col>
            <Col xs={6}>
              <span className="attr right">{'$' + this.props.price}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <span className="attr">{this.props.review + " Reviews"}</span>
            </Col>
            <Col xs={6}>
              <span className="attr right">{"Per " + this.props.guestNum + " Guests"}</span>
            </Col>
          </Row>
        </Grid>
        <span className="title">Discription</span>
        <a href="#"><span className="title">(Edit)</span></a>
        <OverflowText text={this.props.description} /> 
        <textarea className="textBox"/>
      </Thumbnail>
    )
  }
}

export default PostDetail;
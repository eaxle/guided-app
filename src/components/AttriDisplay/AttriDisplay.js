import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Rating from '../Rating';
import './styles.css';

class AttriDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Grid>
          <span className="title">{this.props.post.title}</span>
          <Row>
            <Col xs={6}>
              <span className="attr">{this.props.post.location}</span>
            </Col>
            <Col xs={6}>
              <span className="attr right">{this.props.post.duration}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <span className="attr"><Rating rating={this.props.post.rating} /></span>
            </Col>
            <Col xs={6}>
              <span className="attr right">{'$' + this.props.post.price}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <span className="attr">{this.props.post.review + " Reviews"}</span>
            </Col>
            <Col xs={6}>
              <span className="attr right">{"Per " + this.props.post.guestNum + " Guests"}</span>
            </Col>
          </Row>
        </Grid>
      </div> )
  }
}
 
export default AttriDisplay;
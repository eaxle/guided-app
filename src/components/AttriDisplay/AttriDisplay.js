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
          <Row>
            <Col xs={6}>
              <span className="attr">{this.props.post.location.city + ", " + this.props.post.location.country}</span>
            </Col>
            <Col xs={6}>
              <span className="attr right">{this.props.post.duration + " " + this.props.post.timeUnit}</span>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <span className="attr"><Rating rating={this.props.post.rating} /></span>
            </Col>
            <Col xs={6}>
              <span className="attr right">{
                this.props.post.currency + 
                this.props.post.price +
                " Per " + 
                this.props.post.guestNum + 
                " Guests"
              }</span>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <span className="attr">{this.props.post.reviewCount + " Reviews"}</span>
            </Col>
            <Col xs={6}>
              <span className="attr right">{"Max " + this.props.post.guestMax + " Guests"}</span>
            </Col>
          </Row>
        </Grid>
      </div> )
  }
}
 
export default AttriDisplay;
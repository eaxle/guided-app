import React, { Component } from 'react';
import { Thumbnail, Image, Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import Rating from '../../components/Rating';
import OverflowText from '../../components/OverflowText';
import TextFrom from '../../components/TextForm';
import ListEditor from '../../components/ListEditor';
import MapSnap from '../../components/MapSnap';
import LocSearchBox from '../../components/LocSearchBox';
import './styles.css';

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleEditDiscription: false,
      toggleEditProvide: false,
    }

    this.editDiscription = this.editDiscription.bind(this);
    this.editProvide = this.editProvide.bind(this);
  }

  editDiscription() {
    this.setState((prevStat) => ({
      toggleEditDiscription: !prevStat.toggleEditDiscription
    }));
  }

  editProvide() {
    this.setState(prevStat => ({
      toggleEditProvide: !prevStat.toggleEditProvide
    }))
  }

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
        <div className="section">
          <span className="title">Discription</span>
          <a onClick={this.editDiscription} className="title">{this.state.toggleEditDiscription ? "(Discard)" : "(Edit)"}</a>
          {this.state.toggleEditDiscription ? <TextFrom /> : <OverflowText text={this.props.description} />}
        </div>
        <div className="section">
          <span className="title">What's provided?</span>
          <a onClick={this.editProvide}><span className="title">{this.state.toggleEditProvide ? "(Discard)" : "(Edit)"}</span></a>
          {this.state.toggleEditProvide ? <ListEditor /> :
            <ListGroup>
            {this.props.provide.map(ele => <ListGroupItem>{ele}</ListGroupItem>)}
            </ListGroup>
          }
        </div>
        <div className="section">
        
          <LocSearchBox></LocSearchBox>
        </div>
        </Thumbnail>
    )
  }
}

export default PostDetail;
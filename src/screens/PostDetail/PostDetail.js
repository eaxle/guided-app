import React, { Component } from 'react';
import { Button, Thumbnail, Image, Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
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
      toggleEditMeetLoc: false,
    }

    this.editDiscription = this.editDiscription.bind(this);
    this.editProvide = this.editProvide.bind(this);
    this.editMeetLoc = this.editMeetLoc.bind(this);
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

  editMeetLoc() {
    this.setState(prevStat => ({
      toggleEditMeetLoc: !prevStat.toggleEditMeetLoc
    }))
  }

  render() {
    return (
      <div>
        <div className="floatButtonGroup">
          <div>
            <Button className="floatButton">Publish</Button>
          </div>
          <div>
            <Button className="floatButton">Draft</Button>
          </div>
          <div>
            <Button className="floatButton">Delete</Button>
          </div>
        </div>
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
            <span className="title">Where will we meet?</span>
            <a onClick={this.editMeetLoc}><span className="title">{this.state.toggleEditMeetLoc ? "(Discard)" : "(Edit)"}</span></a>
            {this.state.toggleEditMeetLoc ? <LocSearchBox /> : <MapSnap />
            }
          </div>
        </Thumbnail>
      </div>
    )
  }
}

export default PostDetail;
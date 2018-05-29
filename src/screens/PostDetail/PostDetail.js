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
      DescriptionEditMode: false,
      ProvideEditMode: false,
      ProvideEditMeetLoc: false,
    }

    this.toggleEditDescription = this.toggleEditDescription.bind(this);
    this.editDescription = this.editDescription.bind(this);
    this.toggleEditProvide = this.toggleEditProvide.bind(this);
    this.toggleEditMeetLoc = this.toggleEditMeetLoc.bind(this);
  }

  toggleEditDescription() {
    this.setState((prevStat) => ({
      DescriptionEditMode: !prevStat.DescriptionEditMode
    }));
  }

  editDescription(newDescription) {
    this.props.editDescription(newDescription);
    this.toggleEditDescription();
  }

  toggleEditProvide() {
    this.setState(prevStat => ({
      ProvideEditMode: !prevStat.ProvideEditMode
    }))
  }

  toggleEditMeetLoc() {
    this.setState(prevStat => ({
      ProvideEditMeetLoc: !prevStat.ProvideEditMeetLoc
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
                <span className="attr right">{this.props.post.user}</span>
              </Col>
            </Row>
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
          <div className="section">
            <span className="title">Description</span>
            <a onClick={this.toggleEditDescription} className="title">{this.state.DescriptionEditMode ? "(Discard)" : "(Edit)"}</a>
            {this.state.DescriptionEditMode ? 
              <TextFrom text={this.props.post.description} handleSubmit={this.editDescription}/> : 
              <OverflowText text={this.props.post.description} />
            }
          </div>
          <div className="section">
            <span className="title">What's provided?</span>
            <a onClick={this.toggleEditProvide}><span className="title">{this.state.ProvideEditMode ? "(Discard)" : "(Edit)"}</span></a>
            {this.state.ProvideEditMode ? <ListEditor /> :
              <ListGroup>
              {this.props.post.provide.map(ele => <ListGroupItem>{ele}</ListGroupItem>)}
              </ListGroup>
            }
          </div>
          <div className="section">
            <span className="title">Where will we meet?</span>
            <a onClick={this.toggleEditMeetLoc}><span className="title">{this.state.ProvideEditMeetLoc ? "(Discard)" : "(Edit)"}</span></a>
            {this.state.ProvideEditMeetLoc ? <LocSearchBox /> : <MapSnap />
            }
          </div>
        </Thumbnail>
      </div>
    )
  }
}

export default PostDetail;
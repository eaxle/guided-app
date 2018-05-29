import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col, Grid, Row, InputGroup } from 'react-bootstrap';
import './styles.css';

class AttriEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: this.props.post.title,
      country: this.props.post.location.country,
      city: this.props.post.location.city,
      duration: this.props.post.duration,
      timeUnit: this.props.post.timeUnit,
      currency: this.props.post.currency,
      price: this.props.post.price,
      guestNum: this.props.post.guestNum,
      guestMax: this.props.post.guestMax
    }

    this.handleValueChange = this.handleValueChange.bind(this);

  }

  handleValueChange(e) {
    switch(e.target.id) {
      case 'title':
        this.setState({
          title: e.target.value
        })
        break;
      case 'country':
        this.setState({
          country: e.target.value
        })
        break;
      case 'city':
        this.setState({
          city: e.target.value
        })
        break;
      case 'duration':
        this.setState({
          duration: e.target.value
        })
        break;
      case 'timeUnit':
        this.setState({
          timeUnit: e.target.value
        })
        break;
      case 'currency':
        this.setState({
          currency: e.target.value
        })
        break;
      case 'price':
        this.setState({
          price: e.target.value
        })
        break;
      case 'guestNum':
        this.setState({
          guestNum: e.target.value
        })
        break;
      case 'guestMax':
        this.setState({
          guestMax: e.target.value
        })
        break;
    }
  }

  render() { 
    return ( 
      <div>
        <form>
          <Grid>
            <span>Title</span>
            <FormControl
              id="title"
              type="text"
              value={this.state.title}
              placeholder="Enter title"
              onChange={this.handleValueChange}
            />
            <Row>
              <Col xs={6}><span>Country</span></Col>
              <Col xs={6}><span>City</span></Col>
            </Row>
            <Row>
              <Col xs={6}>
                <FormControl
                  id="country"
                  componentClass="select"
                  placeholder="Select a country"
                  value={this.state.country}
                  onChange={this.handleValueChange}
                >
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="China">China</option>
                </FormControl>
              </Col>
              <Col xs={6}>
                <FormControl
                  id="city"
                  componentClass="select"
                  placeholder="Select a city"
                  value={this.state.city}
                  onChange={this.handleValueChange}
                >
                  <option value="Melbourne">Melbourne</option>
                  <option value="Sydeny">Sydney</option>
                </FormControl>
              </Col>
            </Row>
            <Row>
              <Col xs={6}><span>Duration</span></Col>
              <Col xs={6}><span>Max Guest Number</span></Col>
            </Row>
            <Row>
              <Col xs={3}>
                <FormControl
                  id="duration"
                  type="number"
                  placeholder="Enter duration"
                  value={this.state.duration}
                  onChange={this.handleValueChange}
                />
              </Col>
              <Col xs={3}>
                <FormControl
                  id="timeUnit"
                  componentClass="select"
                  placeholder="Select time unit"
                  value={this.state.timeUnit}
                  onChange={this.handleValueChange}
                >
                  <option value="Days">Days</option>
                  <option value="Hours">Hours</option>
                  <option value="Minutes">Minutes</option>
                </FormControl>
              </Col>
              <Col xs={6}>
                <FormControl
                  id="guestMax"
                  type="number"
                  placeholder="Enter max guest number"
                  value={this.state.guestMax}
                  onChange={this.handleValueChange}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6}><span>Price</span></Col>
              <Col xs={6}><span>Per Guest</span></Col>
            </Row>
            <Row>
              <Col xs={3}>
                <FormControl
                  id="currency"
                  componentClass="select"
                  placeholder="Select a currency"
                  value={this.state.currency}
                  onChange={this.handleValueChange}
                >
                  <option value="AUD">AUD</option>
                  <option value="USD">USD</option>
                  <option value="CNY">CNY</option>
                </FormControl>
              </Col>
              <Col xs={3}>
                <FormControl
                  id="price"
                  type="number"
                  placeholder="Enter price"
                  value={this.state.price}
                  onChange={this.handleValueChange}
                />
              </Col>
              <Col xs={6}>
                <FormControl
                  id="guestNum"
                  type="number"
                  placeholder="Enter guest number"
                  value={this.state.guestNum}
                  onChange={this.handleValueChange}
                />
              </Col>
            </Row>
          </Grid>
        </form>
      </div> 
    )
  }
}
 
export default AttriEditor;
import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import CompactCalendar from '../CompactCalendar';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class EventTimeDisplay extends Component {
  state = {}
  render() { 
    return (
    <div>
      <ReactSwipe className="carousel" swipeOptions={{ continuous: false }}>
        <div><CompactCalendar /></div>
        <div><CompactCalendar /></div>
        <div><CompactCalendar /></div>
      </ReactSwipe>
      <br/>
      <ListGroup>
        <ListGroupItem>item 1</ListGroupItem>
        <ListGroupItem>item 2</ListGroupItem>
      </ListGroup>
    </div>
  )
  }
}
 
export default EventTimeDisplay;
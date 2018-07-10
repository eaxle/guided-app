import React, { Component } from 'react';
// import Calendar from 'react-calendar';
import Calendar from 'react-calendar/dist/entry.nostyle';

var ScrollArea = require('react-scrollbar');
// var ReactDOM = require('react-dom');
// var React = require('react');
class CalendarView extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <div
          speed={0.8}
          className="area"
          contentClassName="content"
          horizontal={false}
          >
          <div> 
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
              />
          </div>
        </div>
      </div>
    );
  }
}
export default CalendarView;

import React, { Component } from 'react';
import Calendar from 'rc-calendar';
import '../../../node_modules/rc-calendar/assets/index.css';
import './styles.css';

class CompactCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() { 
    return (
      <div className="compactCalendarContainer">
        <Calendar 
          showToday={false}
          showDateInput={false}
        />
      </div>
    )
  }
}
 
export default CompactCalendar;
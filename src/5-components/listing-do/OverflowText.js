import React, { Component } from 'react';

class OverflowText extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      hide: true
    }
    
    this.toggleText = this.toggleText.bind(this);
  }
  

  toggleText() {
    this.setState((prevStat) => {
      return {
        hide: !prevStat.hide
      }
    })
  }
  render() { 
    const maxHei = this.state.hide ? "60px" : null;
    const containerStyle =  {
      maxHeight: maxHei,
      overflow: "hidden"
    }

    return (
      <div>
        <div style={containerStyle}>
          <span className="attr" >{this.props.text}</span>
        </div>
        <a className="attr" onClick={this.toggleText}> (Read More) </a>
      </div>
    )
  }
}
 
export default OverflowText;
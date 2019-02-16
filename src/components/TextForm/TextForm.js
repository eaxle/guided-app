import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import './styles.css';

class TextForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.text);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() { 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Instruction Message Shows Here</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Enter Text" onChange={this.handleChange} value={this.state.text}></FormControl>
          </FormGroup>
          <Button type="submit">Save</Button>
        </form>
      </div>
    )
  }
}
 
export default TextForm;
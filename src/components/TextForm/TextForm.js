import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import './styles.css';

class TextForm extends Component {
  state = {}
  render() { 
    return (
      <div>
        <form>
          <FormGroup>
            <ControlLabel>Instruction Message Shows Here</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Enter Text"></FormControl>
          </FormGroup>
          <Button type="submit">Save</Button>
        </form>
      </div>
    )
  }
}
 
export default TextForm;
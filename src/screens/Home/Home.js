import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import './styles.css';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>title</h1>
        <Alert bsStyle="warning">
          <strong>check bootstrap install</strong> Best check yo self, you're not looking too
          good.
        </Alert>
      </div>
    );
  }
}

import React, { Component } from 'react';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label>
          email:</label>
          <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
        
        </div>
        <div className="form-group">
        <label>
          password:</label>
          <input type="password" className="form-control" value={this.state.value} onChange={this.handleChange} />
        </div>
        <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
        
      </form>
    );
  }
}
export default Login;
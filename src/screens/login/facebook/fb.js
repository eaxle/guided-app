/*global FB*/
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
class FbLogin extends Component{
 constructor(props) {
    super(props);
    this.checkLoginState = this.checkLoginState.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.testAPI = this.testAPI.bind(this);
    this.statusChangeCallback = this.statusChangeCallback.bind(this);
  }
componentDidMount() {
console.log("inside componentDidMount");
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2108783869445420',
      cookie     : true,  // enable cookies to allow the server to access
                        // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.1' // use version 2.1
    });

    FB.AppEvents.logPageView();
          FB.Event.subscribe('auth.statusChange', function(response) {
            if (response.authResponse) {
              this.checkLoginState();
            } else {
              console.log('---->User cancelled login or did not fully authorize.');
            }
          }.bind(this));
  }.bind(this);

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
};


testAPI(){
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
  console.log('Successful login for: ' + response.name);
  document.getElementById('status').innerHTML =
    'Thanks for logging in, ' + response.name + '!';
  });
};

statusChangeCallback(response){
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    this.testAPI();
  } else if (response.status === 'not_authorized') {
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    document.getElementById('status').innerHTML = 'Please log ' +
    'into Facebook.';
  }
};

checkLoginState()
 {
    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  };
  handleClick()
  {
    FB.login(this.checkLoginState());
  }

render() {
    return (
      <main>
        <Grid fluid>
            <h1>
              Facebook Login
            </h1>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12}>
              <a href="#" onClick={this.handleClick} onlogin={this.checkLoginState}>Login</a>
              <div id="status"></div>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }
}
export default FbLogin ;
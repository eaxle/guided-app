import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from "apollo-boost";
import './index.css';
import Login from './screens/login/login';
import PasswordRegistrationScreen from './screens/login/PasswordRegistrationScreen';
import GenderRegistrationScreen from './screens/login/GenderRegistrationScreen';
import MainRegistrationScreen from './screens/login/MainRegistrationScreen';
import NameRegistrationScreen from './screens/login/NameRegistrationScreen';
import BirthdayRegistrationScreen from './screens/login/BirthdayRegistrationScreen';
import PhoneNumberRegistrationScreen from './screens/login/PhoneNumberRegistrationScreen';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI
});

ReactDOM.render(
  <ApolloProvider client={client}>
<Router >
<div>
<Switch>
    <Route exact path="/PasswordRegistrationScreen" render={pros=> <PasswordRegistrationScreen {...pros}/>} />
    <Route exact path="/GenderRegistrationScreen"  render={pros=> <GenderRegistrationScreen {...pros}/>} />
    <Route exact path="/PhoneNumberRegistrationScreen" render={pros=> <PhoneNumberRegistrationScreen {...pros}/>}  />
    <Route exact path="/BirthdayRegistrationScreen" render={pros=> <BirthdayRegistrationScreen {...pros}/>} />
    <Route exact path="/MainRegistrationScreen" render={pros=> <MainRegistrationScreen {...pros}/>}  />
    <Route exact path="/NameRegistrationScreen" render={pros=> <NameRegistrationScreen {...pros}/>}   />
    <Route exact path="/" render={pros=> <Login {...pros}/>}   /></Switch>
    </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();

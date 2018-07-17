import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import './index.css';
import Home from './screens/Home';
import Login from './screens/login/login';
import PasswordRegistrationScreen from './screens/login/PasswordRegistrationScreen';
import GenderRegistrationScreen from './screens/login/GenderRegistrationScreen';
import MainRegistrationScreen from './screens/login/MainRegistrationScreen';
import NameRegistrationScreen from './screens/login/NameRegistrationScreen';
import BirthdayRegistrationScreen from './screens/login/BirthdayRegistrationScreen';
import PhoneNumberRegistrationScreen from './screens/login/PhoneNumberRegistrationScreen';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
<Router >
<div>
    <Route exact path="/PasswordRegistrationScreen" component={PasswordRegistrationScreen} />
    <Route exact path="/GenderRegistrationScreen" component={GenderRegistrationScreen} />
    <Route exact path="/PhoneNumberRegistrationScreen" component={PhoneNumberRegistrationScreen} />
    <Route exact path="/BirthdayRegistrationScreen" component={BirthdayRegistrationScreen} />
    <Route exact path="/MainRegistrationScreen" component={MainRegistrationScreen} />
    <Route exact path="/NameRegistrationScreen" component={NameRegistrationScreen} />
    <Route exact path="/" component={Login} />
    </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

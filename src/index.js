import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import Home from './screens/Home';
import Login from './screens/login/login';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>

    <Login />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

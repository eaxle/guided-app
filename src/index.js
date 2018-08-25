import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomeTwo from './screens/HomeTwo';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <HomeTwo />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

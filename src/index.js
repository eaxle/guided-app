import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomeTwo from './screens/HomeTwo';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <HomeTwo />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

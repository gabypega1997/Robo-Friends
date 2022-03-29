import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from "./containers/App";
import "tachyons";
import { searchRobots } from './reducers';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').catch(function(ex) {
    console.warn(ex);
    console.warn('(This warning can be safely ignored outside of the production build.)');
  });
}

const store = createStore(searchRobots)

ReactDOM.render(
  <Provider store={store}>
    <App />  
  </Provider>,
  document.getElementById('root')
);


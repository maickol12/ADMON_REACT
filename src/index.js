import React from 'react';
import ReactDOM from 'react-dom';
import LoginReducer from './reducers/Login/';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AdminApp } from './AdminApp';
import './styles/styles.scss';

const store = createStore(LoginReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AdminApp />
  </Provider>,
  document.getElementById('root')
);

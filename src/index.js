import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { AdminApp } from './AdminApp';
import { reducer as formReducer} from 'redux-form';
import * as reducers from './reducers/index';

import './styles/styles.scss';

const redux = {
  ...reducers,
  form: formReducer
};
const reducer = combineReducers(redux);

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AdminApp />
  </Provider>,
  document.getElementById('root')
);

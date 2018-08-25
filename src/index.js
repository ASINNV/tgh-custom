import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const initialState = {
  name: "John"
};

const otherState = {
  data: 123
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    default:
      return state;
  }
  return state;
};

const otherReducer = (state = otherState, action) => {
  switch (action.type) {
    case "SET_PARAMETER":
      state = {
        ...state,
        data: action.payload
      };
      break;
    default:
      return state;
  }
  return state;
};

const store = createStore(combineReducers({appReducer, otherReducer}), applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

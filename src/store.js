import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;
//------------------------------------------------------------------

const USER_AUTH = 'USER_AUTH';
const USER_NAME = 'USER_NAME';
const SPIN = 'SPIN';

const initialState = {
  isAuth: localStorage.getItem('token'),
  userName: localStorage.getItem('username'),
  spinActive: false,
};

//action
export const authFunction = (data) => (dispatch) => {
  dispatch({
    type: USER_AUTH,
    payload: data,
  });
};
export const userNameChange = (data) => (dispatch) => {
  dispatch({
    type: USER_NAME,
    payload: data,
  });
};
export const spinActivityChange = (data) => (dispatch) => {
  dispatch({
    type: SPIN,
    payload: data,
  });
};
//reducer
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_AUTH':
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};
const userNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_NAME':
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};
const spinReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SPIN':
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};
const store = createStore(
  combineReducers({
    loginReducer,
    userNameReducer,
    spinReducer,
  }),
  compose(applyMiddleware(thunk), devTools)
);

export default store;

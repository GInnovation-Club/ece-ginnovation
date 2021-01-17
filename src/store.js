import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const initialState = {
  isAuth: localStorage.getItem('token'),
  userName: 'Username',
};
const USER_AUTH = 'USER_AUTH';
const USER_NAME = 'USER_NAME';

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

//reducer
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_AUTH':
      console.log(action.payload);
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
      console.log(action.payload);
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
  }),
  compose(applyMiddleware(thunk), devTools)
);

export default store;

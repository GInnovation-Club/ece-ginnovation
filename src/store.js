import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const initialState = {
  isAuth: localStorage.getItem('token'),
  name: 'Ashutosh Bisoyi',
};

const USER_AUTH = 'USER_AUTH';
//action
export const authFunction = (data) => (dispatch) => {
  dispatch({
    type: USER_AUTH,
    payload: data,
  });
};

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

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    loginReducer,
    userReducer,
  }),
  compose(applyMiddleware(thunk), devTools)
);

export default store;

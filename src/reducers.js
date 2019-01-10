import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

//creating initial state (without redux it was in the constructor of app component)
const initialStateSearch = {
  searchField: ''
}

//creating reducer (JS function) 'searchRobots' with (ES6) default argument values, that `returns` a new state
export const searchRobots = (state=initialStateSearch, action={}) => {
  // console.log(action.type);
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
}

//creating separate initial state
const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}

//creating reducer (JS function) 'requestRobots'
export const requestRobots = (state=initialStateRobots, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { isPending: false, robots: action.payload });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { isPending: false, error: action.payload });
    default:
      return state;
  }
}

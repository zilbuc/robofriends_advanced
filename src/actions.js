import { apiCall } from './api/api';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

// creating an action (JS function) `setSearchField`, that takes in `text` (user input) and returns a JS object
export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

// export const setSearchField = (text) => {
//   console.log(text);
//   return {
//     type: CHANGE_SEARCH_FIELD,
//     payload: text
//   }
// }

// creating an action `requestRobots` that is a higher order function - returns another function; reduxThunk allows this (otherwise REDUX would expect JS object as in setSearchField action)
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}

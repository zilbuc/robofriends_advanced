// constant variables are used in REDUX actions to trigger error messages in case of misspelling - not necessary, good practice
 export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

// because it's a promise, robots will have three states (and 3 actions) - standard for ajax calls:
 export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
 export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
 export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';

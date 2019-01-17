import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

import * as reducers from './reducers'; // allows using reducers.<any reducer>

describe('searchRobots', () => {

  const initialStateSearch = {
    searchField: ''
  }

  it('returns the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
  });

  it('handles CHANGE_SEARCH_FIELD event', () => {
    expect(reducers.searchRobots(initialStateSearch, { type : CHANGE_SEARCH_FIELD, payload: 'abc' })).toEqual({ searchField: 'abc' })
  });
});

describe('requestRobots', () => {

  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
  }

  it('returns initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual({ isPending: false, robots: [], error: '' });
  });

  it('handles REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_PENDING})).toEqual({ isPending: true, robots: [], error: '' });
  });

  it('handles REQUEST_ROBOTS_SUCCESS action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: '123',
        name: 'test',
        email: 'test@gmail.com'
      }]
    })).toEqual({ isPending: false, robots: [{
      id: '123',
      name: 'test',
      email: 'test@gmail.com'
    }], error: '' });
  });

  it('handles REQUEST_ROBOTS_FAILED action', () => {
    expect(reducers.requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_FAILED, payload: 'error' })).toEqual({ isPending: false, robots: [], error: 'error' });
  });

});

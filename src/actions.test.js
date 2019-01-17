import * as actions from './actions';
import * as types from './constants';
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware } from 'redux';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import fetchMock from 'fetch-mock';

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe('setSearchField', () => {

  it('creates an action to search robots', () => {
    const text = 'wooo';
    const expectedAction = {
      type: types.CHANGE_SEARCH_FIELD,
      payload: text
    }

    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });

});

describe('requestRobots', () => {

  it('handles requesting robots API', () => {

    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();

    // console.log('action', action);

    const expectedAction = {
      type: types.REQUEST_ROBOTS_PENDING
    }

    expect(action[0]).toEqual(expectedAction); // [0] because it's a first action
  });

});

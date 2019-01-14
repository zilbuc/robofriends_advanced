import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

describe('testing MainPage component', () => {

  let mockProps, wrapper;

  beforeEach(() => {
    mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps }/>);
  });

  it('expects to render MainPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('filters the robots correctly', () => {
    expect(wrapper.instance().filterRobots()).toEqual([]);
  });

  it('filters the robots correctly2', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'John',
      isPending: false
    }

    const wrapper2 = shallow(<MainPage { ...mockProps2 }/>);
    expect(wrapper2.instance().filterRobots()).toEqual([{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }]);
  });

  it('filters the robots correctly3', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'a',
      isPending: false
    }

    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage { ...mockProps3 }/>);
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
  });

  it('displays error message if `isPending` is true', () => {
    const mockProps4 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
      }],
      searchField: 'John',
      isPending: true
    }

    const wrapper4 = shallow(<MainPage { ...mockProps4 }/>);
    expect(wrapper4.find('h1').length).toBe(1);
  });

});

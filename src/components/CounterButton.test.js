import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

describe('testing CounterButton component', () => {

  let mockColor, wrapper;

  beforeEach(() => {
    mockColor = 'red';
    wrapper = shallow(<CounterButton color={mockColor}/>);
  });

  it('expects to render CounterButton component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly increments the counter', () => {
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1 });
    wrapper.find('[id="counter"]').simulate('keypress');
    expect(wrapper.state()).toEqual({ count: 1 });
  });

  it('receives the `color` prop', () => {
    expect(wrapper.props().color).toEqual('red');
  });

});

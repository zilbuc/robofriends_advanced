import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';


it('expects to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'John John',
      email: 'john@gmail.com'
    }
  ];
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});

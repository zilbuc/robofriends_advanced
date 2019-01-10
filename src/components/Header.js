import React, { Component } from 'react';
import CounterButton from '../components/CounterButton';

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log('Header');
    return (
      <div>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButton color={ 'blue' }/>
      </div>
    )
  }
}

export default Header;

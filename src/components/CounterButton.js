import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  updateCount = () => {
    this.setState(state => {
      return { count: state.count + 1 }
    }, () => {
      console.log('State updated!');
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);

    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    console.log('Counter Button');
    const { count } = this.state;
    return <button color={this.props.color} onClick={this.updateCount}>Count: {count}</button>
  }
}

export default CounterButton;

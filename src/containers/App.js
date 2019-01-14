import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';

//importing REDUX actions:
import { setSearchField, requestRobots } from '../actions';

// mapStateToProps receives state and returns an object with a state.reducer. as props
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField, //would be `state.searchField` if 1 reducer
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

// mapDispatchToProps receives `dispatch` with props that it should listen to and dispatches the actions (onSearchChange - a prop); this replaces `this.setState` in App component
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  render() {
    return <MainPage { ...this.props }/>
  }
}

//connecting App component to the store:
export default connect(mapStateToProps, mapDispatchToProps)(App);

// without REDUX:
// export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import './App.css';

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
  //no longer needed after REDUX:
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     // searchfield: ''
  //   }
  // }

  componentDidMount() {
    this.props.onRequestRobots();
    // before REDUX:
    // // console.log(this.props.store.getState());
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response=> response.json())
    //   .then(users => {this.setState({ robots: users})});
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }

  render() {
    // using `state` with react:
    // const { robots } = this.state;
    // using `state` with redux - state is passed as props right from beginning
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

//connecting App component to the store:
export default connect(mapStateToProps, mapDispatchToProps)(App);

// without REDUX:
// export default App;

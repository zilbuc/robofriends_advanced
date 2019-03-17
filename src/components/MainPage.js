import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import './MainPage.css';

class MainPage extends Component {

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

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  }

  render() {
    // using `state` with react:
    // const { robots } = this.state;
    // using `state` with redux - state is passed as props right from beginning
    const { onSearchChange, isPending } = this.props;

    return (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            { isPending ? <h1>Loading</h1> :
              <ErrorBoundry>
                <CardList robots={this.filterRobots()} />
              </ErrorBoundry>
            }
          </Scroll>
        </div>
      );
  }
}

export default MainPage;

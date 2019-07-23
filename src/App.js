import React, { Component } from 'react';
import './App.css';
import { Segment } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeItem: 'HOME'
    }
  }

  componentDidMount() {
    
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    return (
      <Segment>
        
        <NavBar 
          activeItem={this.state.activeItem}
          handleItemClick={this.handleItemClick}  
        />

        <Switch>
          <Route exact path="/" render={() =>
            <HomePage 
              // send props if necessary
            />} 
          />
          <Route path="/test" render={() => 
            <TestPage 
              // send props if necessary
            />} 
          />
        </Switch>

      </Segment>
    )
  }
}

export default App;
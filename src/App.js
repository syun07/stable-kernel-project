import React, { Component } from 'react';
import './App.css';
import { Segment } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import LoginPage from './components/LoginPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeItem: 'HOME',
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSubmit = () => {
    return fetch(`https://wing-quest.herokuapp.com/auth/token`, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        grant_type: 'password'
			})
		}).then(res => console.log(res))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }
  
  render() {
    return (
      <div className="bg">
        {/* <NavBar 
          activeItem={this.state.activeItem}
          handleItemClick={this.handleItemClick}  
        /> */}
      
        <Switch>
          <Route exact path="/login" render={() =>
            <LoginPage
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
          /> }
            />
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

      </div>
    )
  }
}

export default App;
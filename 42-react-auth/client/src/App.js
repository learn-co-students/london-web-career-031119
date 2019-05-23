import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Header from './pages/Header'
import SignInForm from './pages/SignInForm'
import Inventory from './pages/Inventory'

import API from './API'

import './App.css'

class App extends Component {

  state = {
    username: ''
  }

  signin = username => {
    this.setState({ username })
  }

  signout = () => {
    this.setState({ username: '' })
    localStorage.removeItem('token')
  }

  componentDidMount () {
    API.validate()
      .then(data => {
        if (data.error) {
          this.props.history.push('/signin')
        } else {
          this.signin(data.username)
          this.props.history.push('/inventory')
        }
      })
  }

  render () {
    const { signin, signout } = this
    const { username } = this.state

    return (
      <div className="App">
        <Header username={username} signout={signout} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={props => <SignInForm {...props} signin={signin} />} />
          <Route path='/inventory' component={props => <Inventory {...props} username={username} />} />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)

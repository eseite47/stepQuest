import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Tabs } from './components/Tabs'
import store from './store.js'
import config from './secrets'

import { TabNavigator } from 'react-navigation'

import * as firebase from 'firebase';

import Login from './components/Login';
//import {setUser} from './reducers/login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    // console.log(config)
    firebase.initializeApp(config)
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log('user is logged in')
        this.setState({ user });
      } else {
        // No user is signed in.
        console.log('user is NOT logged in')
        this.setState({ user: null })
      }
    });
  }

  render() {
    if (this.state.user) {
      return (
        <Provider store={store}>
            <Tabs />
        </Provider>
      )
    }
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

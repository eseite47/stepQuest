import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, TextInput, Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
// import { connect } from 'react-redux';
// import { StackNavigator } from 'react-navigation';
// import LoginOldUser from './LoginOldUser'
// import { loginUser } from '../reducers/login';

export default class SignUp extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
    this.onPressSignIn = this.onPressSignIn.bind(this)
  }

  onPressSignIn(navigate){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
     console.log(error)
      // ...
    });
    navigate('App')
  }

  onPressSwitch(navigate){
    navigate('Login')
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.containter}>
      <Text style= {styles.input}>
      New User Sign In?
    </Text>
    <TextInput
      style= {styles.input}
      autoCorrect = {false}
      placeholder = "Enter your Email"
      onChangeText = {email => this.setState({email})}
      value = {this.state.email}
    />
    <TextInput
      style= {styles.input}
      autoCorrect = {false}
      placeholder = "Enter your Password"
      secureTextEntry
      onChangeText = {password => this.setState({password})}
      value = {this.state.password}
    />

    <TouchableOpacity onPress={() => this.onPressSignIn(navigate)} >
    <Text style={styles.button}>Login</Text>
      </TouchableOpacity>

      <Text>
        Already have an account?
      </Text>
      <TouchableOpacity onPress={() => this.onPressSwitch(navigate)} >
      <Text>Sign In</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  containter: {
    marginTop: 40,
    width: '100%',
    borderColor: '#eee'
  },
  input: {
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 2,
    color: '#333',
  },
  button: {
    marginTop: 20,
    padding: 20,
    width: '80%',
    backgroundColor: '#00aeef',
    borderRadius: 4,
    alignItems: 'center'
  }

}


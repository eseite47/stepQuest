import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
// import { connect } from 'react-redux';
// import { StackNavigator } from 'react-navigation';
// import LoginOldUser from './LoginOldUser'
// import { loginUser } from '../reducers/login';

export default class LoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <Text>
        already a member?
      </Text>
    );
  }
}


const styles = {
}


// const mapStateToProps = ({email, password}) => {
//   return {email, password}
// }

// const mapDispatchToProps = (dispatch) => ({
//   loginUser: (email, password) => {
//     dispatch(loginUser(email, password))
//   }
// })


// const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// export default LoginNavigator = StackNavigator({
//     LoginForm: { screen: LoginFormContainer,
//       navigationOptions: {
//         header: null
//       }
//     },
//     LoginOldUser: { screen: LoginOldUser,
//       navigationOptions: {
//         header: null
//       }
//     }
// })

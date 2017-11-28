import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  Image: {
		flex: 1,
		margin: 20
	},
	Textfield: {
		flex: 13,
			justifyContent: 'center',
	}
});

export default class SettingsComponent extends React.Component {

  constructor(props){
    super(props)
    this.onPressLogOut = this.onPressLogOut.bind(this)
  }

  onPressLogOut(navigate){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      navigate('App')
    }).catch();
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
      	<Image style={styles.Image} source={require('./../assets/stepquestTitle.png')} />
				<View style={styles.Textfield}>
          <TouchableOpacity onPress={() => this.onPressLogOut(navigate)} >
    <Text style={styles.button}>LogOut</Text>
      </TouchableOpacity>
        </View>
      </View>
    );
  }
}

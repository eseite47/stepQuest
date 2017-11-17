import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#cc9900',
		alignItems: 'center',
	},
	Image: {
		flex: 1,
		margin: 20
	},
	Textfield: {
		flex: 11,
			justifyContent: 'center',
	}
})

export default class HomeComponent extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.Image} source={require('./../assets/stepquestTitle.png')} />
				<View style={styles.Textfield}>
					<Text>Open up App.js to start working on your app!!!</Text>
					<Text>Changes you make will automatically reload.</Text>
					<Text>Shake your phone to op-n the developer menu.</Text>
				</View>
			</View>
		);
	}
}

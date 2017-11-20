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
	avatar: {
		flex: 1,
		justifyContent: 'center',
		width: 100,
		height: 100
	},
	Textfield: {
		flex: 1,
		justifyContent: 'center',
	}
})

export default class HomeComponent extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.Image} source={require('./../assets/stepquestTitle.png')} />
				<View style={styles.avatar}>
					<Text>My Name</Text>
					<Image style={styles.Image} source={{uri: 'https://orig00.deviantart.net/af8d/f/2017/108/b/3/b3c97b3a6fcf048f0389b80d5585faba-d5pgmkk.png'}} />
				</View>
				<View style={styles.Textfield}>
					<Text>Open up App.js to start working on your app!!!</Text>
					<Text>Changes you make will automatically reload.</Text>
					<Text>Shake your phone to op-n the developer menu.</Text>
				</View>
			</View>
		);
	}
}

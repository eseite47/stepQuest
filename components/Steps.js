import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center',
    //backgroundColor: 'blue',
	},
})

export default class Stats extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>MY STEPS</Text>
				<Text>*all the steps*</Text>
				<Text>PICK YOUR ADVENTURE</Text>
        <Text>*button to pick adventure*</Text>
			</View>
		);
	}
}

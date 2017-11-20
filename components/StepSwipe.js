import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import Steps from './Steps'
import Stats from './Stats'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',
		alignItems: 'center',
	}
})

export default class SwiperComponent extends React.Component {


  render() {
    return (
      <Swiper
        loop={false}
        showsPagination={true}
        index={0}>
        <View style={styles.container}>
          <Steps />
        </View>
        <View style={styles.container}>
          <Stats />
        </View>
      </Swiper>
    )}
  }

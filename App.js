import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!!!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cc9900',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

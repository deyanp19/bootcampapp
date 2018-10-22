import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Results from './src/components/Results/Results';
import Register from './src/components/Register/Register';
import Login from "./src/components/Login/Login";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Results /> */}
        {/* <Register/> */}
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },
});

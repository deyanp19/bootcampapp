import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Results from './src/components/Results/Results';
import Register from './src/components/Register/Register';
import Login from "./src/components/Login/Login";
import SearchBar from "./src/components/SearchBar/SearchBar";



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <SearchBar />
        <Results />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'flex-start',
    marginTop: "10%"
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Results from './src/components/Results/Results';
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

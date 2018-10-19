import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Results from './src/components/Results/Results';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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

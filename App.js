import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Results from './src/components/Results/Results';
// import Register from './src/components/Register/Register';
// import Login from "./src/components/Login/Login";
import SearchBar from "./src/components/SearchBar/SearchBar";
import Header from "./src/components/Header/Header";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appStyle}>
        <Header
          headerText={"Bootcamps"}
        />
        <SearchBar />
        <Results />

      </View>
    );
  }
}

const styles = {
  appStyle:{
    flex: 1,
    backgroundColor: '#B2DBD5'


  }
}

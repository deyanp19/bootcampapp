import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Results from './src/components/Results/Results';
import Register from './src/components/Register/Register';
// import Login from "./src/components/Login/Login";
import SearchSection from "./src/components/Search/SearchSection";

import Filters from "./src/components/Filters/Filters";

import Header from "./src/components/Header/Header";



export default class App extends React.Component {
  render() {
    return (

      <ScrollView style={styles.appStyle}>


        <Header
          headerText={"Bootcamps"}
        />
        <Register/>

        <SearchSection />
        <Results />

      </ScrollView>
    );
  }
}

const styles = {
  appStyle:{
    flex: 1,
    backgroundColor: '#B2DBD5'


  }
}

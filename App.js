import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';

import Register from './src/components/Register/Register';
import Landing from './src/components/Landing/Landing';
import Results from './src/components/Results/Results'
import Login from './src/components/Login/Login';

import { Router, Scene } from 'react-native-router-flux';


class App extends Component {

  render() {

    return (
      <Provider store={createStore(reducers)}>
         <Router sceneStyle={styles.appStyle}>  
          <Scene 
            key="app"
            >
            <Scene
              key='landing'
              component={Landing}
              title="landing"
              hideNavBar
              initial
            >
            </Scene>

            <Scene
              key='results'
              component={Results}
              hideNavBar
              title="results"
            />
          
          < Scene
              key='login'
              component={Login}
              hideNavBar
              title="login"
            />

          < Scene
              key='register'
              component={Register}
              hideNavBar
              title="register"
            />
          </Scene>
        </Router>
      </Provider>
     
  
    );
  }
}


const styles = {
  appStyle:{
    flex: 1,
    backgroundColor: '#B2DBD5'


  }
}

export default App;


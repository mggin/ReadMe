/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {
  Router,
  Scene,
  Actions
} from 'react-native-router-flux'
import BookLists from './BookLists'

// import BookItems from './BookItems'
import PageWebView from './PageWebView'

class Main extends Component {
  render() {
    // console.disableYellowBox = true
    return (
      <Router>
        <Scene key='root' paddingTop='64'>
          <Scene key='booklists'
                 component={BookLists}
                 title='READ ME'
                 titleStyle={styles.titStyle}
                 navigationBarStyle={styles.navStyle}
                 //leftButtonTitle=' '
                 //leftButtonImage={require('./Image Assets/refresh.png')}
                 //leftButtonIconStyle={styles.leftButton}
                 //onLeft={() => {Actions.cover()}}
               />
          <Scene key='buywebview'
                 component={PageWebView}
                 title='READ ME'
                 titleStyle={styles.titStyle}
                 navigationBarStyle={styles.navStyle}
                 backButtonImage={require('./Assets/back.png')}
               />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navStyle: {
    backgroundColor: '#c0392b'
  },
  leftButton: {
    justifyContent: 'flex-end',
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  titStyle: {
    color: '#2980b9',
    fontSize: 25,
    fontWeight: '500',
    color: '#ecf0f1',
    fontFamily: 'Optima',
    // paddingTop: 7,
  }
})

export default Main

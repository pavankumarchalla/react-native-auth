import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common' 

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCkLQJhCKwizqT5nJ64-FQ9hgBvDRFuKgg',
      authDomain: 'react-auth-a00ca.firebaseapp.com',
      databaseURL: 'https://react-auth-a00ca.firebaseio.com',
      projectId: 'react-auth-a00ca',
      storageBucket: 'react-auth-a00ca.appspot.com',
      messagingSenderId: '323150073539'
    });
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        <Text>An app</Text>
      </View>
    )
  }
}

export default App
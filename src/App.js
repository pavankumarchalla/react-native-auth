import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header, Button, Spinner } from './components/common' 
import LoginForm from './components/LoginForm'

class App extends Component {

  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCkLQJhCKwizqT5nJ64-FQ9hgBvDRFuKgg',
      authDomain: 'react-auth-a00ca.firebaseapp.com',
      databaseURL: 'https://react-auth-a00ca.firebaseio.com',
      projectId: 'react-auth-a00ca',
      storageBucket: 'react-auth-a00ca.appspot.com',
      messagingSenderId: '323150073539'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
          return  (
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          )

      case false:
          return <LoginForm />
      
      default:
          return <Spinner size='large' />

    }
    
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
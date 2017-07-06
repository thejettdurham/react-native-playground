import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Hello World!</Text>
        </View>
        <View>
          <Bananas picUri="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"/>
        </View>
        <View>
          <Greeting name='Jett' />
        </View>
      </View>

    );
  }
}

class Bananas extends Component {
  render() {
    let pic = {
          uri: this.props.picUri
    };

    return (
      <Image source={pic} style={{width: 250, height: 110}} />
    );
  }
}

class Greeting extends Component {
  getName() {
    return this.props.name
  };

  render() {
    return (
      <Text>Hello {this.getName()}!</Text>
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

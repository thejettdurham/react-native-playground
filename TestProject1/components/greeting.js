import React, { Component } from 'react';
import { Text }  from 'react-native';

export default class Greeting extends Component {
  getName() {
    return this.props.name
  };

  render() {
    return (
      <Text>Hello {this.getName()}!</Text>
    );
  }
}

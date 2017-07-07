import React, { Component } from 'react';
import { View, Image }  from 'react-native';

export default class Bananas extends Component {
  render() {
    return (
      <Image source={{ uri: this.props.picUri }} style={{width: 250, height: 300}} />
    );
  }
}

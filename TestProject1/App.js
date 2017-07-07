/* @flow */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Layout from './components/layouts';
import Bananas from './components/bananas';
import Stateful from './components/stateful';
import Styled from './components/styled';
import * as Sized from './components/sized';

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //
      // </View>
      <Sized.FlexDimensions />
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

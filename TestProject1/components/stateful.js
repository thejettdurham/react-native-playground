import React, { Component } from 'react';
import { Text }  from 'react-native';

export default class Stateful extends Component {
  constructor(props) {
    super(props); // parent constructor with props
    this.state = {
      showText: true // initial state object
    };
  }

  // move the timer into this method to silence the warnings when the component is not mounted
  componentDidMount() {
    setInterval(() => { // set interval creates a repeating function
      this.setState(prevState => {
        return {
          showText: !prevState.showText
        };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : 'MY DEFAULT TEXT!';
    return (
      <Text>{display}</Text>
    );
  }
}

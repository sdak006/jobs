import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    //styling and customization for the header
    title: 'Rate'
  })
  
  render() {
    return (
      <View>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
      </View>
    );
  }
}

export default DeckScreen;
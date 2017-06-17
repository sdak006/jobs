import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  //used by navigator
  static navigationOptions = ({navigation}) => ({
    title: 'Review Jobs',
    //styling and customization for the header
    headerRight: <Button 
                    title='Settings' 
                    onPress={() => { navigation.navigate('settings') }}
                  />
    })
  
  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}


export default ReviewScreen;
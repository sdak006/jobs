import React, { Component } from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  //used by navigator
  static navigationOptions = ({ navigation }) => ({
    //styling and customization for the header
    title: 'Review Jobs',
    headerStyle: {
        //If the app is running on Android assign 24 to marginTop, if not, assign 0 to marginTop
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    headerRight: (
      <Button
        title='Settings'
        onPress={() => { navigation.navigate('settings') }}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0,122,255,1)'
      />
    )
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
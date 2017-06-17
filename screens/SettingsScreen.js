import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

class SettingsScreeen extends Component {
static navigationOptions = ({ navigation }) => ({
    //styling and customization for the header
    title: 'Settings',
    headerStyle: {
        //If the app is running on Android assign 24 to marginTop, if not, assign 0 to marginTop
        marginTop: Platform.OS === 'android' ? 24 : 0
    }
  })

  render() {
    return (
      <View>
        <Text>SettingsScreeen</Text>
        <Text>SettingsScreeen</Text>
        <Text>SettingsScreeen</Text>
        <Text>SettingsScreeen</Text>
        <Text>SettingsScreeen</Text>
        <Text>SettingsScreeen</Text>
      </View>
    );
  }
}

export default SettingsScreeen;
import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
        <Button
        title='Rests Liked Jobs'
        large
        icon={{ name: 'delete-forever' }}
        backgroundColor='#F44336'
        onPress={this.props.clearLikedJobs}
        />
      </View>
    );
  }
}

export default connect(null, actions)(SettingsScreeen);
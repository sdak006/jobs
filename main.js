import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

//Import Screens
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;

class App extends React.Component {
  render() {
    //Pass kvp route object to navigator
    const MainNavigator = TabNavigator({
      //key
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        },
        {
          tabBarPosition: 'bottom',
          lazyLoad: true
        })
      }
    },
    {
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      lazyLoad: true,
      animationEnabled: false
    });

    return (
        <MainNavigator />
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

Expo.registerRootComponent(App);
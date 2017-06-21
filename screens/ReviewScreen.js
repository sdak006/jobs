import React, { Component } from 'react';
import { View, ScrollView, Text, Platform, StatusBar, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

class ReviewScreen extends Component {
  //used by navigator
  static navigationOptions = ({ navigation }) => ({
    //styling and customization for the header
    title: 'Review Jobs',
    title: 'Jobs',
    tabBarIcon: { 
      icon: ({ tintColor }) => {
        return <Icon name='favorite' size={30} color={tintColor} />
      }
    },
    headerStyle: {
        //If the app is running on Android assign 24 to marginTop, if not, assign 0 to marginTop
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
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

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      const { 
        formattedRelativeTime, company, url, 
        latitude, longitude, jobkey, jobtitle
      } = job

      const initialRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      }

      return (
        <Card title={jobtitle} key = {jobkey} >
          <View style={{ height: 200 }}>
            <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'anroid'}
            initialRegion={initialRegion}
          >
          </MapView>
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title='Apply Now!'
              backgroundColor='#03A9F4'
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
}

function mapStateToProps(state) {
  return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);
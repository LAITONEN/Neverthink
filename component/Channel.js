/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import { channels } from '../data';

class Channel extends Component {

  _changeChannel = () => {
    this.props.changeChannel(this.props.index)
  }

  render() {
    const { channel, isSelectedChannel } = this.props

    console.log(isSelectedChannel)
    return (
      <TouchableWithoutFeedback onPress={this._changeChannel}>
        <View style={[styles.container, isSelectedChannel && styles.selectedContainer]}>
          <View style={styles.topRow}>
          <Image 
            source={{ uri: channel.icon }} 
            style={{ height: 25, width: 25 }}
          />
            <IconFeather name="more-vertical" size={25}/>
          </View>
          <View style={styles.bottomRow}>
            <Text style={{ fontSize: 16 }}>{channel.name}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(245, 245, 245)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    aspectRatio: 1,
    padding: 5,
    width: '31%'
  },
  selectedContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },  
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottomRow: {
    
  }
});

export default Channel

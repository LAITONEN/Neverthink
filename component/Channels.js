import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Channel from './Channel'

class Channels extends React.Component {

    render() {
      const { changeChannel, channels, selectedChannelIndex } = this.props
        return (
          <View style={styles.channelsWrapper}>
            <View style={styles.channelsHeader}>
              <Text style={{ fontSize: 14 }}>My Channels</Text>
              <TouchableWithoutFeedback><Text style={{ color: '#5fc9f8', fontSize: 14 }}>Add More</Text></TouchableWithoutFeedback>
            </View>
            <View style={styles.channels}>
              {channels.map((channel, index) => {
                  return <Channel channel={channel} key={index} index={index} isSelectedChannel={index === selectedChannelIndex} changeChannel={changeChannel} />
                })
              }
            </View>
          </View>
        );
    }
}

export default Channels;


const styles = StyleSheet.create({
  channelsWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: '100%'
  },
  channelsHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },  
  channels: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 20,
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  container: {
    width: '100%'
  }
});
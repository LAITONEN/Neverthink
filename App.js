/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Channels from './component/Channels'
import YouTubeView from './component/YouTubeView'
import { channels } from './data';

class App extends Component {

  state = {
    playlist: channels[0].playlist,
    selectedChannelIndex: 0 
  }

  _loadNewChannel= (update) => {
    this.setState(update)
  }

  _changeChannel = (selectedChannelIndex) => {
    const nextVideoIndex = channels[selectedChannelIndex].nextVideoIndex
    const playlist =  channels[selectedChannelIndex].playlist
    const watchedPlaylistVideos = playlist.slice(0, nextVideoIndex)
    const remainingPlaylistVideos = playlist.slice(nextVideoIndex)
    this.setState({ 
      selectedChannelIndex, 
      playlist: remainingPlaylistVideos.concat(watchedPlaylistVideos)
    })
  }

  _markVideoAsSeen = () => {
    const { selectedChannelIndex } = this.state
    let nextVideoIndex = channels[selectedChannelIndex].nextVideoIndex
    let playlist = channels[selectedChannelIndex].playlist
    nextVideoIndex = nextVideoIndex < playlist.length - 1 ? nextVideoIndex + 1 : playlist.length - 1
    channels[selectedChannelIndex].nextVideoIndex = nextVideoIndex

  }

  render() {
    const { playlist, selectedChannelIndex } = this.state

    return (
      <ScrollView
        style={styles.container}
      >
        <YouTubeView
          loadNewChannel={this._loadNewChannel}
          markVideoAsSeen={this._markVideoAsSeen}
          playlist={playlist}
          selectedChannelIndex={selectedChannelIndex}
        />
        
        <View style={styles.controlsWrapper}>
          <Channels 
            channels={channels} 
            changeChannel={this._changeChannel} 
            selectedChannelIndex={selectedChannelIndex}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  controlsWrapper: {
    padding: 15
  },
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
  },
});


export default App
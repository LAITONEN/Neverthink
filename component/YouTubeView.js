import React from 'react';
import { StyleSheet, PixelRatio, Dimensions } from 'react-native';
import YouTube from 'react-native-youtube';
import Orientation from 'react-native-orientation-locker';

const API_KEY = 'AIzaSyB2hwcerBz9TzugCep71OKUn2Ls1flBmXc'

class YouTubeView extends React.Component {

  state = {
    state: null,
    isFullscreen: false,
    deviceWidth: Dimensions.get('window').width
  }

  _youTubeRef = React.createRef();

  componentDidMount() {
    Orientation.addDeviceOrientationListener((deviceOrientation) => {
      console.log('LISTENER ORIENTATION', deviceOrientation)
      if (deviceOrientation.startsWith('LANDSCAPE')) {
        this.setState({ isFullscreen: true })
      }
      else if (deviceOrientation === 'PORTRAIT') this.setState({ isFullscreen: false})
    })
  }

  componentWillUnmount() {
    Orientation.removeAllListeners()
  }

  _onChangeFullscreen = (e) => {
    this.setState({ isFullscreen: e.isFullscreen })
    if (e.isFullscreen) {
      Orientation.lockToLandscapeLeft()
    }
    else {
      Orientation.lockToPortrait()
    }
  }

  _onChangeState = (e) => {
    this.setState({ state: e.state })

    if (e.state === 'unstarted') this.props.markVideoAsSeen()
  }

  render() {

    const { playlist } = this.props
    const { isFullscreen } = this.state

    return (
      <YouTube
        apiKey={API_KEY}
        ref={this._youTubeRef}
        loop
        videoIds={playlist}
        play={true}
        fullscreen={isFullscreen}
        controls={1}
        style={[
          {
            height: PixelRatio.roundToNearestPixel(
              this.state.deviceWidth / (16 / 9)
            ),
          },
          styles.player,
        ]}
        onChangeState={this._onChangeState}
        onChangeFullscreen={this._onChangeFullscreen}
      />
    );
  }
}

export default YouTubeView;


const styles = StyleSheet.create({
  player: {
    alignSelf: 'stretch',
    marginVertical: 10
  }
});
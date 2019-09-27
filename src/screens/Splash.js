import {Component} from 'react';
import {View, Image, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/splash.png')}
          style={styles.splashImage}/>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  splashImage: {
    resizeMode: 'cover',
    width: width,
    height: height
  }
};
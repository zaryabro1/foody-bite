import React, {Component} from 'react';
import {View, StatusBar,ImageBackground, Text, Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

export default class Splash extends Component {

  componentWillMount(): void {
    setTimeout(() => this.props.navigation.navigate('Login'), 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <ImageBackground
          source={require('../../assets/splash.png')}
          style={styles.splashImage}>
              <Text style={styles.logoStyle}>Foodybite</Text>
        </ImageBackground>

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
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    fontSize: 50,
    // fontWeight: '600',
    color: '#3E3F68',
    zIndex: 1001,
    fontFamily: 'JosefinSans-Bold'
  }
};
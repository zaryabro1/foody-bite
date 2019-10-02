import React, {Component} from 'react';
import {View, StatusBar, Image, Text, Dimensions, TouchableOpacity, ScrollView} from "react-native";
import Textfield from '../components/Textfield';
import Button from '../components/Button'
import LinearGradieant from "react-native-linear-gradient";

const {width, height} = Dimensions.get('window');

export default class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Image
          source={require('../../assets/login.png')}
          style={styles.splashImage}/>
        <LinearGradieant colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']} style={styles.mainView}>
        <View style={styles.logo}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', width: width, marginTop: 30}}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Login')
            }}>
              <Image source={require('../../assets/backarrow.png')}
                     style={{resizeMode: 'contain', width: width * 0.1, height: width * 0.1, marginTop: 5}}/>
            </TouchableOpacity>
            <Text style={styles.logoStyle}>Forgot Password</Text>
            <Image source={require('../../assets/backarrow.png')}
                   style={{resizeMode: 'contain', width: width * 0.1, height: width * 0.1, opacity: 0}}/>
          </View>
          <ScrollView>
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{width: width * 0.7}}>
                  <Text style={{color: '#FFFFFF', fontSize: 17, fontFamily: 'JosefinSans-Regular', marginBottom: 40, textAlign: 'center'}}>Enter your email and we
                    will send you the instructions on how to reset it</Text>
                </View>
                <Textfield source={require('../../assets/mail.png')} placeholder={'Password'}/>
                <View style={{marginTop: 100}}>
                  <Button buttonText={'Send'} style={{
                    height: width * 0.15,
                    width: width * 0.8,
                    backgroundColor: '#5663FF',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 10,
                    marginTop: 150

                  }}/>
                </View>
            </View>
          </ScrollView>

        </View>
        </LinearGradieant>

        {/*<View style={styles.logo}>*/}

        {/*</View>*/}


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
    position: 'relative',
    zIndex: 1000
  },
  mainView: {
    position: 'absolute',
    // backgroundColor: '#0C0C0C',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1001,
    // opacity: 0.5
  },
  logo: {
    flex: 1,
    position: 'absolute',
    // justifyContent: 'center',
    // alignItems: 'center',
    zIndex: 1002,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0

  },
  input: {
    flex: 1
  },
  logoStyle: {
    fontSize: 25,
    marginBottom: 50,
    // fontWeight: '600',
    color: '#FFFFFF',
    // position: 'absolute',
    // zIndex: 1003,
    fontFamily: 'JosefinSans-Bold',

  }
};
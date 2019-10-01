import React, {Component} from 'react';
import {View, StatusBar, Image, Text, Dimensions, TouchableOpacity} from "react-native";
import Textfield from '../components/Textfield';
import Button from '../components/Button'

const {width, height} = Dimensions.get('window');

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Image
          source={require('../../assets/login.png')}
          style={styles.splashImage}/>
        <View style={styles.mainView}/>
        <View style={styles.logo}>
          <Text style={styles.logoStyle}>Foodybites</Text>

          <Textfield source={require('../../assets/mail.png')} placeholder={'Email'} maxLength={25}/>
          <Textfield source={require('../../assets/password.png')} placeholder={'Password'} secureTextEntry={true} maxLength={15}/>

          <View style={{alignItems: 'flex-end', width: width, paddingRight: 30}}>
            <TouchableOpacity style={{marginVertical: 10}}>
              <Text style={{
                fontFamily: 'JosefinSans-Regular',
                color: '#FFFFFF',
                fontSize: 18
              }} onPress={() => {
                this.props.navigation.navigate('Forgot')
              }}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <Button buttonText={'Login'} style={{
            height: width * 0.15,
            width: width * 0.8,
            backgroundColor: '#5663FF',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
            marginTop: 50

          }}/>

          <TouchableOpacity style={{borderBottomWidth: 1, borderBottomColor: '#E4E4E4', marginTop: 30}}>
            <Text style={{color: '#E4E4E4', fontFamily: 'JosefinSans-Regular'}}>Create New Account</Text>
          </TouchableOpacity>
        </View>

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
    backgroundColor: '#0C0C0C',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1001,
    opacity: 0.5
  },
  logo: {
    // flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 30,
    marginBottom: 200,
    // fontWeight: '600',
    color: '#FFFFFF',
    // position: 'absolute',
    // zIndex: 1003,
    fontFamily: 'JosefinSans-Bold',

  }
};
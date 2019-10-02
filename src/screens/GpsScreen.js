import React, {Component} from 'react';
import {View, StatusBar, Image, Text, Dimensions, TouchableOpacity} from "react-native";
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import LinearGradieant from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

export default class GpsScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Image
          source={require('../../assets/gps.png')}
          style={styles.splashImage}/>
        <LinearGradieant colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 1)']} style={styles.mainView}>

            <View style={{flexDirection: 'row', justifyContent: 'space-around', width: width, marginTop: 40}}>

                <Image source={require('../../assets/backarrow.png')}
                       style={{resizeMode: 'contain', width: width * 0.1, height: width * 0.1, marginTop: 5, opacity: 0}}/>
              <Text style={{opacity: 0}}>Forgot Password</Text>
                <TouchableOpacity>
                  <View style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', justifyContent: 'center', alignItems: 'center', elevation: 3, borderRadius: 10}}>
                    <Text style={{color: '#FFFFFF', paddingHorizontal: 15, paddingVertical: 7, fontSize: 18, fontFamily: 'JosefinSans-Regular'}}>Skip</Text>
                  </View>
                </TouchableOpacity>
            </View>
          <View style={{flex: 1}}/>
            <View style={{alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{width: width*0.8}}>
                <Text style={{color: '#FFFFFF', fontSize: 40, fontWeight: '600', fontFamily: 'JosefinSans-Regular'}}>Hello John,</Text>
                <Text style={{color: '#FFFFFF', fontSize: 40, fontWeight: '600',fontFamily: 'JosefinSans-Regular'}}>Welcome to</Text>
                <Text style={{color: '#FFCC00', fontSize: 40, fontWeight: '600',fontFamily: 'JosefinSans-Regular', marginBottom: 40}}>Foodybite</Text>
                <Text style={{color: '#FFFFFF', fontSize: 20,fontFamily: 'JosefinSans-Regular', marginBottom: 40, lineHeight: 25}}>Please turn on your GPS to find better restaurant suggestions near you.</Text>
                <Button buttonText={'Turn on GPS'} style={{
                  height: width * 0.15,
                  width: width * 0.8,
                  backgroundColor: '#5663FF',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginTop: 50
                }}/>
              </View>
            </View>

        </LinearGradieant>
      </View>
    )
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
  }
}
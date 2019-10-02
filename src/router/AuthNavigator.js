import {createStackNavigator} from "react-navigation-stack";
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import Register from '../screens/Register';
import GpsScreen from '../screens/GpsScreen';

const AuthNavigator = createStackNavigator({
    Splash: Splash,
    Login: Login,
    Forgot: ForgotPassword,
    Register: Register,
    GpsScreen: GpsScreen
  },
  {
    initialRouteName: 'GpsScreen',
    headerMode: 'none'
  });

export default AuthNavigator;
import {createStackNavigator} from "react-navigation-stack";
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';

const AuthNavigator = createStackNavigator({
    Splash: Splash,
    Login: Login,
    Forgot: ForgotPassword
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none'
  });

export default AuthNavigator;
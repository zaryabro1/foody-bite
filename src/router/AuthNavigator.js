import {createStackNavigator} from "react-navigation-stack";
import Splash from '../screens/Splash';

const AuthNavigator = createStackNavigator({
    Splash: Splash
  },
  {
    initialRouteName: 'Splash'
  });

export default AuthNavigator;
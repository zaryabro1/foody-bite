import {createSwitchNavigator, createAppContainer} from "react-navigation";
import AuthNavigator from './AuthNavigator'

const SwitchNavigator = createSwitchNavigator({
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'Auth'
  });

const Router = createAppContainer(SwitchNavigator);

export default Router;
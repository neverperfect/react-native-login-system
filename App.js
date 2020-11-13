import { createAppContainer, createStackNavigator } from "react-navigation";
import Login from './screens/Login';
import Profile from './screens/Profile'
import Adhi from './screens/profile/Adhi'
import TestUser from './screens/profile/TestUser'
import Scan from './screens/Scan'

const AppNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    Profile: {screen: Profile},
    adhiariawan: {screen: Adhi},
    testuser: {screen: TestUser},
    Scan: {screen: Scan},
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
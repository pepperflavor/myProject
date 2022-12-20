import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';

import { View } from 'react-native-web';
import AllSpots from './screens/maps/AllSpots';
import AddSpot from './screens/maps/AddSpot';
import SpotToggle from './components/ui/SpotToggle';
import SpotMap from './screens/maps/SpotMap';
import MainMap from './screens/maps/MainMap';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: 'white',
        contentStyle: { backgroundColor:"black" },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name='AddSpot' component={AddSpot}/>
      <Stack.Screen name='SpotMap' component={SpotMap}/>
      <Stack.Screen name='AllSpots' component={AllSpots}/>
      <Stack.Screen name='MainMap' component={MainMap}/>
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: "black" },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

// function SpotStack(){
//   return(
//     <Stack.Navigator>
//       <Stack.Screen name='AllSpots' component={AllSpots} options={{
//         title: '모든 Spot',
//         headerRight: ({tintColor}) => <SpotToggle/>
//       }}/>
//       <Stack.Screen name='AddSpot' component={AddSpot}/>
//     </Stack.Navigator>
//   )
// }

function Navigation() {
  return (
    <NavigationContainer>
      {/* 로그인 되어있는지 아닌지 여기서 확인후 설정 */}
      <AuthStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <Navigation />
    </>
  );
}

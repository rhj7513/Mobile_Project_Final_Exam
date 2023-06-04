import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import SplashScreen from './SplashScreen';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Tab" 
    screenOptions={{
      headerShown: false, // 헤더 숨김
    }}
  >
      <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

function StackNavigator (){
  return (
    <Stack.Navigator initialRouteName='SplashScreen'>
    {/* SplashScreen which will come once for 5 Seconds */}
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      // Hiding header for Splash Screen
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Auth"
      component={Auth}
      options={{ headerShown: false }}
    />
    </Stack.Navigator>
   
  );
};

export default StackNavigator;

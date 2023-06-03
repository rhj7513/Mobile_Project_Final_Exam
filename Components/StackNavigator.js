import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

function StackNavigator (){
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

export default StackNavigator;

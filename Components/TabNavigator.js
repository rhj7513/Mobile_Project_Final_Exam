import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Today from '../Pages/Today';
import Tomorrow from '../Pages/Tomorrow';


const Tab = createMaterialTopTabNavigator();

function TabNavigator () {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false, // 라벨 숨김
        showIcon: false, // 아이콘 숨김
      }}
    >
      <Tab.Screen name="Today" component={Today}/>
      <Tab.Screen name="Tomorrow" component={Tomorrow}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;

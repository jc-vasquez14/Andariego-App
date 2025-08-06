import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Itinerary from '../screens/Itinerary';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Itinerary" component={Itinerary} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

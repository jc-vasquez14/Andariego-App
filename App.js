import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import SignUp from './screens/Sign-up';
import MainTabs from './screens/MainTabs';
import CulturalInterestsScreen from './screens/CulturalInterestsScreen';
import SignIn from './screens/Sign-in';

import ExperienceDetail from './screens/ExperienceDetail'; // Ya lo tienes

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="CulturalInterests" component={CulturalInterestsScreen} />

        {/* ✅ Esta línea es clave */}
        <Stack.Screen name="ExperienceDetail" component={ExperienceDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

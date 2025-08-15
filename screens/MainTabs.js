import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Íconos de Ionicons
import Home from '../screens/Home';
import Account from '../screens/Account';
import Itinerary from '../screens/Itinerary';
import Probar from '../screens/Probar';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#0078fe",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Itinerary") {
            iconName = "map-outline";
          } else if (route.name === "Account") {
            iconName = "person-outline";
          } else if (route.name === "Probar") {
            iconName = "chatbubble-ellipses-outline";
          }

          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
    >
      
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Itinerary" component={Itinerary} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Probar" component={Probar} /> 
    </Tab.Navigator>
  );
}
//probar solo es para probar las pantallas que todavia no estan conectadas
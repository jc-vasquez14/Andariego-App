import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Íconos de Ionicons
import Home from '../screens/HomeAnfitrion';
import Certificaciones from '../screens/Certificaciones';
import CrearExperiencia from '../screens/CrearExperiencia';
import AccountAnfitrion from '../screens/AccountAnfitrion';


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
          } else if (route.name === "Crear") {
            iconName = "add";
          } else if (route.name === "Account") {
            iconName = "person-outline";
          } else if (route.name === "Certificados") {
            iconName = "school-outline";
          }

          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
    >
      
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Certificados" component={Certificaciones} />
      <Tab.Screen name="Crear" component={CrearExperiencia} />
      {/*<Tab.Screen name="Chat" component={Chat} /> */}
      <Tab.Screen name="Account" component={AccountAnfitrion} />
    </Tab.Navigator>
  );
}
//probar solo es para probar las pantallas que todavia no estan conectadas
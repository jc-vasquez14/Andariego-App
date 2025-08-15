import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import SignUp from './screens/Sign-up';
import MainTabs from './screens/MainTabs';
import CulturalInterestsScreen from './screens/CulturalInterestsScreen';
import SignIn from './screens/Sign-in';
import Reservas from './screens/Reservas'; // ✅ Ruta correcta
import CrearExperiencia from './screens/CrearExperiencia';
import ExperienceDetail from './screens/ExperienceDetail'; // Ya lo tienes
import Probar from './screens/Probar'; //ruta solo para probar otras pantallas
import Capacitaciones from './screens/Capacitaciones'; // Nombre exacto del archivo
import reservacion from './screens/reservacion';
import chat from './screens/chat';



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
        <Stack.Screen name="chat" component={chat} />

    
  {/* otras pantallas */}
  
  <Stack.Screen name="Reservas" component={Reservas} />
  <Stack.Screen name="CrearExperiencia" component={CrearExperiencia} />
  <Stack.Screen name="Capacitaciones" component={Capacitaciones} />
    <Stack.Screen name="Probar" component={Probar} />
    <Stack.Screen name="reservacion" component={reservacion} />

        {/* ✅ Esta línea es clave */}
        <Stack.Screen name="ExperienceDetail" component={ExperienceDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

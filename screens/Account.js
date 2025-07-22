import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {accountStyles} from '../styles/AccountStyles'

const Account = () => {
  return (
    <View>
      <Image
        style={accountStyles.logo}
        source={require("../assets/Depth 2, Frame 0.png")}
      />
      <Text>Bienvenido a AndarieGo</Text>
      <Text>Descubra el corazón de Honduras a través de auténticas experiencias culturales.</Text>
      <TouchableOpacity>
        <Text>Registrate</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Inicia Sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

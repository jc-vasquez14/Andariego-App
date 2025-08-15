import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { loginStyles } from "../styles/LoginStyles";
import { useFonts } from "expo-font";

export default function Login({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Spartan-Black": require("../assets/fonts/LeagueSpartan-Black.ttf"),
    "Spartan-Bold": require("../assets/fonts/LeagueSpartan-Bold.ttf"),
    "Spartan-ExtraBold": require("../assets/fonts/LeagueSpartan-ExtraBold.ttf"),
    "Spartan-Medium": require("../assets/fonts/LeagueSpartan-Medium.ttf"),
    "Spartan-Regular": require("../assets/fonts/LeagueSpartan-Regular.ttf"),
    "Spartan-SemiBold": require("../assets/fonts/LeagueSpartan-SemiBold.ttf"),
  });

  const handleLogin = () => {
    // Simula autenticación exitosa
    navigation.replace("SignIn"); // 👈 Evita volver atrás con el botón físico
  };

  return (
    <ScrollView>
      <Image
        style={loginStyles.logo}
        source={require("../assets/Depth 2, Frame 0.png")}
      />
      <View style={[loginStyles.cntBtn, loginStyles.DivDesc]}>
        <Text style={[loginStyles.TxtBold, { textAlign: "center" }]}>
          Bienvenido a AndarieGo
        </Text>
        <Text style={loginStyles.TxtDesc}>
          Descubra el corazón de Honduras a través de auténticas experiencias
          culturales.
        </Text>
      </View>
      <View style={loginStyles.cntBtn}>
        <TouchableOpacity onPress={handleLogin} style={loginStyles.LogBtn}>
          <Text style={[loginStyles.TxtLogBtn, loginStyles.TxtBase]}>
            Inicia Sesion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={loginStyles.RgtBtn}
        >
          <Text style={[loginStyles.TxtRgtBtn, loginStyles.TxtBase]}>
            Registrate
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

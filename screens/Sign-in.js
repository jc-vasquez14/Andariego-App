import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    correoElectronico: "",
    contraseña: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = async () => {
    if (!isFormValid()) return;

    try {
      const response = await fetch("http://192.168.0.15:3001/usuarios/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.correoElectronico,
          password: formData.contraseña,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Usuario autenticado:", data);
        navigation.navigate("MainTabs");
      } else {
        alert("Error de inicio de sesión: " + data.error);
      }
    } catch (error) {
      console.error("Error al conectarse con la API:", error);
      alert("Error de red. Intenta nuevamente.");
    }
  };

  const handleGoBack = () => {
    console.log("Volver atrás");
    navigation.navigate("Landing");
  };

  const handleRegister = () => {
    console.log("Ir a registro");
    navigation.navigate("SignUp");
  };

  const isFormValid = () => {
    return formData.correoElectronico && formData.contraseña;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Para cerrar teclado al tocar afuera */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Inicia Sesión</Text>
            <View style={styles.placeholder} />
          </View>

          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Logo */}
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.logo}
                resizeMode="contain"
                source={require("../assets/LogoPrincipal Sin Letras.png")}
              />
            </View>

            {/* Form */}
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.correoElectronico}
                onChangeText={(value) =>
                  handleInputChange("correoElectronico", value)
                }
              />

              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#999"
                secureTextEntry
                value={formData.contraseña}
                onChangeText={(value) => handleInputChange("contraseña", value)}
              />
            </View>
          </ScrollView>

          {/* Login Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.loginButton,
                !isFormValid() && styles.loginButtonDisabled,
              ]}
              onPress={handleLogin}
              disabled={!isFormValid()}
            >
              <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            {/* Register Link */}
            <TouchableOpacity
              onPress={handleRegister}
              style={styles.registerLink}
            >
              <Text style={styles.registerText}>
                ¿Aún no tienes una cuenta?{" "}
                <Text style={styles.registerTextBold}>Regístrate</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  placeholder: {
    width: 34,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    height: 150,
    width: 150,
    margin: 100,
  },
  form: {
    marginBottom: 40,
  },
  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    marginBottom: 16,
    color: "#000",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 10,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonDisabled: {
    backgroundColor: "#cccccc",
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  registerLink: {
    alignItems: "center",
  },
  registerText: {
    fontSize: 14,
    color: "#666",
  },
  registerTextBold: {
    fontWeight: "600",
    color: "#4CAF50",
  },
});

export default LoginScreen;
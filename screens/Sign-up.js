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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RegistrationScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    contraseña: "",
    confirmarContraseña: "",
    telefono: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegister = async () => {
    if (!isFormValid()) return;

    try {
      const response = await fetch(
        "http://192.168.0.15:3001/usuarios/agregarUsuario/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.correoElectronico,
            nombre: formData.nombre,
            apellido: formData.apellido,
            password: formData.contraseña,
            telefono: formData.telefono,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Usuario registrado:", data);
        navigation.navigate("CulturalInterests"); 
      } else {
        alert("Error al registrarse: " + data.error);
      }
    } catch (error) {
      console.error("Error al conectarse con la API:", error);
      alert("Error de red. Intenta nuevamente.");
    }
  };

  const handleGoBack = () => {
    navigation.navigate("Landing");
  };

  const isFormValid = () => {
    return (
      acceptTerms &&
      formData.nombre &&
      formData.apellido &&
      formData.correoElectronico &&
      formData.contraseña &&
      formData.confirmarContraseña
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Regístrate</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView
          style={styles.content}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require("../assets/LogoAlternativo.png")}
            />
          </View>

          {/* Form */}
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              placeholderTextColor="#999"
              value={formData.nombre}
              onChangeText={(value) => handleInputChange("nombre", value)}
            />

            <TextInput
              style={styles.input}
              placeholder="Apellido"
              placeholderTextColor="#999"
              value={formData.apellido}
              onChangeText={(value) => handleInputChange("apellido", value)}
            />

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
              placeholder="Teléfono"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={formData.telefono}
              onChangeText={(value) => handleInputChange("telefono", value)}
            />

            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#999"
              secureTextEntry
              value={formData.contraseña}
              onChangeText={(value) => handleInputChange("contraseña", value)}
            />

            <TextInput
              style={styles.input}
              placeholder="Confirmar Contraseña"
              placeholderTextColor="#999"
              secureTextEntry
              value={formData.confirmarContraseña}
              onChangeText={(value) =>
                handleInputChange("confirmarContraseña", value)
              }
            />

            {/* Terms and Conditions */}
            <TouchableOpacity
              style={styles.termsContainer}
              onPress={() => setAcceptTerms(!acceptTerms)}
            >
              <View
                style={[styles.checkbox, acceptTerms && styles.checkboxChecked]}
              >
                {acceptTerms && (
                  <Ionicons name="checkmark" size={16} color="#fff" />
                )}
              </View>
              <Text style={styles.termsText}>
                Acepto los Términos de Servicio y la Política de Privacidad
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Register Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.registerButton,
              !isFormValid() && styles.registerButtonDisabled,
            ]}
            onPress={handleRegister}
            disabled={!isFormValid()}
          >
            <Text style={styles.registerButtonText}>Registrarme</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
    marginVertical: 30,
  },
  form: {
    marginBottom: 20,
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
  termsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 4,
    marginRight: 12,
    marginTop: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  termsText: {
    flex: 1,
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  registerButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
  },
  registerButtonDisabled: {
    backgroundColor: "#cccccc",
  },
  registerButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default RegistrationScreen;
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CulturalInterestsScreen = ({navigation}) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const culturalInterests = [
    { id: 1, title: "Danzas folclóricas y tradicionales" },
    { id: 2, title: "Clases de instrumentos autóctonos" },
    { id: 3, title: "Recorridos por sitios históricos o arqueológicos" },
    { id: 4, title: "Bordado tradicional" },
    { id: 5, title: "Ferias patronales" },
    { id: 6, title: "Talleres de cocina tradicional" },
    { id: 7, title: "Rutas gastronómicas por mercados locales" },
    { id: 8, title: "Tejido en telar" },
  ];

  const toggleInterest = (interestId) => {
    setSelectedInterests((prev) => {
      if (prev.includes(interestId)) {
        return prev.filter((id) => id !== interestId);
      } else {
        return [...prev, interestId];
      }
    });
  };

  const handleSkip = () => {
    // Aquí implementarías la lógica para omitir la selección
    console.log("Omitir selección de intereses");
    navigation.navigate("MainTabs")
  };

  const handleAccept = () => {
    // Aquí implementarías la lógica para guardar los intereses seleccionados
    console.log("Intereses seleccionados:", selectedInterests);
    navigation.navigate("MainTabs")
  };

  const renderInterestItem = ({ item }) => {
    const isSelected = selectedInterests.includes(item.id);

    return (
      <TouchableOpacity
        style={[styles.interestItem, isSelected && styles.interestItemSelected]}
        onPress={() => toggleInterest(item.id)}
      >
        <Text
          style={[
            styles.interestText,
            isSelected && styles.interestTextSelected,
          ]}
        >
          {item.title}
        </Text>
        {isSelected && <Ionicons name="checkmark" size={20} color="#4CAF50" />}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Intereses Culturales</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Logo */}
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/LogoAlternativo.png")}
          />
        </View>

        {/* Interests List */}
        <View style={styles.interestsContainer}>
          <FlatList
            data={culturalInterests}
            renderItem={renderInterestItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Omitir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
          <Text style={styles.acceptButtonText}>Aceptar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    height: 150,
    width: 150,
  },
  interestsContainer: {
    marginBottom: 20,
  },
  interestItem: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  interestItemSelected: {
    backgroundColor: "#e8f5e8",
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
  interestText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  interestTextSelected: {
    color: "#4CAF50",
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    gap: 12,
  },
  skipButton: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
  },
  skipButtonText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "600",
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#4CAF50",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
  },
  acceptButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CulturalInterestsScreen;

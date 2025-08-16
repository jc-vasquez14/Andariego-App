import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ExperiencesScreen = () => {
  const [activeTab, setActiveTab] = useState("Historial");
  const [experienciasData, setExperienciasData] = useState([]);

  // Realizar la petición a la API

  const fetchExperiencias = async () => {
    try {
      const response = await fetch("http://192.168.0.15:3001/actividades/");
      const data = await response.json();
      setExperienciasData(data); // Guardamos los datos obtenidos
    } catch (error) {
      console.error("Error al obtener las actividades:", error);
    }
  };

  useEffect(() => {
    fetchExperiencias();

    // Configuración del intervalo de recarga automática cada 5 minutos (300000ms)
    const interval = setInterval(() => {
      fetchExperiencias(); // Recarga las actividades cada 5 minutos
    }, 5 * 60); // 5 minutos en milisegundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []); // Solo se ejecuta una vez al montar el componente

  const handleExperiencePress = (experience) => {
    console.log("Ver experiencia:", experience.titulo);
  };

  const renderExperienciaItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.experienceItem}
      onPress={() => handleExperiencePress(item)}
    >
      {/* Aquí puedes cambiar la URL de la imagen con la que obtienes de la API */}
      <View style={styles.experienceContent}>
        <Text style={styles.experienceTitle}>{item.titulo}</Text>
        <Text style={styles.experienceLocation}>{item.categoria}</Text>
        <Text style={styles.experiencePrice}>{`L ${item.precio}`}</Text>
        <View style={styles.experienceDetails}>
          <Text style={styles.experienceStatus}>
            Fecha: {item.fecha_inicio} - {item.fecha_fin}
          </Text>
          <Text
            style={styles.experienceTime}
          >{`De: ${item.hora_inicio} a ${item.hora_fin}`}</Text>
          <Text
            style={styles.experienceAttendees}
          >{`Capacidad: ${item.capacidad} personas`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tus Experiencias</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Historial" && styles.activeTab]}
          onPress={() => setActiveTab("Historial")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Historial" && styles.activeTabText,
            ]}
          >
            Historial
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Experiencias" && styles.activeTab]}
          onPress={() => setActiveTab("Experiencias")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Experiencias" && styles.activeTabText,
            ]}
          >
            Experiencias
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Section Title */}
        <Text style={styles.sectionTitle}>{activeTab}</Text>

        {/* Content */}
        <View style={styles.experiencesList}>
          {activeTab === "Historial"
            ? /* Aquí iría tu lista de historial (si tienes) */
              null
            : experienciasData.map(renderExperienciaItem)}
        </View>
      </ScrollView>
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#4CAF50",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabText: {
    color: "#4CAF50",
    fontWeight: "500",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    marginBottom: 15,
  },
  experiencesList: {
    gap: 15,
    paddingBottom: 20,
  },
  experienceItem: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 12,
  },
  experienceImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  experienceContent: {
    flex: 1,
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
  },
  experienceLocation: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  experiencePrice: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  experienceDetails: {
    marginTop: 4,
  },
  experienceStatus: {
    fontSize: 12,
    color: "#4CAF50",
    marginBottom: 2,
  },
  experienceTime: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  experienceAttendees: {
    fontSize: 12,
    color: "#666",
  },
});

export default ExperiencesScreen;

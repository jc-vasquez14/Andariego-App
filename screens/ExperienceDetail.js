import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ExperienceDetail = ({ route, navigation }) => {
  const { experience } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const abrirModal = (img) => {
    setSelectedImage(img);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalle de la experiencia</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Título */}
        <Text style={styles.title}>{experience.nombre}</Text>

        {/* Imagen principal clickeable */}
        <TouchableOpacity onPress={() => abrirModal(experience.imagen)}>
          <Image source={experience.imagen} style={styles.mainImage} />
        </TouchableOpacity>

        {/* Descripción */}
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.description}>{experience.descripcion}</Text>

        {/* Ubicación */}
        <Text style={styles.sectionTitle}>Ubicación</Text>
        <Text style={styles.detailText}>{experience.ubicacion}</Text>

        {/* Duración */}
        <Text style={styles.sectionTitle}>Duración</Text>
        <Text style={styles.detailText}>{experience.duracion}</Text>

        {/* Anfitrión */}
        <Text style={styles.sectionTitle}>Anfitrión</Text>
        <View style={styles.hostContainer}>
          <Image
            source={experience.anfitrion.imagen}
            style={styles.hostImage}
          />
          <Text style={styles.hostName}>{experience.anfitrion.nombre}</Text>
        </View>

        {/* Galería */}
        <Text style={styles.sectionTitle}>Galería</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {experience.gallery.map((img, index) => (
            <TouchableOpacity key={index} onPress={() => abrirModal(img)}>
              <Image source={img} style={styles.galleryImage} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Botones */}
        <View style={styles.viewChat}>
          <TouchableOpacity
            style={styles.buttonChat}
            onPress={() => navigation.navigate("chat", { experience })}
          >
            <Ionicons name="chatbubbles" size={18} color="#fff" />
            <Text style={styles.buttonText}>Chatear con el anfitrión</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("reservacion", { experience })}
        >
          <Ionicons name="calendar" size={18} color="#fff" />
          <Text style={styles.buttonText}>Reservar experiencia</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal de imagen */}
      {selectedImage && (
        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Image source={selectedImage} style={styles.modalImage} />
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons name="close" size={20} color="#fff" />
                <Text style={styles.modalCloseText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default ExperienceDetail;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { padding: 16 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    marginRight: 10,
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#222",
  },
  mainImage: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 6,
    color: "#2196F3",
  },
  description: { fontSize: 16, lineHeight: 22, color: "#555" },
  detailText: { fontSize: 16, color: "#444" },
  hostContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  hostImage: { width: 55, height: 55, borderRadius: 30, marginRight: 12 },
  hostName: { fontSize: 16, fontWeight: "500", color: "#333" },
  galleryImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
    marginRight: 10,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#2196F3",
    padding: 14,
    borderRadius: 10,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonChat: {
    flexDirection: "row",
    backgroundColor: "#00B04F",
    padding: 14,
    borderRadius: 10,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 240,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 8,
  },
  viewChat: { alignItems: "center" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: 320,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: "contain",
  },
  modalCloseButton: {
    flexDirection: "row",
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  modalCloseText: {
    color: "#fff",
    marginLeft: 6,
    fontWeight: "600",
  },
});
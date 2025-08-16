import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const handleCoursePress = (course) => {
  console.log("Ver curso:", course.title);
};

const courses = [
  {
    id: 1,
    title: "Curso de Historia Hondureña",
    description: "Aprende sobre la historia y cultura de Honduras",
    icon: "book-outline",
  },
  {
    id: 2,
    title: "Certificación de Guía Turístico",
    description: "Obtén tu certificación como guía turístico",
    icon: "school-outline",
  },
];

const renderCourseItem = (item) => (
  <TouchableOpacity
    key={item.id}
    style={styles.courseItem}
    onPress={() => handleCoursePress(item)}
  >
    <View style={styles.courseIcon}>
      <Ionicons name={item.icon} size={24} color="#4CAF50" />
    </View>
    <View style={styles.courseContent}>
      <Text style={styles.courseTitle}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

const Account = ({ navigation }) => {
  // Datos simulados del usuario
  const user = {
    nombre: "Joel Carcamo",
    email: "joel_carcamo@host.hn",
    telefono: "+504 1234-5678",
    imagenPerfil: require("../assets/silueta.png"),
    anio: 2020,
  };

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado de perfil */}
      <View style={styles.header}>
        <Image source={user.imagenPerfil} style={styles.profileImage} />
        <Text style={styles.profileName}>{user.nombre}</Text>
        <Text style={styles.profileEmail}>{user.email}</Text>
        <Text style={styles.profilePhone}>{user.telefono}</Text>
        <Text style={styles.profilePhone}>Anfitrion desde {user.anio}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cursos y Certificaciones</Text>
        <View style={styles.coursesList}>{courses.map(renderCourseItem)}</View>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa",
  },
  header: {
    backgroundColor: "#4CAF50",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: "#fff",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  profileEmail: {
    fontSize: 16,
    color: "#e8f5e9",
    marginTop: 4,
  },
  profilePhone: {
    fontSize: 16,
    color: "#e8f5e9",
    marginTop: 2,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
  },
  experienceCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    padding: 10,
    alignItems: "center",
    elevation: 3,
  },
  experienceImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  experienceInfo: {
    flex: 1,
  },
  experienceName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  experienceDate: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#00B04F",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 0,
    alignItems: "center",
    width: 300,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  viewAnfitrion: {
    alignItems: "center",
  },
  courseItem: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  courseIcon: {
    width: 80,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e8f5e8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  courseContent: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },
  courseDescription: {
    fontSize: 14,
    color: "#666",
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    margin: 15,
  },
  coursesList: {
    gap: 12,
  },
});

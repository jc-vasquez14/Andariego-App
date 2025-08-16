import React from "react";
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

const DashboardScreen = () => {
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

  const handleMenuPress = () => {
    console.log("Abrir menú");
  };

  const handleReservationPress = (reservation) => {
    console.log("Ver reserva:", reservation.title);
  };

  const handleCoursePress = (course) => {
    console.log("Ver curso:", course.title);
  };

  const handleCreateExperience = () => {
    console.log("Crear nueva experiencia");
  };

  const handleBottomNavPress = (tab) => {
    console.log("Navegar a:", tab);
  };

  const renderReservationItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.reservationItem}
      onPress={() => handleReservationPress(item)}
    >
      <Image source={{ uri: item.image }} style={styles.reservationImage} />
      <View style={styles.reservationContent}>
        <Text style={styles.reservationTitle}>{item.title}</Text>
        <Text style={styles.reservationDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AndarieGO</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Cursos y Certificaciones Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cursos y Certificaciones</Text>
          <View style={styles.coursesList}>
            {courses.map(renderCourseItem)}
          </View>
        </View>
      </ScrollView>
      <Text style={styles.contactText}>
        Para consultas y nuevas certificaciones contáctanos en anfitrion@andariego.com
      </Text>
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
    justifyContent: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuButton: {
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
  section: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  reservationsList: {
    gap: 12,
  },
  reservationItem: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
  },
  reservationImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  reservationContent: {
    flex: 1,
  },
  reservationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },
  reservationDate: {
    fontSize: 14,
    color: "#666",
  },
  coursesList: {
    gap: 12,
  },
  courseItem: {
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  courseIcon: {
    width: 40,
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
  createButtonContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: "#8BC34A",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
  },
  createButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
  },
  contactText: {
    fontSize: 12,
    color: "#777",
    marginTop: 12,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default DashboardScreen;

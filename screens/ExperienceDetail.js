import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

const ExperienceDetail = ({ route, navigation }) => {
  const { experience } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>{experience.nombre}</Text>

      <Image source={experience.imagen} style={styles.mainImage} />

      <Text style={styles.sectionTitle}>Descripción</Text>
      <Text style={styles.description}>{experience.descripcion}</Text>

      <Text style={styles.sectionTitle}>Ubicación</Text>
      <Text>{experience.ubicacion}</Text>

      <Text style={styles.sectionTitle}>Duración</Text>
      <Text>{experience.duracion}</Text>

      <Text style={styles.sectionTitle}>Anfitrión</Text>
      <View style={styles.hostContainer}>
        <Image source={experience.anfitrion.imagen} style={styles.hostImage} />
        <Text>{experience.anfitrion.nombre}</Text>
      </View>

      <Text style={styles.sectionTitle}>Galería</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {experience.gallery.map((img, index) => (
          <Image key={index} source={img} style={styles.galleryImage} />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("reservacion", { experience })}
      >
        <Text style={styles.buttonText}>Reservar experiencia</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ExperienceDetail;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  mainImage: { width: "100%", height: 200, borderRadius: 8, marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 16 },
  description: { fontSize: 16, lineHeight: 22 },
  hostContainer: { flexDirection: "row", alignItems: "center", marginVertical: 8 },
  hostImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  galleryImage: { width: 100, height: 100, borderRadius: 8, marginRight: 8 },
  button: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20, // 🔹 margen inferior para que no se tape
    alignItems: "center"
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

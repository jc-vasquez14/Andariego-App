// screens/ExperienceDetail.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ExperienceDetail = ({ route }) => {
  const { experience } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>{experience.nombre}</Text>

      {/* Imagen principal */}
      <Image source={experience.imagen} style={styles.mainImage} />

      {/* Descripción */}
      <Text style={styles.sectionTitle}>Descripción</Text>
      <Text style={styles.description}>{experience.descripcion}</Text>

      {/* Ubicación y duración */}
      <Text style={styles.sectionTitle}>Ubicación</Text>
      <Text>{experience.ubicacion}</Text>

      <Text style={styles.sectionTitle}>Duración</Text>
      <Text>{experience.duracion}</Text>

      {/* Anfitrión */}
      <Text style={styles.sectionTitle}>Anfitrión</Text>
      <View style={styles.hostContainer}>
        <Image source={experience.anfitrion.imagen} style={styles.hostImage} />
        <Text>{experience.anfitrion.nombre}</Text>
      </View>

      {/* Carrusel de imágenes */}
      <Text style={styles.sectionTitle}>Galería</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {experience.gallery.map((img, index) => (
          <Image key={index} source={img} style={styles.galleryImage} />
        ))}
      </ScrollView>

      {/* Botón de reserva */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reservar experiencia</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ExperienceDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#444',
  },
  hostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  hostImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  galleryImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

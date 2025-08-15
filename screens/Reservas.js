// screens/HostPanel.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HostPanel = ({ navigation }) => {
  const reservas = [
    { id: 1, titulo: 'Explorando las Ruinas Mayas de Copán', fecha: '12 de mayo, 2024', imagen: require('../assets/ruinas.jpg') },
    { id: 2, titulo: 'Aventura en el Parque Nacional', fecha: '18 de mayo, 2024', imagen: require('../assets/parque.jpg') },
    { id: 3, titulo: 'Descubriendo la Cultura', fecha: '25 de mayo, 2024', imagen: require('../assets/cultura.jpg') },
  ];

  const cursos = [
    { id: 1, titulo: 'Curso de Historia Hondureña', descripcion: 'Aprende sobre la historia y cultura de Honduras', icono: 'book-outline' },
    { id: 2, titulo: 'Certificación de Guía Turístico', descripcion: 'Obtén tu certificación como guía turístico local', icono: 'school-outline' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Logo de Andariego */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/LogoAlternativo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Reservas */}
        <Text style={styles.sectionTitle}>Reservas</Text>
        {reservas.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={item.imagen} style={styles.cardImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardSubtitle}>{item.fecha}</Text>
            </View>
          </View>
        ))}

        {/* Cursos */}
        <Text style={styles.sectionTitle}>Cursos y Certificaciones</Text>
        {cursos.map(item => (
          <View key={item.id} style={styles.courseCard}>
            <Ionicons name={item.icono} size={28} color="#4CAF50" style={{ marginRight: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.courseTitle}>{item.titulo}</Text>
              <Text style={styles.courseDescription}>{item.descripcion}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Botón fijo */}
      <TouchableOpacity
        style={styles.fixedButton}
        onPress={() => navigation.navigate('CrearExperiencia')}
      >
        <Ionicons name="add-circle-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Crear nueva experiencia</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  logo: {
    width: 160,
    height: 60,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  courseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
  },
  fixedButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 24,
    borderRadius: 8,
    justifyContent: 'center',
    elevation: 5, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HostPanel;

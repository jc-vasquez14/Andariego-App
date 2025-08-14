import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

const Account = () => {
  // Datos simulados del usuario y experiencias
  const user = {
    nombre: 'Marío López',
    email: 'mario.lopez@example.com',
    telefono: '+504 1234-5678',
    imagenPerfil: require('../assets/perfil.jpg'), // cambia por la ruta de tu imagen
  };

  const experienciasRealizadas = [
    {
      id: 1,
      nombre: 'La Tigra',
      fecha: '2025-07-10',
      imagen: require('../assets/Latigra.jpg'),
    },
    {
      id: 2,
      nombre: 'Pulhapanzak',
      fecha: '2025-06-22',
      imagen: require('../assets/pulhapanzak.jpg'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Perfil */}
      <View style={styles.profileContainer}>
        <Image source={user.imagenPerfil} style={styles.profileImage} />
        <Text style={styles.profileName}>{user.nombre}</Text>
        <Text style={styles.profileEmail}>{user.email}</Text>
        <Text style={styles.profilePhone}>{user.telefono}</Text>
      </View>

      {/* Experiencias realizadas */}
      <Text style={styles.sectionTitle}>Experiencias realizadas</Text>
      {experienciasRealizadas.map(exp => (
        <View key={exp.id} style={styles.experienceCard}>
          <Image source={exp.imagen} style={styles.experienceImage} />
          <View style={styles.experienceInfo}>
            <Text style={styles.experienceName}>{exp.nombre}</Text>
            <Text style={styles.experienceDate}>Fecha: {exp.fecha}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  profilePhone: {
    fontSize: 16,
    color: '#666',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  experienceCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
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
    fontWeight: '600',
    color: '#000',
  },
  experienceDate: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
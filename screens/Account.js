import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

const Account = () => {
  // Datos simulados del usuario
  const user = {
    nombre: 'Marío López',
    email: 'mario.lopez@example.com',
    telefono: '+504 1234-5678',
    imagenPerfil: require('../assets/perfil.jpg'),
  };

  // Experiencias realizadas
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
      {/* Encabezado de perfil */}
      <View style={styles.header}>
        <Image source={user.imagenPerfil} style={styles.profileImage} />
        <Text style={styles.profileName}>{user.nombre}</Text>
        <Text style={styles.profileEmail}>{user.email}</Text>
        <Text style={styles.profilePhone}>{user.telefono}</Text>
      </View>

      {/* Experiencias realizadas */}
      <View style={styles.section}>
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
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },
  header: {
    backgroundColor: '#4CAF50',
    alignItems: 'center',
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
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileEmail: {
    fontSize: 16,
    color: '#e8f5e9',
    marginTop: 4,
  },
  profilePhone: {
    fontSize: 16,
    color: '#e8f5e9',
    marginTop: 2,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  experienceCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
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
    fontWeight: '600',
    color: '#000',
  },
  experienceDate: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
});
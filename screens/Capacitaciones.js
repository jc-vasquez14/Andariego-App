// screens/BecomeHost.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BecomeHost = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Imagen principal */}
      <Image
        source={require('../assets/anfitrion.jpg')} // coloca tu imagen aquí
        style={styles.mainImage}
      />

      {/* Título y descripción */}
      <Text style={styles.title}>Conviértete en Anfitrión</Text>
      <Text style={styles.description}>
        Comparte tu pasión por Honduras y gana dinero organizando experiencias culturales únicas. 
        Nuestro programa de capacitación te proporcionará las habilidades para crear momentos inolvidables para los viajeros.
      </Text>

      {/* Proceso de capacitación */}
      <Text style={styles.sectionTitle}>Proceso de Capacitación</Text>

      <View style={styles.infoItem}>
        <Ionicons name="checkmark-circle" size={28} color="#4CAF50" style={styles.icon} />
        <View>
          <Text style={styles.infoTitle}>Estándares de Calidad</Text>
          <Text style={styles.infoDescription}>
            Aprende a diseñar y ofrecer experiencias que cumplan con nuestros estándares de excelencia.
          </Text>
        </View>
      </View>

      <View style={styles.infoItem}>
        <Ionicons name="people-circle" size={28} color="#4CAF50" style={styles.icon} />
        <View>
          <Text style={styles.infoTitle}>Respeto Cultural</Text>
          <Text style={styles.infoDescription}>
            Comprende y respeta las matices culturales de Honduras.
          </Text>
        </View>
      </View>

      <View style={styles.infoItem}>
        <Ionicons name="shield-checkmark" size={28} color="#4CAF50" style={styles.icon} />
        <View>
          <Text style={styles.infoTitle}>Seguridad e Inclusión</Text>
          <Text style={styles.infoDescription}>
            Crea entornos seguros e inclusivos para todos los participantes.
          </Text>
        </View>
      </View>

      {/* Botón */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CrearExperiencia')}>
        <Text style={styles.buttonText}>Conviértete en Anfitrión</Text>
      </TouchableOpacity>

      {/* Contacto */}
      <Text style={styles.contactText}>
        Para consultas, contáctanos en anfitrion@andariego.com
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
    paddingHorizontal: 16,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
    marginTop: 4,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoDescription: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50',
    marginHorizontal: 16,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactText: {
    fontSize: 12,
    color: '#777',
    marginTop: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default BecomeHost;

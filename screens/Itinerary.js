import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const fechasDisponibles = [
  '2025-08-15',
  '2025-08-16',
  '2025-08-17',
  '2025-08-18',
];

const Itinerarios = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const actividades = [
    {
      id: 1,
      nombre: 'Tour en La Tigra',
      imagen: require('../assets/Latigra.jpg'),
      fecha: '2025-08-15',
    },
    {
      id: 2,
      nombre: 'Visita a Utila',
      imagen: require('../assets/utila.jpg'),
      fecha: '2025-08-16',
    },
    {
      id: 3,
      nombre: 'Cascada Pulhapanzak',
      imagen: require('../assets/pulhapanzak.jpg'),
      fecha: '2025-08-17',
    },
  ];

  const eventos = [
    {
      id: 1,
      nombre: 'Festival Cultural',
      imagen: require('../assets/festival.jpg'),
      descripcion: 'Evento con música, gastronomía y artesanía local.',
      fecha: '2025-08-15',
    },
    {
      id: 2,
      nombre: 'Mercado Artesanal',
      imagen: require('../assets/mercado.jpg'),
      descripcion: 'Venta de productos típicos y artesanales.',
      fecha: '2025-08-18',
    },
  ];

  // Filtrar actividades según fecha seleccionada
  const actividadesFiltradas = selectedDate
    ? actividades.filter(act => act.fecha === selectedDate)
    : actividades;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Itinerarios y Eventos</Text>

      {/* Selector de fechas simple */}
      <View style={styles.dateSelector}>
        {fechasDisponibles.map(fecha => (
          <TouchableOpacity
            key={fecha}
            style={[
              styles.dateButton,
              selectedDate === fecha && styles.dateButtonSelected,
            ]}
            onPress={() => setSelectedDate(fecha)}
          >
            <Text
              style={[
                styles.dateButtonText,
                selectedDate === fecha && styles.dateButtonTextSelected,
              ]}
            >
              {fecha}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => setSelectedDate('')}
        >
          <Text style={styles.clearButtonText}>Limpiar</Text>
        </TouchableOpacity>
      </View>

      {/* Actividades planificadas */}
      <Text style={styles.sectionTitle}>Actividades planificadas</Text>
      {actividadesFiltradas.length === 0 && (
        <Text style={styles.noDataText}>No hay actividades para esta fecha.</Text>
      )}
      {actividadesFiltradas.map(act => (
        <View key={act.id} style={styles.itemRow}>
          <Image source={act.imagen} style={styles.itemImage} />
          <Text style={styles.itemText}>{act.nombre}</Text>
        </View>
      ))}

      {/* Eventos cercanos */}
      <Text style={styles.sectionTitle}>Eventos cercanos</Text>
      {eventos.map(evento => (
        <View key={evento.id} style={styles.eventCard}>
          <Image source={evento.imagen} style={styles.eventImage} />
          <View style={styles.eventInfo}>
            <Text style={styles.eventName}>{evento.nombre}</Text>
            <Text style={styles.eventDesc}>{evento.descripcion}</Text>
            <Text style={styles.eventDate}>Fecha: {evento.fecha}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Itinerarios;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  dateSelector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 25,
    justifyContent: 'center',
  },
  dateButton: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    margin: 5,
  },
  dateButtonSelected: {
    backgroundColor: '#4CAF50',
  },
  dateButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  dateButtonTextSelected: {
    color: '#fff',
  },
  clearButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    margin: 5,
  },
  clearButtonText: {
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  noDataText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 15,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  eventCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 1,
  },
  eventImage: {
    width: 100,
    height: 100,
  },
  eventInfo: {
    flex: 1,
    padding: 10,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDesc: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 12,
    color: '#999',
  },
});

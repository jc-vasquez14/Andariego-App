import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Reservas = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const actividadesPlanificadas = [
    {
      id: 1,
      titulo: 'Tour de Plantaciones de Café',
      hora: '9:00AM - 12:00PM',
      imagen: require('../assets/cafe.jpg'),
      descripcion: 'Recorrido por las plantaciones de café con degustación incluida.',
    },
    {
      id: 2,
      titulo: 'Almuerzo en un Restaurante',
      hora: '1:00PM - 2:00PM',
      imagen: require('../assets/restaurante.png'),
      descripcion: 'Disfruta de la gastronomía local en un restaurante tradicional.',
    },
    {
      id: 3,
      titulo: 'Visita al Mercado de Artesanos',
      hora: '3:00PM - 5:00PM',
      imagen: require('../assets/artesanos.jpg'),
      descripcion: 'Explora y compra artesanías hechas a mano por artistas locales.',
    },
  ];

  const eventosCercanos = [
    {
      id: 1,
      titulo: 'Festival Garífuna',
      fecha: '12-14 de Octubre',
      imagen: require('../assets/garifuna.jpg'),
      descripcion: 'Celebra la cultura Garífuna con música, danza y gastronomía típica.',
    },
    {
      id: 2,
      titulo: 'Feria de Artesanías Locales',
      fecha: '15 de Octubre',
      imagen: require('../assets/feria.jpg'),
      descripcion: 'Una feria que reúne a los mejores artesanos de la región.',
    },
  ];

  const abrirModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Encabezado con logo */}
      <View style={styles.header}>
        <Image
          source={require('../assets/LogoPrincipal Sin Letras.png')} // Ajusta la ruta si está en otro lugar
          style={styles.headerLogo}
        />
        <Text style={styles.headerTitle}>Itinerario</Text>
      </View>

      <Calendar
        monthFormat={'MMMM yyyy'}
        hideExtraDays={true}
        markedDates={{
          '2024-10-14': { selected: true, marked: true, selectedColor: '#4CAF50' },
        }}
      />

      <Text style={styles.sectionTitle}>Actividades Planificadas</Text>
      {actividadesPlanificadas.map(item => (
        <TouchableOpacity key={item.id} style={styles.card} onPress={() => abrirModal(item)}>
          <Image source={item.imagen} style={styles.image} />
          <View>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardSubtitle}>{item.hora}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>Eventos Cercanos</Text>
      {eventosCercanos.map(item => (
        <TouchableOpacity key={item.id} style={styles.card} onPress={() => abrirModal(item)}>
          <Image source={item.imagen} style={styles.image} />
          <View>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardSubtitle}>{item.fecha}</Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Modal de Detalles */}
      {selectedItem && (
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Image source={selectedItem.imagen} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedItem.titulo}</Text>
              <Text style={styles.modalDesc}>{selectedItem.descripcion}</Text>
              <Button title="Cerrar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  headerLogo: {
    width: 35,
    height: 35,
    marginRight: 10,
    borderRadius: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 8,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '85%',
    alignItems: 'center',
  },
  modalImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDesc: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default Reservas;

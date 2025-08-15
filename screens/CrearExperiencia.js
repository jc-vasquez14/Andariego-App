// screens/CrearExperiencia.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ImageBackground
} from 'react-native';

const CrearExperiencia = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [duracion, setDuracion] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [markerPos, setMarkerPos] = useState({ x: 100, y: 80 }); // posición del marcador

  const handleMapaPress = (event) => {
    // Obtener posición del toque en la imagen
    const { locationX, locationY } = event.nativeEvent;
    setMarkerPos({ x: locationX, y: locationY });
    Alert.alert('Ubicación seleccionada', `Coordenadas simuladas: X:${locationX} Y:${locationY}`);
  };

  const handleGuardar = () => {
    if (!nombre || !descripcion || !ubicacion || !duracion) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    const nuevaExperiencia = {
      nombre,
      descripcion,
      ubicacion,
      duracion,
      imagen: imagenUrl,
      coordenadas: markerPos,
      fechaCreacion: new Date(),
    };

    console.log('Nueva experiencia creada:', nuevaExperiencia);

    Alert.alert('Éxito', 'La experiencia ha sido creada');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Crear Nueva Experiencia</Text>

      <Text style={styles.label}>Nombre de la Experiencia</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Tour de Café"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Describe la experiencia..."
        value={descripcion}
        onChangeText={setDescripcion}
        multiline
      />

      <Text style={styles.label}>Ubicación (Mapa Simulado)</Text>
      <TouchableOpacity activeOpacity={0.9} onPress={handleMapaPress}>
        <ImageBackground
          source={require('../assets/mapa-Honduras.jpg')} // usa tu imagen real
          style={styles.mapImage}
          imageStyle={{ borderRadius: 8 }}
        >
          {/* Marcador */}
          <View
            style={[
              styles.marker,
              { top: markerPos.y - 10, left: markerPos.x - 10 }
            ]}
          />
        </ImageBackground>
      </TouchableOpacity>

      <Text style={styles.label}>Dirección o referencia</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Copán, Honduras"
        value={ubicacion}
        onChangeText={setUbicacion}
      />

      <Text style={styles.label}>Duración</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: 3 horas"
        value={duracion}
        onChangeText={setDuracion}
      />

      <Text style={styles.label}>URL de Imagen (opcional)</Text>
      <TextInput
        style={styles.input}
        placeholder="https://ejemplo.com/imagen.jpg"
        value={imagenUrl}
        onChangeText={setImagenUrl}
      />

      <TouchableOpacity style={styles.button} onPress={handleGuardar}>
        <Text style={styles.buttonText}>Guardar Experiencia</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
  },
  mapImage: {
    width: '100%',
    height: 200,
    marginTop: 8,
    marginBottom: 12,
    position: 'relative',
  },
  marker: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    position: 'absolute',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
    marginBottom:43,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CrearExperiencia;
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

const CrearExperiencia = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");
  const [fecha, setFecha] = useState(""); // Nuevo estado para la fecha
  const [hora_inicio, setHoraInicio] = useState(""); // Nuevo estado para la hora
  const [hora_fin, setHoraFin] = useState(""); // Nuevo estado para la hora
  const [precio, setPrecio] = useState(0);
  const [capacidad, setCapacidad] = useState(0);
  const [markerPos, setMarkerPos] = useState({ x: 100, y: 80 });

  const handleMapaPress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setMarkerPos({ x: locationX, y: locationY });
    Alert.alert(
      "Ubicación seleccionada",
      `Coordenadas: X:${locationX} Y:${locationY}`
    );
  };

  const handleGuardar = async () => {
    if (!nombre || !descripcion || !ubicacion || !fecha || !hora_inicio || !hora_fin) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    const nuevaActividad = {
      titulo: nombre,
      descripcion,
      categoria: "Cultura",
      latitud: markerPos.y,
      longitud: markerPos.x,
      precio: precio,
      capacidad: capacidad,
      fecha_inicio: fecha, // Usamos el estado de fecha
      fecha_fin: fecha, // Usamos el mismo estado de fecha
      hora_inicio: hora_inicio, // Usamos el estado de hora
      hora_fin: hora_fin, // Usamos el mismo estado de hora
    };

    try {
      const response = await fetch(
        "http://192.168.0.15:3001/actividades/nuevaActividad/f17623a6-2d06-43a9-880b-3a5e5d2d716e",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevaActividad),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Éxito", "La actividad ha sido creada exitosamente");
        navigation.goBack();
      } else {
        Alert.alert("Error", "No se pudo crear la actividad: " + data.error);
      }
    } catch (error) {
      console.error("Error al crear actividad:", error);
      Alert.alert("Error de red", "Hubo un problema al crear la actividad");
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
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
            source={require("../assets/mapa-Honduras.jpg")}
            style={styles.mapImage}
            imageStyle={{ borderRadius: 8 }}
          >
            <View
              style={[
                styles.marker,
                { top: markerPos.y - 10, left: markerPos.x - 10 },
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

        <Text style={styles.label}>URL de Imagen (opcional)</Text>
        <TextInput
          style={styles.input}
          placeholder="https://ejemplo.com/imagen.jpg"
          value={imagenUrl}
          onChangeText={setImagenUrl}
        />

        <Text style={styles.label}>Precio</Text>
        <TextInput
          style={styles.input}
          placeholder="L"
          value={precio}
          onChangeText={setPrecio}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Capacidad</Text>
        <TextInput
          style={styles.input}
          placeholder="0"
          value={capacidad}
          onChangeText={setCapacidad}
          keyboardType="numeric"
        />

        {/* Input de fecha */}
        <Text style={styles.label}>Fecha (YYYY-MM-DD)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: 2025-08-15"
          value={fecha}
          onChangeText={setFecha}
          keyboardType="numeric"
        />

        {/* Input de hora */}
        <Text style={styles.label}>Hora Inicio (HH:mm:ss)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: 10:00:00"
          value={hora_inicio}
          onChangeText={setHoraInicio}
        />

        <Text style={styles.label}>Hora Fin (HH:mm:ss)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: 12:00:00"
          value={hora_fin}
          onChangeText={setHoraFin}
        />

        <TouchableOpacity style={styles.button} onPress={handleGuardar}>
          <Text style={styles.buttonText}>Guardar Experiencia</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
  },
  mapImage: {
    width: "100%",
    height: 200,
    marginTop: 8,
    marginBottom: 12,
    position: "relative",
  },
  marker: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    position: "absolute",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 43,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CrearExperiencia;

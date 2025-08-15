// ReservationScreen.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { Calendar } from "react-native-calendars";

export default function ReservationScreen() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const times = ["10:00", "11:00", "12:00", "13:00"];

  const precioPorPersona = 25;
  const subtotal = selectedTime ? precioPorPersona * 2 : 0; // Ejemplo: 2 personas
  const impuestos = subtotal * 0.1;
  const total = subtotal + impuestos;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo arriba */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/LogoPrincipal Sin Letras.png")} // Ruta de tu logo
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Calendario */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "#4CAF50" },
        }}
        theme={{
          selectedDayBackgroundColor: "#4CAF50",
          todayTextColor: "#4CAF50",
        }}
      />

      {/* Selección de Hora */}
      <View style={styles.timeContainer}>
        {times.map((time) => (
          <TouchableOpacity
            key={time}
            style={[
              styles.timeButton,
              selectedTime === time && styles.timeButtonSelected,
            ]}
            onPress={() => setSelectedTime(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.timeTextSelected,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Resumen */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Precio por persona: ${precioPorPersona}
        </Text>
        <Text style={styles.summaryText}>Subtotal: ${subtotal}</Text>
        <Text style={styles.summaryText}>Impuestos: ${impuestos.toFixed(2)}</Text>
        <Text style={[styles.summaryText, styles.totalText]}>
          Total: ${total.toFixed(2)}
        </Text>
      </View>

      {/* Botón Confirmar */}
      <TouchableOpacity
        style={styles.confirmButton}
        disabled={!selectedDate || !selectedTime}
        onPress={() =>
          alert(
            `Reserva confirmada para ${selectedDate} a las ${selectedTime}`
          )
        }
      >
        <Text style={styles.confirmButtonText}>Confirmar reserva</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  logo: {
    width: 180,
    height: 80,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  timeButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  timeButtonSelected: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  timeText: {
    fontSize: 16,
    color: "#333",
  },
  timeTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  summaryContainer: {
    marginVertical: 20,
  },
  summaryText: {
    fontSize: 16,
    marginVertical: 2,
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

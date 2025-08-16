import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "¡Hola! Bienvenido a AndarieGO 🌎✈️ ¿Listo para descubrir nuevas experiencias turísticas?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Respuesta turística automática
    setTimeout(() => {
      let reply = "Escribe 'Playa', 'Montaña' o 'Reserva' y aquí te ayudaremos.";
      if (input.toLowerCase().includes("playa")) {
        reply = "🏖️ Tenemos playas hermosas que te encantarán. ¿Te gustaría ver opciones?";
      } else if (input.toLowerCase().includes("montaña")) {
        reply = "⛰️ Hay rutas increíbles en la montaña. ¿Quieres recomendaciones?";
      } else if (input.toLowerCase().includes("reserva")) {
        reply = "📅 Perfecto, dime la fecha y destino para confirmar tu reserva.";
      }
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), text: reply, sender: "bot" },
      ]);
    }, 1000);
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "user" ? styles.userMessage : styles.botMessage,
      ]}
    >
      {item.sender === "bot" && (
        <Image
          source={require("../assets/silueta.png")} // Ajusta la ruta si está en otro lugar
          style={styles.avatar}
        />
      )}
      <View
        style={[
          styles.bubble,
          item.sender === "user" ? styles.userBubble : styles.botBubble,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            item.sender === "user" ? { color: "#fff" } : { color: "#000" },
          ]}
        >
          {item.text}
        </Text>
      </View>
      {item.sender === "user" && (
        <Image
          source={require("../assets/silueta.png")}
          style={styles.avatar}
        />
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Encabezado con logo */}
      <View style={styles.header}>
        <Image
          source={require("../assets/LogoPrincipal Sin Letras.png")} // Ajusta la ruta
          style={styles.headerLogo}
        />
        <Text style={styles.headerTitle}>Chat</Text>
      </View>

      {/* Lista de mensajes */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ padding: 10 }}
      />

      {/* Caja de texto */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu mensaje..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    elevation: 3,
  },
  headerLogo: { width: 35, height: 35, marginRight: 10, borderRadius: 5 },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: "#4CAF50" },
  messageContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "flex-end",
  },
  avatar: { width: 20, height: 20, borderRadius: 15, marginHorizontal: 5 },
  bubble: {
    padding: 10,
    borderRadius: 20,
    maxWidth: "70%",
    elevation: 1,
  },
  botBubble: { backgroundColor: "#e6f4ea" },
  userBubble: { backgroundColor: "#4CAF50" },
  messageText: { fontSize: 15 },
  userMessage: { justifyContent: "flex-end", flexDirection: "row" },
  botMessage: { justifyContent: "flex-start", flexDirection: "row" },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  sendButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 5,
  },
});

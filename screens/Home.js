import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

// Importa tu logo
import Logo from "../assets/LogoAlternativo.png"; // Cambia el nombre por el de tu archivo real

const opcionesUbicacion = ["Tegucigalpa", "San Buenaventura", "Islas de la Bahía"];
const opcionesCategoria = ["Naturaleza", "Aventura", "Cultura"];
const opcionesFecha = ["Hoy", "Esta semana", "Este mes"];

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ fecha: "", ubicacion: "", categoria: "" });
  const [showFecha, setShowFecha] = useState(false);
  const [showUbicacion, setShowUbicacion] = useState(false);
  const [showCategoria, setShowCategoria] = useState(false);

  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  const experiencias = [
    {
      id: 1,
      nombre: "La Tigra",
      descripcion: "Una reserva natural con senderos y biodiversidad.",
      imagen: require("../assets/Latigra.jpg"),
      precio: 30,
      ubicacion: "Tegucigalpa",
      categoria: "Naturaleza",
    },
    {
      id: 2,
      nombre: "Pulhapanzak",
      descripcion: "Una cascada impresionante en el norte de Honduras.",
      imagen: require("../assets/pulhapanzak.jpg"),
      precio: 25,
      ubicacion: "San Buenaventura",
      categoria: "Aventura",
    },
    {
      id: 3,
      nombre: "Utila",
      descripcion: "Una isla paradisíaca ideal para buceo.",
      imagen: require("../assets/utila.jpg"),
      precio: 50,
      ubicacion: "Islas de la Bahía",
      categoria: "Cultura",
    },
    {
      id: 4,
      nombre: "Roatán",
      descripcion: "Playas de arena blanca y aguas cristalinas.",
      imagen: require("../assets/roatan.jpg"),
      precio: 60,
      ubicacion: "Islas de la Bahía",
      categoria: "Cultura",
    },
    {
      id: 5,
      nombre: "Celaque",
      descripcion: "Montaña más alta de Honduras, ideal para senderismo.",
      imagen: require("../assets/celaque.jpg"),
      precio: 40,
      ubicacion: "Tegucigalpa",
      categoria: "Naturaleza",
    },
  ];

  const handleSelect = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
    if (field === "fecha") setShowFecha(false);
    if (field === "ubicacion") setShowUbicacion(false);
    if (field === "categoria") setShowCategoria(false);
  };

  const filteredExperiences = experiencias.filter((exp) => {
    const matchesSearch =
      exp.nombre.toLowerCase().includes(search.toLowerCase()) ||
      exp.descripcion.toLowerCase().includes(search.toLowerCase());

    const matchesUbicacion = filters.ubicacion ? exp.ubicacion === filters.ubicacion : true;
    const matchesCategoria = filters.categoria ? exp.categoria === filters.categoria : true;
    const matchesFecha = true;

    return matchesSearch && matchesUbicacion && matchesCategoria && matchesFecha;
  });

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedExperiences = filteredExperiences.slice(startIndex, startIndex + itemsPerPage);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Logo */}
        <View style={styles.headerLogoContainer}>
          <Image source={Logo} style={styles.headerLogo} resizeMode="contain" />
        </View>

        {/* Buscador */}
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar experiencias..."
          value={search}
          onChangeText={setSearch}
        />

        {/* Filtros */}
        <View style={styles.filtersContainer}>
          {/* Fecha */}
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.filterInput} onPress={() => setShowFecha(!showFecha)}>
              <Text style={styles.filterText}>{filters.fecha || "Fecha"}</Text>
            </TouchableOpacity>
            {showFecha && (
              <View style={styles.dropdownList}>
                {opcionesFecha.map((op, i) => (
                  <TouchableOpacity key={i} onPress={() => handleSelect("fecha", op)}>
                    <Text style={styles.dropdownItem}>{op}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Ubicación */}
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.filterInput} onPress={() => setShowUbicacion(!showUbicacion)}>
              <Text style={styles.filterText}>{filters.ubicacion || "Ubicación"}</Text>
            </TouchableOpacity>
            {showUbicacion && (
              <View style={styles.dropdownList}>
                {opcionesUbicacion.map((op, i) => (
                  <TouchableOpacity key={i} onPress={() => handleSelect("ubicacion", op)}>
                    <Text style={styles.dropdownItem}>{op}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Categoría */}
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.filterInput} onPress={() => setShowCategoria(!showCategoria)}>
              <Text style={styles.filterText}>{filters.categoria || "Categoría"}</Text>
            </TouchableOpacity>
            {showCategoria && (
              <View style={styles.dropdownList}>
                {opcionesCategoria.map((op, i) => (
                  <TouchableOpacity key={i} onPress={() => handleSelect("categoria", op)}>
                    <Text style={styles.dropdownItem}>{op}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* Experiencias */}
        <Text style={styles.sectionTitle}>Experiencias</Text>
        {paginatedExperiences.map((exp) => (
          <TouchableOpacity
            key={exp.id}
            onPress={() =>
              navigation.navigate("ExperienceDetail", {
                experience: {
                  nombre: exp.nombre,
                  descripcion: exp.descripcion,
                  ubicacion: exp.ubicacion,
                  duracion: "3 horas",
                  anfitrion: { nombre: "Juan Pérez", imagen: require("../assets/guia1.jpg") },
                  imagen: exp.imagen,
                  gallery: [
                    require("../assets/Latigra.jpg"),
                    require("../assets/pulhapanzak.jpg"),
                    require("../assets/utila.jpg")
                  ],
                },
              })
            }
          >
            <View style={styles.experienceCard}>
              <View style={styles.experienceText}>
                <Text style={styles.experiencePrice}>Desde ${exp.precio}</Text>
                <Text style={styles.experienceTitle}>{exp.nombre}</Text>
                <Text style={styles.experienceDescription}>{exp.descripcion}</Text>
                <Text style={styles.experienceLocation}>{exp.ubicacion}</Text>
              </View>
              <Image source={exp.imagen} style={styles.experienceImage} />
            </View>
          </TouchableOpacity>
        ))}

        {/* Botones de paginación */}
        <View style={styles.pagination}>
          {page > 1 && (
            <TouchableOpacity style={styles.pageButton} onPress={() => setPage(page - 1)}>
              <Text style={styles.pageButtonText}>Anterior</Text>
            </TouchableOpacity>
          )}
          {startIndex + itemsPerPage < filteredExperiences.length && (
            <TouchableOpacity style={styles.pageButton} onPress={() => setPage(page + 1)}>
              <Text style={styles.pageButtonText}>Siguiente</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Itinerarios */}
        <Text style={styles.sectionTitle}>Itinerarios sugeridos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.itinerariosContainer}>
          {[
            {
              nombre: "Ruta Colonial - 3 días",
              descripcion: "Explora ciudades coloniales, iglesias antiguas y mercados locales.",
              ubicacion: "Comayagua y Gracias",
              duracion: "3 días",
              anfitrion: { nombre: "Carlos López", imagen: require("../assets/guia1.jpg") },
              imagen: require("../assets/rutacolonial.jpg"),
              gallery: [
                require("../assets/rutacolonial.jpg"),
                require("../assets/caribehondureño.jpg"),
                require("../assets/aventura.jpg")
              ]
            },
            {
              nombre: "Caribe Hondureño - 4 días",
              descripcion: "Playas paradisíacas, cultura garífuna y deportes acuáticos.",
              ubicacion: "Islas de la Bahía y La Ceiba",
              duracion: "4 días",
              anfitrion: { nombre: "María González", imagen: require("../assets/guia1.jpg") },
              imagen: require("../assets/caribehondureño.jpg"),
              gallery: [
                require("../assets/caribehondureño.jpg"),
                require("../assets/utila.jpg"),
                require("../assets/roatan.jpg")
              ]
            },
            {
              nombre: "Aventuras - 5 días",
              descripcion: "Senderismo, rafting y experiencias de adrenalina en la naturaleza.",
              ubicacion: "La Esperanza y Gracias",
              duracion: "5 días",
              anfitrion: { nombre: "Pedro Martínez", imagen: require("../assets/guia1.jpg") },
              imagen: require("../assets/aventura.jpg"),
              gallery: [
                require("../assets/aventura.jpg"),
                require("../assets/celaque.jpg"),
                require("../assets/Latigra.jpg")
              ]
            }
          ].map((itinerario, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itinerarioCard}
              onPress={() =>
                navigation.navigate("ExperienceDetail", { experience: itinerario })
              }
            >
              <Image source={itinerario.imagen} style={styles.itinerarioImage} />
              <Text style={styles.itinerarioText}>{itinerario.nombre}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

      </ScrollView>
    </View>
  );
};

export default Home;

// --- ESTILOS ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  headerLogoContainer: { alignItems: "center", marginBottom: 20 },
  headerLogo: { width: 200, height: 60 },
  searchInput: { backgroundColor: "#f0f0f0", borderRadius: 8, paddingHorizontal: 16, paddingVertical: 14, fontSize: 16, marginBottom: 20 },
  filtersContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 30 },
  filterInput: { backgroundColor: "#f5f5f5", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 12 },
  filterText: { color: "#333" },
  dropdown: { flex: 1, marginHorizontal: 5, position: "relative" },
  dropdownList: { backgroundColor: "#fff", borderColor: "#ccc", borderWidth: 1, borderRadius: 8, marginTop: 4, position: "absolute", zIndex: 10, width: "100%" },
  dropdownItem: { padding: 10, fontSize: 14 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 15 },
  experienceCard: { flexDirection: "row", backgroundColor: "#f9f9f9", borderRadius: 10, marginBottom: 20, overflow: "hidden", alignItems: "center" },
  experienceText: { flex: 1, padding: 16 },
  experiencePrice: { fontSize: 14, fontWeight: "bold", color: "#4CAF50", marginBottom: 4 },
  experienceTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  experienceDescription: { fontSize: 14, color: "#666" },
  experienceLocation: { marginTop: 4, fontSize: 13, color: "#999" },
  experienceImage: { width: 120, height: 100, borderRadius: 10, marginRight: 10 },
  pagination: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  pageButton: { backgroundColor: "#2196F3", padding: 8, borderRadius: 5 },
  pageButtonText: { color: "#fff", fontWeight: "bold" },
  itinerariosContainer: { marginTop: 10, marginBottom: 30 },
  itinerarioCard: { marginRight: 15, alignItems: "center" },
  itinerarioImage: { width: 120, height: 80, borderRadius: 10 },
  itinerarioText: { marginTop: 6, fontSize: 13, textAlign: "center" },
});

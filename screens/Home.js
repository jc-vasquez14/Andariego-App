import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const opcionesUbicacion = ['Tegucigalpa', 'San Buenaventura', 'Islas de la Bahía'];
const opcionesCategoria = ['Naturaleza', 'Aventura', 'Cultura'];
const opcionesFecha = ['Hoy', 'Esta semana', 'Este mes'];

const Home = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    fecha: '',
    ubicacion: '',
    categoria: '',
  });

  const [showFecha, setShowFecha] = useState(false);
  const [showUbicacion, setShowUbicacion] = useState(false);
  const [showCategoria, setShowCategoria] = useState(false);

  const experiencias = [
    {
      id: 1,
      nombre: 'La Tigra',
      descripcion: 'Una reserva natural con senderos y biodiversidad.',
      imagen: require('../assets/Latigra.jpg'),
      precio: 30,
      ubicacion: 'Tegucigalpa',
    },
    {
      id: 2,
      nombre: 'Pulhapanzak',
      descripcion: 'Una cascada impresionante en el norte de Honduras.',
      imagen: require('../assets/pulhapanzak.jpg'),
      precio: 25,
      ubicacion: 'San Buenaventura',
    },
    {
      id: 3,
      nombre: 'Utila',
      descripcion: 'Una isla paradisíaca ideal para buceo.',
      imagen: require('../assets/utila.jpg'),
      precio: 50,
      ubicacion: 'Islas de la Bahía',
    },
  ];

  const handleSelect = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
    if (field === 'fecha') setShowFecha(false);
    if (field === 'ubicacion') setShowUbicacion(false);
    if (field === 'categoria') setShowCategoria(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>AndarieGO</Text>

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
            <TouchableOpacity
              style={styles.filterInput}
              onPress={() => setShowFecha(!showFecha)}
            >
              <Text style={styles.filterText}>
                {filters.fecha || 'Fecha'}
              </Text>
            </TouchableOpacity>
            {showFecha && (
              <View style={styles.dropdownList}>
                {opcionesFecha.map((op, i) => (
                  <TouchableOpacity key={i} onPress={() => handleSelect('fecha', op)}>
                    <Text style={styles.dropdownItem}>{op}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Ubicación */}
          <View style={styles.dropdown}>
            <TouchableOpacity
              style={styles.filterInput}
              onPress={() => setShowUbicacion(!showUbicacion)}
            >
              <Text style={styles.filterText}>
                {filters.ubicacion || 'Ubicación'}
              </Text>
            </TouchableOpacity>
            {showUbicacion && (
              <View style={styles.dropdownList}>
                {opcionesUbicacion.map((op, i) => (
                  <TouchableOpacity key={i} onPress={() => handleSelect('ubicacion', op)}>
                    <Text style={styles.dropdownItem}>{op}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Categoría */}
          <View style={styles.dropdown}>
            <TouchableOpacity
              style={styles.filterInput}
              onPress={() => setShowCategoria(!showCategoria)}
            >
              <Text style={styles.filterText}>
                {filters.categoria || 'Categoría'}
              </Text>
            </TouchableOpacity>
            {showCategoria && (
              <View style={styles.dropdownList}>
                {opcionesCategoria.map((op, i) => (
                  <TouchableOpacity key={i} onPress={() => handleSelect('categoria', op)}>
                    <Text style={styles.dropdownItem}>{op}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>

        {/* Experiencias */}
        <Text style={styles.sectionTitle}>Experiencias</Text>

        {experiencias.map(exp => (
          <TouchableOpacity
            key={exp.id}
            onPress={() =>
              navigation.navigate('ExperienceDetail', {
                experience: {
                  nombre: exp.nombre,
                  descripcion: exp.descripcion,
                  ubicacion: exp.ubicacion,
                  duracion: '3 horas',
                  anfitrion: {
                    nombre: 'Juan Pérez',
                    imagen: require('../assets/guia1.jpg'),
                  },
                  gallery: [
                    require('../assets/Latigra.jpg'),
                    require('../assets/pulhapanzak.jpg'),
                    require('../assets/utila.jpg'),
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

        {/* Itinerarios Sugeridos */}
        <Text style={styles.sectionTitle}>Itinerarios sugeridos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.itinerariosContainer}>
          <View style={styles.itinerarioCard}>
            <Image source={require('../assets/rutacolonial.jpg')} style={styles.itinerarioImage} />
            <Text style={styles.itinerarioText}>Ruta Colonial - 3 días</Text>
          </View>
          <View style={styles.itinerarioCard}>
            <Image source={require('../assets/caribehondureño.jpg')} style={styles.itinerarioImage} />
            <Text style={styles.itinerarioText}>Caribe Hondureño - 4 días</Text>
          </View>
          <View style={styles.itinerarioCard}>
            <Image source={require('../assets/aventura.jpg')} style={styles.itinerarioImage} />
            <Text style={styles.itinerarioText}>Aventuras - 5 días</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  filterInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000',
    flex: 1,
    marginHorizontal: 5,
  },
  filterText: {
    color: '#333',
  },
  dropdown: {
    flex: 1,
    marginHorizontal: 5,
    position: 'relative',
  },
  dropdownList: {
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 4,
    position: 'absolute',
    zIndex: 10,
    width: '100%',
  },
  dropdownItem: {
    padding: 10,
    fontSize: 14,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  experienceCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 1,
    alignItems: 'center',
  },
  experienceText: {
    flex: 1,
    padding: 16,
  },
  experiencePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 4,
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  experienceDescription: {
    fontSize: 14,
    color: '#666',
  },
  experienceLocation: {
    marginTop: 4,
    fontSize: 13,
    color: '#999',
  },
  experienceImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itinerariosContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  itinerarioCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  itinerarioImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
  itinerarioText: {
    marginTop: 6,
    fontSize: 13,
    textAlign: 'center',
    color: '#333',
  },
});
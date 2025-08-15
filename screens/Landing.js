import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const images = [
  require('../assets/honduras_3.jpg'),
  require('../assets/honduras_1.jpg'),
  require('../assets/honduras_4.jpg')
];

const Landing = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (index + 1) % images.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setIndex(nextIndex);
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <View style={styles.container}>
      {/* Carrusel de imágenes */}
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <Image source={item} style={styles.backgroundImage} resizeMode="cover" />
        )}
      />

      {/* Capa oscura */}
      <View style={styles.overlayDark} />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/LogoAlternativo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.headerButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.headerButton, styles.registerButton]}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={[styles.headerButtonText, styles.registerButtonText]}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Contenido */}
      <View style={styles.overlayContent}>
        <Text style={styles.brandTitle}>
          <Text style={styles.brandAndarie}>Andarie</Text>
          <Text style={styles.brandGO}>GO</Text>
        </Text>

       
        <Text style={styles.subtitle}>Descubre experiencias únicas con guías locales</Text>

        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.mainButtonText}>Comenzar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    width,
    height,
  },
  overlayDark: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  header: {
    width:100,
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  logo: {
    marginTop:10,
    width: 120,
    height: 50,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  headerButton: {
    marginTop:10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  registerButton: {
    backgroundColor: 'green',
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  overlayContent: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 2,
  },
  // Título AndarieGO en dos colores
  brandTitle: {
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    textShadowColor: 'white',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  brandAndarie: {
    color: 'white', // verde Andarie#000
  },
  brandGO: {
    color: 'white', // negro para GO
    
    borderRadius: 6,
    paddingHorizontal: 6,
    // El fondo claro ayuda a que "GO" se lea sobre fotos oscuras
  },
  subtitle: {
    fontSize: 18,
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 18,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  mainButton: {
    backgroundColor: '#0BDA51',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 10,
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';

// Data konser
const foodData = [
  {
    id: 1,
    title: 'Konser Rock',
    image:
      'https://i.pinimg.com/736x/01/91/e3/0191e3781c094587b81e0d5e0e0c92be.jpg',
  },
  {
    id: 2,
    title: 'Konser Jazz',
    image:
      'https://i.pinimg.com/736x/c6/e9/84/c6e984ccc63e2bb2be52fa0e152fa926.jpg',
  },
  {
    id: 3,
    title: 'Konser Pop',
    image:
      'https://i.pinimg.com/736x/5f/d7/4d/5fd74d952ae7d60e1abafc5f9e4878c6.jpg',
  },
  {
    id: 4,
    title: 'Konser Elektronik',
    image:
      'https://i.pinimg.com/736x/ca/74/67/ca74673d7f8420859a6d060219219215.jpg',
  },
  {
    id: 5,
    title: 'Konser Tradisional',
    image:
      'https://i.pinimg.com/736x/fe/e7/f1/fee7f13d5d709b42f7c6f7d8d12be969.jpg',
  },
];

// Mengambil ukuran layar perangkat
const {width, height} = Dimensions.get('window');

const App = () => {
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.konserImage} />
      <Text style={styles.konserName}>{item.title}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/474x/00/00/00/00000000000000000000000000000000.jpg',
      }} // Gambar latar belakang konser dari Pinterest
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Daftar Konser</Text>
        <FlatList
          data={foodData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)', // Background transparan dengan opasitas 0.7
    paddingTop: 20,
  },
  title: {
    fontSize: width * 0.08, // Ukuran font responsif berdasarkan lebar layar
    fontWeight: 'bold',
    color: '#FFF', // Warna font putih
    textAlign: 'center',
    marginBottom: 10,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Background putih transparan dengan opasitas 0.9
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2, // Opasitas bayangan
    shadowRadius: 5,
    elevation: 6, // Ketinggian bayangan
    marginBottom: 15,
    padding: 12,
    alignItems: 'center',
  },
  konserImage: {
    width: width * 0.9, // Gambar responsif sesuai lebar layar
    height: height * 0.25, // Gambar responsif sesuai tinggi layar
    borderRadius: 15,
    resizeMode: 'cover',
  },
  konserName: {
    marginTop: 8,
    fontSize: width * 0.04, // Ukuran font responsif
    fontWeight: 'bold',
    color: '#FFF', // Warna font putih
    textAlign: 'center',
  },
});

export default App;

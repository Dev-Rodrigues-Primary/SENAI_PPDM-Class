import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { styles } from './style.js';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.blocoA}>
        <ImageBackground source={require('./assets/img1.jpg')} style={styles.area} resizeMode="cover">
          <Text style={styles.texto}>BINGUS</Text>
        </ImageBackground>
        <ImageBackground source={require('./assets/img2.jpg')} style={styles.area} resizeMode="cover">
          <Text style={styles.texto}>BINGUS</Text>
        </ImageBackground>
      </View>

      <View style={styles.blocoB}>
        <ImageBackground source={require('./assets/img3.jpg')} style={styles.area} resizeMode="cover">
          <Text style={styles.texto}>BINGUS</Text>
        </ImageBackground>
        <ImageBackground source={require('./assets/img4.jpg')} style={styles.area} resizeMode="cover">
          <Text style={styles.texto}>AREA</Text>
        </ImageBackground>
      </View>

      <View style={styles.blocoC}>
        <ImageBackground source={require('./assets/img5.jpg')} style={styles.area} resizeMode="cover">
          <Text style={styles.texto}>AREA</Text>
        </ImageBackground>
        <ImageBackground source={require('./assets/img6.jpg')} style={styles.area} resizeMode="cover">
          <Text style={styles.texto}>AREA</Text>
        </ImageBackground>
      </View>

    </View>
  );
}

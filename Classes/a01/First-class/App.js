import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Teste() {
  return (
<View style={styles.pai}>

    <View style={styles.container}>
      <Text style={styles.title}>aaaaaaaaaaaaaaaa</Text>
    </View>

  <View style={styles.container2}>
  <Text style={styles.title}>aaaaaaaaaaaaaaaa</Text>
  </View>

  <View style={styles.container3}>
  <Text style={styles.title}>aaaaaaaaaaaaaaaa</Text>
  </View>
  
  </View>
    
  );
}

const styles = StyleSheet.create({

  pai: {
    flex:1
  },

  container: {

    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 260
  },

  container2: {
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  container3: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 480
  },

  title: {
    fontSize: 20,
    color: '#fff',
    fontStyle: 'italic'
  },
});
 
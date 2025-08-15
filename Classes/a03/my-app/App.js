import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles.js';

function botao(num) {
  console.log(`Botão pressionado ${num}`);
}

export default function App() {
  return (
    <View style={styles.container}>

      {/* Linha 1: 2 botões lado a lado */}
      <View style={styles.ladoAlado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity onPress={() => botao(1)} style={styles.botao1}></TouchableOpacity>
        </View>
        <View style={styles.areaInterna}>
          <TouchableOpacity onPress={() => botao(2)} style={styles.botao2}></TouchableOpacity>
        </View>
      </View>

      {/* Linha 2: 2 botões lado a lado */}
      <View style={styles.ladoAlado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity onPress={() => botao(3)} style={styles.botao3}></TouchableOpacity>
        </View>
        <View style={styles.areaInterna}>
          <TouchableOpacity onPress={() => botao(4)} style={styles.botao4}></TouchableOpacity>
        </View>
      </View>

      {/* Linha 3: 2 botões lado a lado */}
      <View style={styles.ladoAlado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity onPress={() => botao(5)} style={styles.botao1}></TouchableOpacity>
        </View>
        <View style={styles.areaInterna}>
          <TouchableOpacity onPress={() => botao(6)} style={styles.botao2}></TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

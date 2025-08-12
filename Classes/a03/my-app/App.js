import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles.js';

function botao(){
  console.log('Botão precionado 1')
}

function botao2(){
  console.log('Botão precionado 2')
}

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.ladoAlado}>

      <View style={styles.areaInterna}>
        <TouchableOpacity onPress={botao} style={styles.botao1}></TouchableOpacity>
      </View>
      <View style={styles.areaInterna}>
        <TouchableOpacity onPress={botao2} style={styles.botao2}></TouchableOpacity>
      </View>

      </View>



      <View></View>
      <View></View>

    </View>
  );
}



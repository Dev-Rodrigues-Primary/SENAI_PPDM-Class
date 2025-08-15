import { useState } from "react";
import { TouchableOpacity, View, Text, Animated } from "react-native";
import { styles } from "./styles.js";

export default function App() {
  const [info, setInfo] = useState("Clique em um botão");

  function botao(num, cor) {
    setInfo(`Botão ${num} - Estilo:\n${JSON.stringify(cor, null, 2)}`);

  }

  function resetar() {
    setInfo('Clique em um botão')
  }

  return (
    <View style={styles.container}>

      {/* Linha 1 */}
      <View style={styles.ladoAlado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            onPress={() => botao(1, styles.botao1.backgroundColor)}
            style={[styles.botaoBase, styles.botao1]}
            activeOpacity={0.8}
          />
        </View>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            onPress={() => botao(2, styles.botao2.backgroundColor)}
            style={[styles.botaoBase, styles.botao2]}
            activeOpacity={0.8}
          />
        </View>
      </View>

      {/* Linha 2 */}
      <View style={styles.ladoAlado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            onPress={() => botao(3, styles.botao3.backgroundColor)}
            style={[styles.botaoBase, styles.botao3]}
            activeOpacity={0.8}
          />
        </View>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            onPress={() => botao(4, styles.botao4.backgroundColor)}
            style={[styles.botaoBase, styles.botao4]}
            activeOpacity={0.8}
          />
        </View>
      </View>

      {/* Botão de reset */}
      <TouchableOpacity
        onPress={resetar}
        style={[styles.botaoReset, { backgroundColor: "#888", marginTop: 20 }]}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Resetar</Text>
      </TouchableOpacity>

      {/* CAIXONA*/}
      <View style={styles.caixona}>
        <Text style={styles.textoCaixona}>{info}</Text>
      </View>

    </View>
  );
}

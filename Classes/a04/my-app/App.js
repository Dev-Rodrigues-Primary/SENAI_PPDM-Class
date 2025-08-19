import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles.js";

export default function App() {
  const [info, setInfo] = useState("Clique em um botão");

  function botao(num, estilo) {
    // converte o estilo para JSON legível
    setInfo(`Botão ${num} - Estilo:\n${JSON.stringify(estilo, null, 2)}`);
  }

  function resetar() {
    setInfo("Clique em um botão");
  }

  return (
    <View style={styles.container}>
      {/* Linha 1 */}
      <View style={styles.ladoAlado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            onPress={() => botao(1, { ...styles.botaoBase, ...styles.botao1 })}
            style={[styles.botaoBase, styles.botao1]}
            activeOpacity={0.8}
          />
        </View>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            onPress={() => botao(2, { ...styles.botaoBase, ...styles.botao2 })}
            style={[styles.botaoBase, styles.botao2]}
            activeOpacity={0.8}
          />
        </View>
      </View>

      {/* Linha 2 */}
      <View style={styles.ladoAlado}>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            onPress={() => botao(3, { ...styles.botaoBase, ...styles.botao3 })}
            style={[styles.botaoBase, styles.botao3]}
            activeOpacity={0.8}
          />
        </View>
        <View style={styles.areaInterna}>
          <TouchableOpacity
            onPress={() => botao(4, { ...styles.botaoBase, ...styles.botao4 })}
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

      {/* Caixona */}
      <View style={styles.caixona}>
        <Text style={styles.textoCaixona}>{info}</Text>
      </View>
    </View>
  );
}

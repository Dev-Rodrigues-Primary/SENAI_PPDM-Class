import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
    justifyContent: "center",
  },

  ladoAlado: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  areaInterna: {
    flex: 1,
    marginHorizontal: 3,
  },

  botao1: {
    height: 60,
    borderRadius: 10,
    backgroundColor: "#25df77",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  botao2: {
    height: 60,
    borderRadius: 10,
    backgroundColor: "#7de825",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  botao3: {
    height: 60,
    borderRadius: 10,
    backgroundColor: "#fe3b30",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  botao4: {
    height: 60,
    borderRadius: 10,
    backgroundColor: "#00ffff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  botaoReset: {
    height: 35,
    borderRadius: 20,
    backgroundColor: "#888",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    marginTop: 15,
    elevation: 2,
  },

  caixona: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    alignItems: "center",
  },

  textoCaixona: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});

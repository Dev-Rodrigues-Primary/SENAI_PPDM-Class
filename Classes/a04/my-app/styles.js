import { StyleSheet } from "react-native";

//alguns css's deste código foram fornecidos e criado por inteligencia artificial, todos editados também por mim.

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    justifyContent: "center",
  },

  ladoAlado: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  areaInterna: {
    flex: 1,
    marginHorizontal: 5,
  },

  botaoBase: {
    height: 120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    transform: [{ scale: 1 }],
  },

  botaoReset: {
                    height: 30,
                    borderRadius: 1000,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 10,
                    width: 100,
                    transform: [{ scale: 1 }],
                  },

  botao1: {
    backgroundColor: "#25df77",
  },
  botao2: {
    backgroundColor: "#7de825",
  },
  botao3: {
    backgroundColor: "#fe3b30",
  },
  botao4: {
    backgroundColor: "#00ffff",
  },

  caixona: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#1e1e1e",
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 12,
  },

  textoCaixona: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

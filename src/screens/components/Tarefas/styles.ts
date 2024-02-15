import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonText: {
    fontSize: 24,
    color: "#F2F2F2",
  },
  form: {
    flex: 1,
    flexDirection: "row",
    padding: 12,
    marginHorizontal: 24,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#333333",
  },
  containerCheck: {
    backgroundColor: "#5E60CE",
    borderRadius: 999,
    height: 15,
    width: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  containerCircular: {
    borderColor: "#4EA8DE",
    borderRadius: 999,
    alignItems: "center",
    borderWidth: 2,
    height: 15,
    width: 15,
    backgroundColor: "#333333",
  },
  textoTarefa: {
    flex: 1,
    color: "#F2F2F2",
    fontSize: 14,
    paddingHorizontal: 8,
  },
  textoTarefaConcluida: {
    flex: 1,
    color: "#F2F2F2",
    fontSize: 14,
    paddingHorizontal: 8,
    textDecorationLine: "line-through",
  },
  imagem: {
    marginLeft: "auto",
    height: 14,
  },
});

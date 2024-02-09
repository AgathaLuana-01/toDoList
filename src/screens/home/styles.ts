import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0D0D0D",
  },
  colorAppBar: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
  },
  viewCriadasConcluidas: {
    margin: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colorTextAzul: {
    color: "#4EA8DE",
    fontWeight: "bold",
    fontSize: 14,
  },
  colorTextLilas: {
    color: "#8284FA",
    fontWeight: "bold",
    fontSize: 14,
  },
  textContadores:{
    color: '#D9D9D9',
    fontSize: 12,
    
  },
  viewTextContador:{
    flexDirection: "row",  
  },
  colorBody: {
    flex: 4,
    backgroundColor: "#1A1A1A",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,
    borderColor: "#0D0D0D",
    color: "#F2F2F2",
    fontSize: 16,
    padding: 16,
    marginRight: 4,
  },
  form: {
    flexDirection: "row",
    marginTop: 20,
    height: 54,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#F2F2F2",
  },
  textoTarefa: {
    color: "#F2F2F2",
    fontSize: 14,
    paddingHorizontal: 8,
  },

  //Não há tarefas:
  viewNaoHaTarefas: {
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLinhaHorizonal: {
    marginBottom: 48,
    width: "100%",
    height: 1,
    backgroundColor: "#333333",
  },
  textoNaoHaTarefasNegrito: {
    paddingTop: 16,
    color: "#808080",
    fontSize: 14,
    fontWeight: "bold",
  },
  textoNaoHaTarefas: {
    color: "#808080",
    fontSize: 14,
  },
});

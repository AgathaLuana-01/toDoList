import * as React from "react";
import { styles } from "./styles";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Checkbox } from "react-native-paper";

type Tarefas = {
  tarefa: Tarefa;
  removerTarefa: () => void;
  setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
};

export function Tarefa({ tarefa, removerTarefa, setTarefas }: Tarefas) {
  const checked = tarefa.status === "concluido";

  return (
    <View style={styles.form}>
      <View style={checked ? styles.containerCheck : styles.containerCircular}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setTarefas((tarefas) =>
              tarefas.map((t) => {
                if (t.nome === tarefa.nome) {
                  return {
                    ...t,
                    status: checked ? "pendente" : "concluido",
                  };
                }
                return t;
              })
            );
          }}
          color="#F2F2F2"
          uncheckedColor="#333333"
        />
      </View>

      <Text style={checked ? styles.textoTarefaConcluida : styles.textoTarefa}>
        {tarefa.nome}
      </Text>

      <TouchableOpacity onPress={removerTarefa}>
        <Image
          source={require("../../../img/lixeira.png")}
          style={styles.imagem}
        />
      </TouchableOpacity>
    </View>
  );
}

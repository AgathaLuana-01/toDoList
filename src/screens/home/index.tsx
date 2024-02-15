import { styles } from "./styles";
import {
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    View,
    Text,
    Image,
    FlatList,
    Alert,
} from "react-native";
import React from "react";
import { Tarefa } from "../components/Tarefas";
import { useState } from "react";

export type Tarefa = {
    nome: string;
    status: "concluido" | "pendente";
};

export default function Home() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [tarefaDigitada, setTarefaDigitada] = useState("");

    //   const concluidas = useMemo(
    //     () => tarefas.filter((tarefa) => tarefa.status === "concluido").length,
    //     [tarefas]
    //   );

    function inseriTarefa() {
        if (tarefas.find((tarefa) => tarefaDigitada === tarefa.nome)) {
            return Alert.alert("Ops!", "Esta tarefa já foi cadastrada");
        }
        setTarefas((conteudoAtual) => [
            ...conteudoAtual,
            { nome: tarefaDigitada, status: "pendente" },
        ]);
        setTarefaDigitada(""); // Limpa a caixa de texto ao clicar no botão

        console.log(tarefas.length);
    }

    function deletarTarefa(texto: string) {
        Alert.alert("Deletar", "Deseja deletar a tarefa?!", [
            {
                text: "Sim",
                onPress: () =>
                    setTarefas((tarefas) =>
                        tarefas.filter(
                            (tarefaSelecionada) => tarefaSelecionada.nome !== texto
                        )
                    ), //Retorna todas as tarefas, menos a tarefa q foi passada em texto, então isso faz com q ela seja deletada
            },
            {
                text: "Cancelar",
                style: "cancel",
            },
        ]);
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.colorAppBar}>
                <Image source={require("../../img/Logotodo.png")} />
            </View>

            <View style={styles.colorBody}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                        onChangeText={(textoDigitado) => setTarefaDigitada(textoDigitado)} // Adcionando novas tarefas
                        value={tarefaDigitada} // Limpa a caixa de texto ao clicar no botão
                    />
                    <TouchableOpacity style={styles.button} onPress={inseriTarefa}>
                        <Image source={require("../../img/plus.png")} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewCriadasConcluidas}>
                    <View style={styles.viewTextContador}>
                        <Text style={styles.colorTextAzul}>Criadas</Text>
                        <View style={styles.containerContador}>
                            <Text style={styles.textContadores}>{tarefas.length}</Text>
                        </View>
                    </View>
                    <View style={styles.viewTextContador}>
                        <Text style={styles.colorTextLilas}>Concluídas</Text>
                        <View style={styles.containerContador}>
                            <Text style={styles.textContadores}>{
                                // concluidas
                                tarefas.filter((tarefa) => tarefa.status === "concluido").length
                            }</Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    data={tarefas}
                    keyExtractor={(item) => item.nome}
                    renderItem={({ item }) => (
                        <Tarefa
                            tarefa={item}
                            removerTarefa={() => deletarTarefa(item.nome)}
                            setTarefas={setTarefas}
                        />
                    )}
                    //Quando não há tarefas cadastradas
                    ListHeaderComponent={() =>
                        tarefas.length === 0 ? (
                            <View style={styles.viewNaoHaTarefas}>
                                <View style={styles.viewLinhaHorizonal}></View>
                                <Image source={require("../../img/Clipboard.png")} />
                                <Text style={styles.textoNaoHaTarefasNegrito}>
                                    Você ainda não tem tarefas cadastradas
                                </Text>
                                <Text style={styles.textoNaoHaTarefas}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>
                        ) : null // se houver tarefas cadastradas
                    }
                />
            </View>
        </SafeAreaView>
    );
}

import { styles } from "./styles";
import { SafeAreaView, TextInput, TouchableOpacity, View, Text, Image, FlatList, Alert } from "react-native";
import React from "react";
import { Tarefa } from "../components/Tarefas";
import { useState } from "react";

export default function Home() {
    const [tarefa, setTarefa] = useState<string[]>([]);
    const [tarefaDigitada, setTarefaDigitada] = useState('');

    function inseriTarefa() {
        if (tarefa.includes(tarefaDigitada)) {
            return Alert.alert('Ops!', 'Esta tarefa já foi cadastrada');
        }
        setTarefa(conteudoAtual => [...conteudoAtual, tarefaDigitada]);
        setTarefaDigitada(''); // Limpa a caixa de texto ao clicar no botão

        console.log(tarefa.length);
    }

    function deletarTarefa(texto: string) {
        Alert.alert('Deletar', 'Deseja deletar a tarefa?!', [
            {
                text: 'Sim',
                onPress: () => setTarefa(prevState => prevState.filter(tarefaSelecionada => tarefaSelecionada !== texto)) //Retorna todas as tarefas, menos a tarefa q foi passada em texto, então isso faz com q ela seja deletada
            },
            {
                text: 'Cancelar',
                style: 'cancel'
            }
        ])
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.colorAppBar}>
                <Image source={require('../../img/Logotodo.png')} />
            </View>

            <View style={styles.colorBody}>
                <View style={styles.form}>
                    <TextInput style={styles.textInput}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor='#808080'
                        onChangeText={textoDigitado => setTarefaDigitada(textoDigitado)} // Adcionando novas tarefas
                        value={tarefaDigitada} // Limpa a caixa de texto ao clicar no botão
                    />
                    <TouchableOpacity style={styles.button}
                        onPress={inseriTarefa}
                    >
                        <Image source={require('../../img/plus.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewCriadasConcluidas}>
                    <View style={styles.viewTextContador}>
                        <Text style={styles.colorTextAzul}>
                            Criadas
                        </Text>
                        <View style={styles.containerContador}>
                            <Text style={styles.textContadores}>
                                {tarefa.length}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.viewTextContador}>
                        <Text style={styles.colorTextLilas}>
                            Concluidas
                        </Text>
                        <View style={styles.containerContador}>
                            <Text style={styles.textContadores}>
                                XXX
                            </Text>
                        </View>
                    </View>

                </View>

                <FlatList
                    data={tarefa}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Tarefa
                            key={item}
                            descricao={item}
                            removerTarefa={() => deletarTarefa(item)}
                        />
                    )}

                    //Quando não há tarefas cadastradas
                    ListHeaderComponent={() => (
                        tarefa.length === 0 ?
                            (<View style={styles.viewNaoHaTarefas}>
                                <View style={styles.viewLinhaHorizonal}></View>
                                <Image source={require('../../img/Clipboard.png')} />
                                <Text style={styles.textoNaoHaTarefasNegrito}>
                                    Você ainda não tem tarefas cadastradas
                                </Text>
                                <Text style={styles.textoNaoHaTarefas}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>) : null // se houver tarefas cadastradas
                    )}
                />


            </View>
        </SafeAreaView>
    )
}
import { styles } from "./styles";
import { SafeAreaView, TextInput, TouchableOpacity, View, Text, Image, FlatList } from "react-native";
import React from "react";
import { Tarefa } from "../components/Tarefas";
import { useState } from "react";

export default function Home() {
    const [tarefa, setTarefa] = useState<string[]>([]);
    //const tarefa = ['Integer urna interdum massa libero auctor neque turpis turpis semper.'];

    function inseriTarefa() {
        console.log('Botão de inseri tarefa clicado...');
        console.log(tarefa);

        setTarefa(conteudoAtual => [...conteudoAtual, 'Tarefinhas ...']);

    }

    function deletarTarefa() {

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
                    />
                    <TouchableOpacity style={styles.button}
                        onPress={inseriTarefa}
                    >
                        <Text style={styles.buttonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={tarefa}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Tarefa
                            key={item}
                            descricao={item}
                            removerTarefa={() => deletarTarefa()}
                        />
                    )}

                    //Quando não há tarefas cadastradas
                    ListHeaderComponent={() => (
                        <View style={styles.viewNaoHaTarefas}>
                            <View style={styles.viewLinhaHorizonal}></View>
                            <Image source={require('../../img/Clipboard.png')} />
                            <Text style={styles.textoNaoHaTarefasNegrito}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.textoNaoHaTarefas}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />


            </View>
        </SafeAreaView>
    )
}
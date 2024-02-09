import React from "react";
import { styles } from "./styles";
import { TouchableOpacity, View, Text, Image } from "react-native";

type Tarefas = {
    descricao: string;
    concluir?: () => void;
    removerTarefa: () => void;
}

export function Tarefa({ descricao, removerTarefa }: Tarefas) {
    return <View style={styles.form}>
        <Text style={styles.buttonText}>
            o
        </Text>

        <Text style={styles.textoTarefa}>
            {descricao}
        </Text>

        <TouchableOpacity onPress={removerTarefa}>
            <Image source={require('../../../img/lixeira.png')} style={styles.imagem}/>
        </TouchableOpacity>


    </View>

};
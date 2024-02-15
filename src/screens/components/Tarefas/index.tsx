import * as React from 'react';
import { styles } from "./styles";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Checkbox } from 'react-native-paper';


type Tarefas = {
    descricao: string;

    removerTarefa: () => void;
}

export function Tarefa({ descricao, removerTarefa }: Tarefas) {
    const [checked, setChecked] = React.useState(false);

    return <View style={styles.form}>
        <View style={checked ? styles.containerCheck : styles.containerCircular}>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
                color='#F2F2F2'
                uncheckedColor='#333333'
            />
        </View>

        <Text style={checked ? styles.textoTarefaConcluida : styles.textoTarefa}>
            {descricao}
        </Text>

        <TouchableOpacity onPress={removerTarefa}>
            <Image source={require('../../../img/lixeira.png')} style={styles.imagem} />
        </TouchableOpacity>


    </View>

};


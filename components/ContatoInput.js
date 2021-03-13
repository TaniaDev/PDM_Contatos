import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native'


const ContatoInput = (props) => {
      
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');

    const capturarNome = (nome) => {
        setNome(nome)
    };    
    const capturarNumero = (numero) => {
        setNumero(numero)
    };    
    return (
        <View style={styles.contatoView}>
            {/* usuário irá inserir lembretes aqui*/}
            <TextInput
                placeholder="Nome"
                style={styles.contatoInputText}
                onChangeText={capturarNome}
                value={nome}
            />
            <TextInput
                placeholder="Numero"
                style={styles.contatoInputText}
                onChangeText={capturarNumero}
                value={numero}
            />
            <Button
                title="Adicionar Contato"
                onPress={() => props.onAdicionarContato({nome, numero})}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    contatoView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },
    contatoInputText: {
        color: "#6c757d",
        backgroundColor:"white",
        paddingLeft: 8,
        width: '80%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#eeeeee',
        padding: 2,
        marginBottom: 12
    }
}
);

export default ContatoInput;
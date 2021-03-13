import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContatoItem = (props) =>{

    return (
        <TouchableOpacity onPress={()=>{console.log(props.contato)}} onLongPress={props.onDelete.bind(this, props.chave)}>
            <View style={styles.itemNaLista}>
                <Text>Nome: {props.contato.nome}</Text>
                <Text>Telefone: {props.contato.numero}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    
    itemNaLista: {
        color: "#6c757d",
        marginTop: 2,
        paddingLeft: 24,
        padding: 8,
        backgroundColor: '#dee2e6',
        borderColor: '#d8e2dc',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 8
    }
 });

export default ContatoItem;
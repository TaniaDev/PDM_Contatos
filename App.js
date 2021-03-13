import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';

export default function App() {
  
  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(0);
  
  const adicionarContato = (contato) => {
    setContatos([{key: contadorContatos.toString(), value: contato}, ...contatos]);
    setContadorContatos(contadorContatos + 1)
  };

  const removerContato = (keyASerRemovida) => {
    setContatos (contatos => {
      return contatos.filter ((contato) => {
      return contato.key !== keyASerRemovida
      }) 
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contatoInputView}>
        <View style = {styles.contatoInputButton}>
        </View>
      </View>    
      <View style={styles.telaPrincipalView}>
        <ContatoInput onAdicionarContato={adicionarContato}/>
        <FlatList data={contatos} renderItem={contato => (
            <ContatoItem
            chave={contato.item.key}
            contato={contato.item.value}
            onDelete={removerContato}
            />
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#f8f9fa",
    flex: 1
  },
  contatoInputView: {
    alignItems: 'center',
    marginBottom: 12
  },
  contatoTextInput: { 
    color: "#6c757d",
    width: '80%', 
    marginBottom: 4, 
    padding: 2, 
    textAlign: 'center' 
  },
    contatoInputButton: {
      width: '80%'
  },
  itemNaLista: {
    padding: 12,
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center'
    },   
});
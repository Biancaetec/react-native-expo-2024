import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Sabonete() {
    const adicionarAoCarrinho = () => {
        Alert.alert("Adicionado!", "Item adicionado ao carrinho");
    };

    return (
        <View style={styles.container}>
            <View style={styles.quadrado}>
                {/* <View style={styles.containerimagem}>
                    <Image
                        source={require('../../src/assets/images/sabonete1.png')}
                        style={styles.imagem}
                    />
                </View> */}
                <View style={styles.informacoes}>
                    <Text style={styles.nomeProduto}>Sabonete Líquido CHARMM</Text>
                    <Text style={styles.especificacao}>
                       texto
                    </Text>
                    <Text style={styles.preco}>R$ valor</Text>
                    <TouchableOpacity style={styles.botao} onPress={adicionarAoCarrinho}>
                    
                        <MaterialCommunityIcons name="cart-heart" size={27} color="white" />
                        <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    quadrado: {
        flexDirection: 'column',
        backgroundColor: '#f9f9f9',
        borderRadius: 15,
        padding: 20,
        elevation: 5,
        width: '90%',
    },
    // containerimagem: {
    //     borderRadius: 10,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginBottom: 15,
    //     width: "100%",
    //     height: 200,
    // },
    // imagem: {
    //     width: '300%',
    //     height: '300%',
    //     borderRadius: 10,
    //     resizeMode: 'contain',
    // },
    informacoes: {
        alignItems: 'flex-start', // Alinhando à esquerda
        width: '100%', 
    },
    nomeProduto: {
        fontSize: 23,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    especificacao: {
        fontSize: 15,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 10,
        textAlign: 'left', 
    },
    preco: {
        fontSize: 20,
        fontFamily: "RobotoRegular",
        color: '#cd779e',
        marginBottom: 10,
        textAlign: 'left', 
    },
    botao: {
        flexDirection: 'row',
        backgroundColor: '#cd779e',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        elevation: 3,
        width: "100%",
        justifyContent: 'center',
    },
    botaoTexto: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 8,
    },
});

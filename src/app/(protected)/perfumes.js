import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useCart } from '../../hooks/Cart';

export default function perfumes() {     
    const { addCart } = useCart();

// referente aos lancamentos: perfume 1
const adicionarlancamento2 = () => {
    const imagem = require('../../../src/assets/images/lan2perfume.png');
    const nomeProduto = "Perfume";
    const especificacao = "Perfume com aroma fresco e envolvente.";
    const preco = "59.90";
    addCart({ 
        id: 6, 
        imagemproduto: imagem,
        name: nomeProduto, 
        especificacaoproduto: especificacao, 
        precoproduto: preco,
        quantity: 1 
    });
    Alert.alert("Produto adicionado!");
};
  // referente aos lancamentos: perfume masculino
  const adicionarlancamento4 = () => {
    const imagem = require('../../../src/assets/images/lan4perfume2.png');
    const nomeProduto = "Perfume Masculino";
    const especificacao = "Perfume essencial único 90 ml.";
    const preco = "129.90";
    addCart({ 
        id: 8, 
        imagemproduto: imagem,
        name: nomeProduto, 
        especificacaoproduto: especificacao, 
        precoproduto: preco,
        quantity: 1 
    });
    Alert.alert("Produto adicionado!");
};

    return(
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.principal}>
            <View style={styles.produtoContainer}>
                <View style={styles.containerimagem}>
                    <Image
                        source={require('../../../src/assets/images/lan2perfume.png')}
                        style={styles.imagem1}
                    />
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.nomeProduto}>Perfume</Text>
                    <Text style={styles.especificacao}>
                    Perfume com aroma fresco e envolvente.
                    </Text>
                    <Text style={styles.preco}>R$ 59,90</Text>
                    <TouchableOpacity style={styles.botao} onPress={adicionarlancamento2}>
                        <MaterialCommunityIcons name="cart-heart" size={20} color="#3baf2c" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.produtoContainer}>
                <View style={styles.containerimagem}>
                    <Image
                        source={require('../../../src/assets/images/lan4perfume2.png')}
                        style={styles.imagem2}
                    />
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.nomeProduto}>Perfume Masculino</Text>
                    <Text style={styles.especificacao}>
                    Perfume essencial único 90 ml.
                    </Text>
                    <Text style={styles.preco}>R$ 129,90</Text>
                    <TouchableOpacity style={styles.botao} onPress={adicionarlancamento4}>
                        <MaterialCommunityIcons name="cart-heart" size={20} color="#3baf2c" />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({ // eu estilizei a pagina
    scrollContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        height: '800%',
    },
    principal: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#ffffff',
    },
    produtoContainer: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        borderRadius: 15,
        padding: 10,
        elevation: 5,
        width: '90%',
        height: 140,
        marginTop: 23,
        marginLeft: 20,
    },
    containerimagem: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        marginTop: "-2%",   
    },
    imagem1: {
        width: '280%',
        height: '280%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "-25%",
        position: 'absolute',
    },
    imagem2: {
        width: '230%',
        height: '230%',
        borderRadius: 10,
        resizeMode: 'contain',
    },
    informacoes: {
        flex: 1,
        marginLeft: 10,
        marginTop: 3,
    },
    nomeProduto: {
        fontSize: 18,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    especificacao: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 10,
    },
    preco: {
        fontSize: 17,
        fontWeight: '700',
        fontFamily: "RobotoRegular",
        color: '#000',
    
    },
    botao: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 10,
    },
   
});

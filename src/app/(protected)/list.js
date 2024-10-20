import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useCart } from '../../hooks/Cart';

export default function Hidratante() {
    const { addCart } = useCart();
    
    const adicionarAoCarrinho = () => {
        const imagem = require('../../../src/assets/images/hidratante.png');
        const nomeProduto = "Hidratante Corporal";
        const especificacao = "Delicada fragrância de cereja e lavanda. Disponível em embalagem de 200ml.";
        const preco = "29.90";
        addCart({ 
            id: 3, 
            imagemproduto: imagem,
            name: nomeProduto, 
            especificacaoproduto: especificacao, 
            precoproduto: preco,
            quantity: 1 
        });
        Alert.alert("Produto adicionado!");
    };

    return (
        <View style={styles.container}>
            <View style={styles.quadrado}>
                <View style={styles.containerimagem}>
                    <Image
                        source={require('../../../src/assets/images/hidratante.png')}
                        style={styles.imagem}
                    />
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.nomeProduto}>Hidratante Corporal CHARMM</Text>
                    <Text style={styles.especificacao}>
                        Hidratação intensa, com uma delicada fragrância de cereja e lavanda. Disponível em embalagem de 200ml.
                    </Text>
                    <Text style={styles.preco}>R$ 29,90</Text>
                    <TouchableOpacity style={styles.botao}  onPress={() => adicionarAoCarrinho("Produto adicionado!")}>
                        <MaterialCommunityIcons name="cart-heart" size={24} color="white" />
                        <Text style={styles.botaoTexto}>Adicionar ao carrinho</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.icone}>
                    <Fontisto name="shopping-sale" size={30} color="red" />
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
    containerimagem: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        width: "100%",
        height: 220,
    },
    imagem: {
        width: '280%',
        height: '280%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    informacoes: {
        alignItems: 'flex-start', 
        width: '100%', 
    },
    nomeProduto:{
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
        fontFamily: "RobotoRegular",
        color: '#8B004C',
        marginBottom: 10,
    },
    botao: {
        flexDirection: 'row',
        backgroundColor: '#8B004C',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        elevation: 3,
        width: "100%",
        justifyContent: 'center',
    },
    botaoTexto: {
        color: '#ffffff',
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 8,
        fontFamily: "RobotoRegular",
    },
    icone: {
        position: 'absolute', 
        marginTop: -17, 
        right: "-5%", 
        backgroundColor: 'white', 
        borderRadius: 50, 
        padding: 2,
        elevation: 3,
    }
});

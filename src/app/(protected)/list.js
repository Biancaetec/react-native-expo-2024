import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useCart } from '../../hooks/Cart';

export default function Hidratante() {
    const { addCart } = useCart();
    const adicionarAoCarrinho = (nomeProduto) => {
        addCart({ id: 3, name: nomeProduto, quantity: 1, value: 1 })
        Alert.alert("Produto adicionado!", `${nomeProduto} foi adicionado ao carrinho.`);
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
                    <Text style={styles.nomeProduto}>Hidratante Facial CHARMM</Text>
                    <Text style={styles.especificacao}>
                        Hidratação intensa, com uma delicada fragrância de cereja e lavanda. Disponível em embalagem de 200ml.
                    </Text>
                    <Text style={styles.preco}>R$ 29,90</Text>
                    <TouchableOpacity style={styles.botao}  onPress={() => adicionarAoCarrinho("Hidratante Corporal")}>
                        <MaterialCommunityIcons name="cart-heart" size={27} color="white" />
                        <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
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
    nomeProduto: {
        fontSize: 20,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 9,
    },
    especificacao: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 10,
        textAlign: 'left', 
    },
    preco: {
        fontSize: 19,
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
    icone: {
        position: 'absolute', 
        marginTop: -17, 
        right: "-5%", 
        backgroundColor: 'white', 
        borderRadius: 50, 
        padding: 5,
        elevation: 3,
    }
});

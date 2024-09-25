import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useCart } from '../../hooks/Cart';

export default function Sabonete() {
    const { addCart } = useCart();
    const adicionarAoCarrinho = (nomeProduto) => {
        addCart({ id: 1, name: nomeProduto, quantity: 1, value: 1 })
        Alert.alert("Produto adicionado!", `${nomeProduto} foi adicionado ao carrinho.`);
    };
    const adicionarAoCarrinho = (nomeProduto2) => {
        addCart({ id: 1, name: nomeProduto2, quantity: 1, value: 1 })
        Alert.alert("Produto adicionado!", `${nomeProduto2} foi adicionado ao carrinho.`);
    };

    return (
        <View style={styles.container}>
            {/* produto 1 */}
            <View style={styles.produtoContainer}>
                <View style={styles.containerimagem}>
                    <Image
                        source={require('../../../src/assets/images/sabonete1.png')}
                        style={styles.imagem}
                    />
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.nomeProduto2}>Sabonete Líquido CHARMM</Text>
                    <Text style={styles.especificacao}>
                        Com uma incrível fragância de cereja, disponível em 250ml.
                    </Text>
                    <Text style={styles.preco}>R$ 29,90</Text>
                    <TouchableOpacity style={styles.botao} onPress={() => adicionarAoCarrinho("Sabonete Líquido cereja")}>
                        <MaterialCommunityIcons name="cart-heart" size={27} color="white" />
                        <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.icone}>
                    <Fontisto name="shopping-sale" size={30} color="red" />
                </View>
            </View>

            {/* produto 2 */}
            <View style={styles.produtoContainer}>
                <View style={styles.containerimagem}>
                    <Image
                        source={require('../../../src/assets/images/sabonete2.png')}
                        style={styles.imagem}
                    />
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.nomeProduto}>Sabonete Líquido CHARMM</Text>
                    <Text style={styles.especificacao}>
                        Com aroma de baunilha disponível em 200ml.
                    </Text>
                    <Text style={styles.preco}>R$ 49,90</Text>
                    <TouchableOpacity style={styles.botao} onPress={() => adicionarAoCarrinho("Sabonete Líquido baunilha")}>
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
    produtoContainer: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        borderRadius: 15,
        padding: 13,
        elevation: 5,
        width: '100%',
        position: 'relative',
        marginTop: 40,
    },
    containerimagem: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 130,
    },
    imagem: {
        width: '290%',
        height: '290%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginTop: "50%",

    },
    informacoes: {
        flex: 1,
        marginLeft: 10,
    },
    nomeProduto:{
        fontSize: 20,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomeProduto2:{
        fontSize: 20,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    especificacao: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 10,
    },
    preco: {
        fontSize: 18,
        fontFamily: "RobotoRegular",
        color: '#cd779e',
        marginBottom: 10,
    },
    botao: {
        flexDirection: 'row',
        backgroundColor: '#cd779e',
        padding: 7,
        borderRadius: 5,
        alignItems: 'center',
        elevation: 3,
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
        marginTop: -19,
        right: "-5%",
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,
        elevation: 3,
    },
});

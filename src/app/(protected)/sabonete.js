import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useCart } from '../../hooks/Cart';

export default function Sabonete() {
    const { addCart } = useCart();

    const adicionarAoCarrinho = () => {
        const imagem = require('../../../src/assets/images/sabonete1.png');
        const nomeProduto = "Sabonete Líquido cereja";
        const especificacao = "Com uma incrível fragância de cereja, disponível em 250ml.";
        const preco = "29.90";
        addCart({ 
            id: 1, 
            imagemproduto: imagem,
            name: nomeProduto, 
            especificacaoproduto: especificacao, 
            precoproduto: preco,
            quantity: 1 
        });
        Alert.alert("Produto adicionado!");
    };

    const adicionarAoCarrinho2 = () => {
        const imagem = require('../../../src/assets/images/sabonete2.png');
        const nomeProduto = "Sabonete Líquido baunilha";
        const especificacao = "Com aroma de baunilha, disponível em 200ml.";
        const preco = "49.90"; 
        addCart({ 
            id: 2, 
            imagemproduto: imagem,
            name: nomeProduto, 
            especificacaoproduto: especificacao,
            precoproduto: preco,
            quantity: 1 
        });
        Alert.alert("Produto adicionado!");
    };

    const adicionarAoCarrinho3 = () => {
        const imagem = require('../../../src/assets/images/lan1esfoliante.png');
        const nomeProduto = "Sabonete esfoliante";
        const especificacao = "Sabonete vegetal com esfoliante natural.";
        const preco = "79.90"; 
        addCart({ 
            id: 5, 
            imagemproduto: imagem,
            name: nomeProduto, 
            especificacaoproduto: especificacao,
            precoproduto: preco,
            quantity: 1 
        });
        Alert.alert("Produto adicionado!");
    };

    const adicionarAoCarrinho4 = () => {
        const imagem = require('../../../src/assets/images/produto4-kitesfoliante.png');
        const nomeProduto = "Esfoliante Corporal";
        const especificacao = "Kit esfoliante com essência de maracujá.";
        const preco = "69.90"; 
        addCart({ 
            id: 4, 
            imagemproduto: imagem,
            name: nomeProduto, 
            especificacaoproduto: especificacao,
            precoproduto: preco,
            quantity: 1 
        });
        Alert.alert("Produto adicionado!");
    };

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.produtoContainer}>
                <View style={styles.containerimagem}>
                    <Image
                        source={require('../../../src/assets/images/sabonete1.png')}
                        style={styles.imagem1}
                    />
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.nomeProduto}>Sabonete Líquido</Text>
                    <Text style={styles.especificacao}>
                        Com uma incrível fragância de cereja, disponível em 250ml.
                    </Text>
                    <Text style={styles.preco}>R$ 29,90</Text>
                    <TouchableOpacity style={styles.botao} onPress={adicionarAoCarrinho}>
                        <MaterialCommunityIcons name="cart-heart" size={24} color="white" />
                        <Text style={styles.botaoTexto}>Comprar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.icone}>
                    <Fontisto name="shopping-sale" size={30} color="red" />
                </View>
            </View>

            <View style={styles.produtoContainer}>
                <View style={styles.containerimagem}>
                    <Image
                        source={require('../../../src/assets/images/sabonete2.png')}
                        style={styles.imagem2}
                    />
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.nomeProduto}>Sabonete Líquido</Text>
                    <Text style={styles.especificacao}>
                        Com aroma de baunilha disponível em 200ml.
                    </Text>
                    <Text style={styles.preco}>R$ 49,90</Text>
                    <TouchableOpacity style={styles.botao} onPress={adicionarAoCarrinho2}>
                        <MaterialCommunityIcons name="cart-heart" size={24} color="white" />
                        <Text style={styles.botaoTexto}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.produtoContainer}>
                <View style={styles.containerimagem}>
                    <Image
                        source={require('../../../src/assets/images/lan1esfoliante.png')}
                        style={styles.imagem3}
                    />
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.nomeProduto}>Sabonete esfoliante</Text>
                    <Text style={styles.especificacao}>
                        Sabonete vegetal com esfoliante natural.
                    </Text>
                    <Text style={styles.preco}>R$ 79,90</Text>
                    <TouchableOpacity style={styles.botao} onPress={adicionarAoCarrinho3}>
                        <MaterialCommunityIcons name="cart-heart" size={24} color="white" />
                        <Text style={styles.botaoTexto}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.produtoContainer}>
                <View style={styles.containerimagem}>
                    <Image
                        source={require('../../../src/assets/images/produto4-kitesfoliante.png')}
                        style={styles.imagem3}
                    />
                </View>
                <View style={styles.informacoes}>
                    <Text style={styles.nomeProduto}>Esfoliante Corporal</Text>
                    <Text style={styles.especificacao}>
                        Kit esfoliante com essência de maracujá.
                    </Text>
                    <Text style={styles.preco}>R$ 69,90</Text>
                    <TouchableOpacity style={styles.botao} onPress={adicionarAoCarrinho4}>
                        <MaterialCommunityIcons name="cart-heart" size={24} color="white" />
                        <Text style={styles.botaoTexto}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    produtoContainer: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        borderRadius: 15,
        padding: 13,
        elevation: 5,
        width: '100%',
        marginTop: 40,
    },
    containerimagem: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
    },
    imagem1: {
        width: '290%',
        height: '290%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginTop: "32%",
        marginLeft: "-10%",
    },
    imagem2: {
        width: '290%',
        height: '290%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginTop: "30%",
    },
    imagem3: {
        width: '220%',
        height: '220%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginTop: "30%",
    },
    informacoes: {
        flex: 1,
        marginLeft: 10,
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
        fontFamily: "RobotoRegular",
        color: '#8B004C',
        marginBottom: 10,
    },
    botao: {
        flexDirection: 'row',
        backgroundColor: '#8B004C',
        padding: 6,
        borderRadius: 5,
        alignItems: 'center',
        elevation: 3,
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
        marginTop: -19,
        right: "-5%",
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 2,
        elevation: 3,
    },
});

import React from "react";
import { View, StyleSheet, Text, ScrollView, Button, TouchableOpacity, Image } from "react-native";
import { Banner } from "../../components/Banner";
import { router } from "expo-router";
import { useCart } from '../../hooks/Cart';
import { Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Promocao() {
    const { addCart } = useCart();
    const addCart1 = () => {
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
        Alert.alert("Sabonete adicionado!");
    };

    const addCart2 = () => {
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
        Alert.alert("Sabonete adicionado!");
    };

    const addCart3 = () => {
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
        <ScrollView contentContainerStyle={styles.container}>
            <Banner style={styles.banner} />
            <Text style={styles.titulo}>Encontre a categoria perfeita para você</Text>

            <TouchableOpacity
                style={styles.link1}
                onPress={() => router.push("sabonete")}>
                <Text style={styles.textolink1}>Sabonete</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.link2}
                onPress={() => router.push("list")}>
                <Text style={styles.textolink2}>Hidratante</Text>
            </TouchableOpacity>

            <View style={styles.produtoContainer}>
                <View style={styles.containerproduto1}>
                    <View style={styles.containerimagem}>
                        <Image
                            source={require('../../../src/assets/images/sabonete1.png')}
                            style={styles.imagem}
                        />
                    </View>
                    <View style={styles.containerpromocao1}>
                        <Text style={styles.promocao1}>Promoção</Text>
                    </View>
                    <View style={styles.informacoes}>
                        <Text style={styles.marca}>CHARMM</Text>
                        <Text style={styles.nomeProduto}>Sabonete Líquido</Text>
                        <Text style={styles.especificacao}>
                            Com uma incrível fragância de cereja, disponível em 250ml.
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.preco}>R$ 29,90</Text>

                            <TouchableOpacity onPress={addCart1} style={{ padding: 20 }}>
                                <Ionicons name="add" size={20} color="#000" />
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>

                <View style={styles.containerproduto2}>
                    <View style={styles.containerimagem}>
                        <Image
                            source={require('../../../src/assets/images/sabonete2.png')}
                            style={styles.imagem2}
                        />
                    </View>
                    <View style={styles.informacoes2}>
                        <Text style={styles.marca2}>CHARMM</Text>
                        <Text style={styles.nomeProduto2}>Sabonete Líquido</Text>
                        <Text style={styles.especificacao2}>
                            Com aroma de baunilha disponível em 200ml.
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.preco}>R$ 49,90</Text>
                            <TouchableOpacity onPress={addCart2} style={{ padding: 20 }}>
                                <Ionicons name="add" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </View>

            <View style={styles.containerproduto3}>
                <View style={styles.containerimagem}>
                    <Image
                        source={require('../../../src/assets/images/hidratante.png')}
                        style={styles.imagem3}
                    />
                </View>
                <View style={styles.informacoes3}>
                    <View style={styles.containerpromocao3}>
                        <Text style={styles.promocao3}>Promoção</Text>
                    </View>
                    <Text style={styles.marca3}>CHARMM</Text>
                    <Text style={styles.nomeProduto3}>Hidratante Corporal</Text>
                    <Text style={styles.especificacao3}>
                        Hidratação intensa, com uma delicada fragrância de cereja e lavanda. Disponível em embalagem de 200ml.
                    </Text>
                    <Text style={styles.preco3}>R$ 29,90</Text>
                    <TouchableOpacity onPress={addCart3} style={{ padding: 20 }}>
                                <Ionicons name="add" size={20} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: "5%",
    },

    banner: {
        width: '100%',
        height: '100%',
    },
    titulo: {
        fontSize: 18,
        fontWeight: "400",
        marginTop: "70%",
        marginLeft: "7%",
        width: "100%",
        position: "absolute",
    },
    link1: {
        marginTop: "82%",
        marginLeft: "8%",
        paddingHorizontal: 12,
        height: 40,
        borderRadius: 10,
        position: "absolute",
        backgroundColor: '#ac0c24',
    },
    textolink1: {
        marginTop: 10,
        color: "white",
        fontSize: 15,
        fontFamily: "RobotoMedium",
    },
    link2: {
        marginTop: "82%",
        marginLeft: "40%",
        paddingHorizontal: 12,
        height: 40,
        borderRadius: 10,
        position: "absolute",
        backgroundColor: '#ac0c24',
    },
    textolink2: {
        marginTop: 10,
        color: "white",
        fontSize: 15,
        fontFamily: "RobotoMedium",
    },
    produtoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '50%',
    },
    containerproduto1: {
        width: '48%',
    },
    containerproduto2: {
        width: '48%',
    },
    containerimagem: {
        backgroundColor: "#eee",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
    },
    imagem: {
        width: '210%',
        height: '210%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "-10%",
    },
    imagem2: {
        width: '210%',
        height: '210%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "10%",
    },
    containerpromocao1: {
        backgroundColor: '#3baf2c',
        borderRadius: 20,
        width: 90,
        height: 22,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        marginTop: "3%",
        marginLeft: "2%"
    },
    promocao1: {
        color: "#fff",
    },
    informacoes: {
        marginTop: "2%",
    },
    informacoes2: {
        marginTop: "2%",
    },
    marca: {
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    marca2: {
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomeProduto: {
        fontSize: 15,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomeProduto2: {
        fontSize: 15,
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
    especificacao2: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 10,
    },
    preco: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: '#8B004C',
        fontWeight: '600',
        flex: 1
    },
    preco2: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: '#8B004C',
        fontWeight: '600',
    },

    // produto 3
    containerproduto3: {
        width: '48%',
        marginTop: '10%',
    },

    imagem3: {
        width: '230%',
        height: '230%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "-6%",
        marginTop: '16%',

    },

    containerpromocao3: {
        backgroundColor: '#3baf2c',
        borderRadius: 20,
        width: 90,
        height: 22,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "-90%",
        left: 4,
    },
    promocao3: {
        color: "#fff",
    },
    informacoes3: {
        marginTop: "3%",

    },
    marca3: {
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomeProduto3: {
        fontSize: 15,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    especificacao3: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 10,
    },
    preco3: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: '#8B004C',
        fontWeight: '600',
    },
});

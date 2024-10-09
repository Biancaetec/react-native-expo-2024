import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Image, Button, Alert } from "react-native";
import { Banner } from "../../components/Banner";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useCart } from '../../hooks/Cart';
import { router } from "expo-router";


export default function Promocao() {
    const [selectedLink, setSelectedLink] = useState(0);
    const navigation = useNavigation();
    const { addCart } = useCart();

    const handlePress = (index) => {
        setSelectedLink(index);

        if (index === 0) {
            router.push("sabonete")
        } else if (index === 1) {
            navigation.navigate('sabonete');
        } else if (index === 2) {
            navigation.navigate('list');
        }
    };

    const links = ["Produtos", "Sabonete", "Hidratante"];

    const addSaboneteLiquido = () => {
        addCart({ id: 1, imagemproduto: "", name: "Sabonete Liquido", especificacaoproduto: "", precoproduto: 29.9, quantity: 1, value: 29.9 })
        Alert.alert("Sabonete Liquido Adicionado");
    }

    const addHidratante = () => {
        addCart({ id: 2, imagemproduto: "", name: "Hidrante", especificacaoproduto: "", precoproduto: 49.9, quantity: 1, value: 49.9 })
        Alert.alert("Hidratante Adicionado");
    }
    

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button title="adicinar" onPress={addSaboneteLiquido} />
            <View style={styles.containerpesquisa}>
                <TextInput
                    style={styles.pesquisar}
                    placeholder="Buscar produtos"
                    keyboardType="default"
                />
                <AntDesign name="search1" size={18} color="black" style={styles.iconepesquisa} />
            </View>

            <Banner style={styles.banner} />

            <View style={styles.containertitulo}>
                <Text style={styles.titulo}>Encontre a categoria perfeita para você</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={() => router.push("sabonete")}>
                    <Text style={styles.link}>Sabonete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.linkContainer}
                    onPress={() => router.push("list")}>
                    <Text style={styles.link}>Hidratante</Text>
                </TouchableOpacity>
            </ScrollView>

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
                            <Button title="+" onPress={addSaboneteLiquido} />
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
                            <Button title="+" onPress={addHidratante} />
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
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: "5%",
        paddingBottom: 60,
    },
    containerpesquisa: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 8,
        marginBottom: 10,
    },
    pesquisar: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 14,
    },
    iconepesquisa: {
        marginLeft: 6,
    },
    bannerContainer: {
        width: '100%',
        height: 250,
        marginBottom: 10,
    },
    banner: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    containertitulo: {
        marginTop: "-2%",
        marginBottom: "3%",
    },
    titulo: {
        fontSize: 18,
        fontWeight: "400",
    },
    scrollContainer: {
        paddingVertical: 10,
        marginTop: "-1%",
    },
    linkContainer: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        height: 40,
        borderRadius: 10,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        color: '#ac0c24',
        fontSize: 14,
        fontFamily: "RobotoMedium",
    },
    produtoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10%',
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

import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { Banner } from "../../components/Banner";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';  

export default function Promocao() {
    const [selectedLink, setSelectedLink] = useState(0);
    const navigation = useNavigation();  

    const handlePress = (index) => {
        setSelectedLink(index);
        
        // Adicione um console.log para depuração

        if (index === 0) {
            navigation.navigate('index'); 
        } else if (index === 1) {
            navigation.navigate('sabonete'); 
        } else if (index === 2) {
            navigation.navigate('list'); 
        }
    };

    const links = ["Produtos", "Sabonete", "Hidratante"];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.containerpesquisa}>
                <TextInput
                    style={styles.pesquisar}
                    placeholder="Buscar produtos"
                    keyboardType="default"
                />
                <AntDesign name="search1" size={18} color="black" style={styles.iconepesquisa} />
            </View> 
            
            <View style={styles.bannerContainer}>
                <Banner style={styles.banner} />
            </View>
     
            <View style={styles.containertitulo}>
                <Text style={styles.titulo}>Encontre a categoria perfeita para você</Text>
            </View>

            {/* Links */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                {links.map((link, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[styles.linkContainer, 
                            { 
                                backgroundColor: selectedLink === index ? '#ccc' : 'transparent',
                                borderColor: '#8B004C',
                                borderWidth: selectedLink === index ? 0 : 1,
                            }
                        ]}
                        onPress={() => handlePress(index)}  
                    >
                        <Text style={styles.linkText}>{link}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.containerproduto1}>
                <View style={styles.view1}>
                    <View style={styles.containerimagem}>
                        <Image
                            source={require('../../../src/assets/images/sabonete1.png')}
                            style={styles.imagem}
                        />
                    </View>
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
                    <Text style={styles.preco}>R$ 29,90</Text>
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
        borderColor: '#ccc',
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
    linkText: {
        color: '#8B004C',  
        fontSize: 14, 
        fontFamily: "RobotoMedium",
    },
    containerproduto1: {
        position: "relative",
        marginTop: "10%",
    },
    view1: {
        backgroundColor: "#eee",
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 5, 
        width: "40%",
        height: 185, 
        justifyContent: 'center',
        alignSelf: 'flex-start',  
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
        marginTop: "3%",
        marginLeft: "-5%",
    },  
    containerpromocao1: {
        backgroundColor: '#3baf2c',
        borderRadius: 20,
        width: 90,
        height: 22,
        alignItems: "center",
        alignSelf: 'flex-start',  
        justifyContent: "center",
        position: "absolute",
        marginTop: "3%",
        marginLeft: "2%"
    },
    promocao1: {
        color: "#fff",
    },
    informacoes: {
        flex: 1,
        marginTop: "2%",
        width: "45%",
    },
    marca:{
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomeProduto:{
        fontSize: 15,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    especificacao: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        width: "94%",
        marginBottom: 10,
    },
    preco: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: '#8B004C',
        fontWeight: '600',
        marginBottom: 10,
    },
});

import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Banner } from "../../components/Banner";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';  // Importando a navegação

export default function Promocao() {
    const [selectedLink, setSelectedLink] = useState(null);
    const navigation = useNavigation();  // Usando o hook de navegação

    const handlePress = (index) => {
        setSelectedLink(index);
        
        // Verifique o índice do link e redirecione para a página correspondente
        if (index === 0) {
            navigation.navigate('index'); // Navegar para a página de Produtos
        } else if (index === 1) {
        navigation.navigate('sabonete'); // Navegar para a página de Sabonete
        } else if (index === 2) {
            navigation.navigate('list'); // Navegar para a página de Hidratante
        }
    };

    const links = ["Produtos", "Sabonete", "Hidratante"];

    return (
        <View style={styles.container}>
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
                        style={[
                            styles.linkContainer, 
                            { 
                                backgroundColor: selectedLink === index ? '#ccc' : 'transparent',
                                borderColor: '#8B004C',
                                borderWidth: selectedLink === index ? 0 : 1,
                            }
                        ]}
                        onPress={() => handlePress(index)}  // Redirecionamento ao clicar
                    >
                        <Text style={styles.linkText}>{link}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Retângulos cinzas com imagens */}
            <View style={styles.view}>
                <Text>Imagem 1</Text>
            </View>

            <View style={styles.view}>
                <Text>Imagem 2</Text>
            </View>

            <View style={styles.view3}>
                <Text>Imagem 3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: "5%",
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
        marginBottom: "5%",
    },  
    titulo: {
        fontSize: 18,
        fontWeight: "400",
    },
    scrollContainer: {
        paddingVertical: 10,
        marginTop: "10%",
    },
    linkContainer: {
        paddingVertical: 8, 
        paddingHorizontal: 12,
        height: "10%",
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
    view: {
        paddingRight: 2,
        marginTop: "20%",
        marginBottom: "5%",
        flexDirection: "row",
        backgroundColor: "#ddd",
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15, 
        width: "40%",
        height: "20%",
    },  
    view3: {
        paddingRight: 2,
        paddingBottom: "60%",
        flexDirection: "column",
        backgroundColor: "#ddd",
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15, 
        width: "40%",
        height: "-10%",
        position: "relativa",
    },  
});

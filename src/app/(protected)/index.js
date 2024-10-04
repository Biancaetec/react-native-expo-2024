import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Banner } from "../../components/Banner";
import { AntDesign } from '@expo/vector-icons'; 

export default function Promocao() {
    const [selectedLink, setSelectedLink] = useState(null);

    const handlePress = (index) => {
        setSelectedLink(index);
    };

    const links = ["Produtos", "Promoção", "Hidratante", "Sabonete"];

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
                        onPress={() => handlePress(index)}
                    >
                        <Text style={styles.linkText}>{link}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
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
    scrollContainer: {
        paddingVertical: 10,
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
});

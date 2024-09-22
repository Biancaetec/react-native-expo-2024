import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Hidratante() {
    return (
        <View style={styles.container}>
            <View style={styles.retangulo}>
                <Text style={styles.frase}>
                    Sua pele merece tanto cuidado quanto sua mente. Hidrate-se!
                </Text>
            </View>

            <View style={styles.containerimagem}>
               <Image
                    source={require('../../../src/assets/images/produto.png')}
                    style={styles.image}
                /> 
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
    },
    retangulo: {
        position: 'absolute', // Mantém o retângulo fora do fluxo
        top: '4%', // ajuste conforme necessário
        padding: 10,
        borderRadius: 15,
        margin: "4%",
        backgroundColor: "#cd779e",
        alignItems: 'center',
        width: "90%",
    },
    frase: {
        fontSize: 19,
        fontFamily: "RobotoRegular",
        color: "#fff",
        textAlign: "left", 
    },
    containerimagem: {
        width: "36%",
        height: "30%", 
        backgroundColor: '#f4f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
        marginTop: "20%", // ajuste para posicionar o contêiner da imagem
    },
    image: {
        width: "170%", // ajuste conforme necessário
        height: "170%", // ajuste conforme necessário
    }
});

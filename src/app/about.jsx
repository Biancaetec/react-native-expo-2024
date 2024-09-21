import { router } from "expo-router";
import { Button, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/logocabanni.png')}
                style={styles.image}
            />
            <Text style={styles.titulo}>
                SEJA BEM-VINDO!
            </Text>

            <View style={styles.retangulo}>
                <Text style={styles.frase}>
                    O aplicativo Cabanni traz uma seleção exclusiva que aprimora a experiência de cuidado pessoal.
                </Text>
            </View>
            <View style={styles.sobre}>
                 <Text style={styles.vermais}>
                O que você encontrará :
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => { router.replace("/") }}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 400,
        height: 300,
        resizeMode: 'contain',
        marginTop: "-10%",
    },
    titulo: {
        fontSize: 22,
        fontFamily: "RobotoRegular",
        color: "black",
        textAlign: "left", 
        alignSelf: 'flex-start', // Faz com que o título se alinhe ao início do container pai
        marginHorizontal: 20, // Adiciona margem lateral para ajustar o espaçamento
        marginVertical: 8,
    },
    retangulo: {
        padding: 10,
        borderRadius: 15,
        margin: 10,
        backgroundColor: "#c2a0a5",
        alignItems: 'center',
    },
    frase: {
        fontSize: 19,
        fontFamily: "RobotoRegular",
        color: "#fff",
        textAlign: "left", 
        
    },
    sobre: {
        textAlign: "left", 
        alignSelf: 'flex-start', // Faz com que o título se alinhe ao início do container pai
        marginHorizontal: 20, // Adiciona margem lateral para ajustar o espaçamento
        marginVertical: 8,
    },
    vermais: {
        fontSize: 21,
        fontFamily: "RobotoRegular",
        color: "black",
        marginTop: 20,
        
    },
    button: {
        backgroundColor: '#ac0c24', // Cor de fundo do botão
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: "RobotoMedium",
    },
});

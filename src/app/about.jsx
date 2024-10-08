import { router } from "expo-router";
import { Button, Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

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

            <View style={styles.subtextocontainer}>
                <Text style={styles.subtexto}>
                O que você encontrará :
                </Text>
                {/* tópico 1 */}
                <Entypo name="check" size={24} color="#8B004C" />
                <Text style={styles.topico1}>
                Hidratantes de alta qualidade
                </Text>
                {/* tópico 2 */}
                <Entypo name="check" size={24} color="#8B004C" />
                <Text style={styles.topico2}>
                Sabonetes líquidos exclusivos
                </Text>
                {/* tópico 3 */}
                <Entypo name="check" size={24} color="#8B004C" />
                <Text style={styles.topico3}>
                Promoções imperdíveis
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
        fontWeight: "700",
        fontFamily: "RobotoRegular",
        color: "black",
        textAlign: "left", 
        alignSelf: 'flex-start', 
        marginHorizontal: "5%", 
        marginVertical: "2%",
    },
    retangulo: {
        padding: 10,
        borderRadius: 15,
        margin: "4%",
        backgroundColor: "#8B004C",
        alignItems: 'center',
    },
    frase: {
        fontSize: 19,
        fontFamily: "RobotoRegular",
        color: "#fff",
        textAlign: "left", 
        
    },
    subtextocontainer: {
        textAlign: "left", 
        alignSelf: 'flex-start', 
        marginHorizontal: "6%", 
        marginVertical: "1%",
    },
    subtexto: {
        fontSize: 22,
        fontFamily: "RobotoRegular",
        color: "black",
        marginTop: "6%",
        marginBottom: "9%",
        
    },
    topico1: {
        fontSize: 20,
        fontFamily: "RobotoRegular",
        color: "black",
        marginTop: "-8%",
        marginLeft: "9%",
        marginBottom: "3%",
    },
    topico2: {
        fontSize: 20,
        fontFamily: "RobotoRegular",
        color: "black",
        marginTop: "-8%",
        marginLeft: "9%",
        marginBottom: "3%",
    },
    topico3: {
        fontSize: 20,
        fontFamily: "RobotoRegular",
        color: "black",
        marginTop: "-8%",
        marginLeft: "9%",
        marginBottom: "7%",
    },
    button: {
        backgroundColor: '#8B004C', 
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

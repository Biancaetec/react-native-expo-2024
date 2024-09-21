import { router } from "expo-router";
import { Button, Text, View, StyleSheet, Image } from "react-native";

export default function About() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={require('../assets/images/logocabanni.png')}
                style={{
                    marginTop: "-90%",
                    width: '100%', 
                    height: undefined,
                    aspectRatio: 1, // Preserva a proporção da imagem
                    resizeMode: 'contain',
                }}
            />
            <View>
            <Text style={styles.titulo}>
                Seja bem-vindo !
                </Text>
            </View>
            <View style={styles.retangulo}>
                <Text style={styles.frase}>
                    No aplicativo Cabanni, você encontrará uma seleção refinada de produtos da linha Charmm, incluindo hidratantes e sabonetes exclusivos que elevam a sua experiência de cuidado pessoal.
                </Text>
            </View>
            <Button title="Voltar" onPress={() => { router.replace("/") }} />
        </View>
    );
}

const styles = StyleSheet.create({
    frase: {
        fontSize: 18,
        fontFamily: "RobotoRegular",
        color: "#ffff",
    },
    retangulo: {
        padding: 10,
        borderRadius: 24,
        margin: 8,
        backgroundColor: "rgba(163, 21, 54, 0.8)",
    },
    frase: {
        fontSize: 18,
        fontFamily: "RobotoRegular",
        color: "#ffff",
    }
});

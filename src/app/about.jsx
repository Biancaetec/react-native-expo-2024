import { router } from "expo-router";
import { Button, Text, View, StyleSheet, Image } from "react-native";

export default function About() {
    return(
        
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
             <Image
                        source={require('../assets/images/banner.png')}
                        style={{
                            flex: 1,
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain',
                        }}

                    />
            <View style={styles.page}>
            <Text style={styles.frase}>No aplicativo Cabanni, você encontrará uma seleção refinada de produtos da linha Charmm, incluindo hidratantes e sabonetes exclusivos que elevam a sua experiência de cuidado pessoal.</Text>
                </View>
            <Button title="Voltar" onPress={() => {router.replace("/")}} />
        </View>
    );
}
const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 24,
        margin: 8,
        marginBottom: "80%",
        borderColor: '#a31536',
        borderWidth: 1, 
        backgroundColor: "rgba(163, 21, 54, 0.8)",  
        
    },
    frase: {
        fontSize: 20,
        fontFamily: "RobotoRegular",
        color: "#ffff",

    },

    });

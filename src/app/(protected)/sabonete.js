import { Text, View, StyleSheet } from "react-native";

export default function Sabonete() { //criar os itens do menu - Sabonete líquido
    return(
        <View style={styles.container}>
             <View style={styles.retangulo}>
                <Text style={styles.frase}>
                Descubra a suavidade e frescor dos nossos sabonetes líquidos para uma pele limpa e hidratada.                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ // eu estilizei a pagina
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
        backgroundColor: "#dcc1ff",
        alignItems: 'center',
        width: "90%",
    },
    frase: {
        fontSize: 19,
        fontFamily: "RobotoRegular",
        color: "#fff",
        textAlign: "left", 
    },
  
  });
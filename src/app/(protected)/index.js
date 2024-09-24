import { View, StyleSheet, Text } from "react-native";
import { Banner } from "../../components/Banner";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Promocao() {
    return (
        <View style={styles.container}>
            <Banner />
            
            <View style={styles.container2}>
                <Text style={styles.titulo}>Detalhes da Promoção</Text>

                <View style={styles.row}>
                    <AntDesign name="tagso" size={28} color="#ac0c24" style={styles.icone} />
                    <Text style={styles.texto}>Sabonete líquido de 250ml com a incrível fragrância de cereja.</Text>
                </View>

                <View style={styles.row}>
                    <AntDesign name="tagso" size={28} color="#ac0c24" style={styles.icone} />
                    <Text style={styles.texto}>Creme Nutritivo Para o Corpo Cereja e lavanda de 200ml</Text>
                </View>

                <View style={styles.container3}>
                    <Text style={styles.container3texto}>Aproveite nossas promoções especiais!</Text>
                </View>
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
    container2: {
        top: "-8%", 
        width: "100%", 
        paddingHorizontal: "5%",
        paddingVertical: "10%", 
        borderRadius: 15,
        
    },
    titulo: {
        fontSize: 24,
        fontFamily: "RobotoMedium",
        color: '#333',
        textAlign: 'center',
        marginBottom: "10%",
    },
    row: {
      width: '110%', // Limita a largura da row
      alignSelf: 'center', //centraliza no meio
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      elevation: 5,
    },
    icone: {
        marginRight: 15,
        color: "#ac0c24",
    },
    texto: {
        fontSize: 18,
        color: '#555',
        fontFamily: "RobotoRegular",
        flexShrink: 1,
    },
    container3: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#ac0c24',
        borderRadius: 10,
        alignItems: 'center',
    },
    container3texto: {
        color: '#fff',
        fontSize: 18,
        fontFamily: "RobotoMedium",
    },
});

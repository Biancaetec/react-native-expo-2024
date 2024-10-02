import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Banner } from "../../components/Banner";
import { AntDesign } from '@expo/vector-icons'; 

export default function Promocao() {
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
            
            <View style={styles.container2}>
                <Text style={styles.textoDetalhes}>Detalhes da Promoção</Text>

                <View style={styles.row}>
                    <AntDesign name="tagso" size={28} color="#8B004C" style={styles.icone} />
                    <Text style={styles.texto}>Sabonete líquido de 250ml com a incrível fragrância de cereja.</Text>
                </View>

                <View style={styles.row}>
                    <AntDesign name="tagso" size={28} color="#8B004C" style={styles.icone} />
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
        height: 35, 
        paddingHorizontal: 8,
        fontSize: 14, 
    },
    iconepesquisa: {
        marginLeft: 6,
        marginRight: 10, 
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: "5%",
    },
    bannerContainer: {
        width: '100%', 
        height: 250, 
        marginBottom: "-10%", 
    },
    banner: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'cover', 
    },
    container2: {
        width: "100%", 
        paddingHorizontal: "5%",
        paddingVertical: "10%", 
        borderRadius: 15,
    },
    textoDetalhes: {
        fontSize: 24,
        fontFamily: "RobotoMedium",
        color: '#333',
        textAlign: 'center',
        marginBottom: "10%",
    },
    
    promocao: {
        fontSize: 14, 
        color: '#333', 
    },
    row: {
        width: '100%', 
        alignSelf: 'center', 
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
    texto: {
        fontSize: 18,
        color: '#555',
        fontFamily: "RobotoRegular",
        flexShrink: 1,
    },
    icone: {
        marginLeft: 5,
        marginRight: 10, 
    },
    container3: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#8B004C',
        borderRadius: 10,
        alignItems: 'center',
    },
    container3texto: {
        color: '#fff',
        fontSize: 18,
        fontFamily: "RobotoMedium",
    },
});

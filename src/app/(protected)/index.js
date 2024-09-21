import { View, StyleSheet, Text } from "react-native";
import { Banner } from "../../components/Banner";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Promoção() { //criar os itens do menu - Promoção
    return(
        <View style={styles.container}>
            <Banner />
            {/* começa uma view para escrever os itens */}
            <View style={styles.container2}>
            <AntDesign name="tagso" size={28} color="black"  style={styles.icone1}/>
            <Text style={styles.texto1}>
            Sabonete líquido de 200ml com a incrível fragrância de cereja.
            </Text>

            <AntDesign name="tagso" size={28} color="black"  style={styles.icone2}/>
            <Text style={styles.texto2}>
            Sabonete líquido de 200ml com a incrível fragrância de cereja.
            </Text>
            </View>
        </View> 
    );
}

const styles = StyleSheet.create({ // eu estilizei a cor da pagina principal
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
    container2: {
        flex: 1,
    },
    icone1: {
      marginTop: "4%",
      margin: "15%",
    },
    texto1: {
    margin: "26%",
    fontSize: 15,
    fontFamily: "MontserratRegular",
    marginTop: "-23%",
    width: "60%",
    },

    icone2: {
        marginTop: "-10%",
        margin: "15%",
      },
    texto2: {
    margin: "26%",
    fontSize: 15,
    fontFamily: "MontserratRegular",
    marginTop: "-23%",
    width: "60%",
    }
  });
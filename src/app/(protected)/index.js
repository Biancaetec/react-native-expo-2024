import { View, StyleSheet } from "react-native";
import { Banner } from "../../components/Banner";

export default function Home() { //criar os itens do menu - Promoção
    return(
        <View style={styles.container}>
            <Banner />
            {/* começa uma view para escrever os itens */}
        </View> 
    );
}

const styles = StyleSheet.create({ // eu estilizei a cor da pagina principal
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
  
  });
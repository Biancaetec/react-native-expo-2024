import { Text, View, StyleSheet } from "react-native";

export default function Sabonete() { //criar os itens do menu - Sabonete líquido
    return(
        <View style={styles.container}>
            <Text>Sabonete líquido</Text>
        </View>
    );
}

const styles = StyleSheet.create({ // eu estilizei a pagina
    container: {
      justifyContent: 'center', 
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
  
  });
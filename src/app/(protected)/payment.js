import { Text, View, StyleSheet } from "react-native";

export default function Payment() { //criar os itens do menu
    return(
        <View style={styles.container}>
            <Text>Pagamentos</Text>
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
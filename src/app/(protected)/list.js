import { Text, View, StyleSheet } from "react-native";

export default function List() { //criar os itens do menu
    return(
        <View style={styles.container}>
            <Text>Listagem</Text>
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
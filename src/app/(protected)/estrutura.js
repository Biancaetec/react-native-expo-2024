//caso ele mexa no list, duplique essa pagina e renomeia o list para hidratante e  cria novamente o arquivo list que estara em branco e executa a comanda da aula
import { Text, View, StyleSheet } from "react-native";

export default function Estrutura() { //criar os itens do menu 
    return(
        <View style={styles.container}>
            <Text >
                estrutura das paginas index e list                
            </Text>
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
  
  
  
  });
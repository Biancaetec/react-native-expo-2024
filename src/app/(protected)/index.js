import { View, StyleSheet } from "react-native";
import { Banner } from "../../components/Banner";

export default function Home() { 
    return(
        <View style={styles.container}>
            <Banner />
        </View> 
    );
}

const styles = StyleSheet.create({ // eu estilizei a cor da pagina principal
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
  
  });
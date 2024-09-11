import { View, StyleSheet } from "react-native";
import { Banner } from "../../components/Banner";

export default function Home() { 
    return(
        <View style={styles.container}>
            <Banner />
        </View> 
    );
}

const styles = StyleSheet.create({ // eu estilizei a pagina
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
  
  });
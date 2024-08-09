import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from "../hooks/Auth";
{/*Desenvolver a pagina inicial*/}
export default function App() { 
  const { signIn, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo está pronto para usar.</Text>
      <Button title="Signin" 
      onPress={() => 
        signIn({ email: "super@gmail.com", password: "Super123!" })
      }
      />
      <Button title="Signout" onPress={() => signOut()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "MontserratLight",
    fontSize: 20,
  },
});

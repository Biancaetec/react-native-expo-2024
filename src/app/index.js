import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";
{/*Desenvolver a pagina inicial*/ }
export default function App() {
  const { signIn, signOut } = useAuth();

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email: "Super@email.com", password: "A123456a!" })
      // router.replace("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo está pronto para usar.</Text>
      <Button title="Signin Super" onPress={handleEntrarSuper} />
      <Button title="Signin Adm"
        onPress={() =>
          signIn({ email: "Adm@email.com", password: "A123456a!" })
        }
      />
      <Button title="Signin User"
        onPress={() =>
          signIn({ email: "User@email.com", password: "A123456a!" })
        }
      />
      <Button title="Sobre" onPress={() => router.push("/about")} />
      <Button title="Sair do Aplicativo"
        onPress={() => BackHandler.exitApp()}
      />
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
    gap: 15,
  },
  title: {
    fontFamily: "OpenSansMedium",
    fontSize: 20,
  }
});

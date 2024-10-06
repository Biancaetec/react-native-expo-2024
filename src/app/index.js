import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, TextInput, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';

export default function App() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleEntrarSuper = async () => {
    try {
      await signIn({ email, password });
      router.replace("/");
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoSobre} onPress={() => router.push("/about")}>
        <Text style={styles.botaoSobreTexto}>Sobre</Text>
      </TouchableOpacity>
      <View style={styles.retangulo}>
        <Image
          source={{ uri: 'https://www.github.com/biancaetec.png' }}
          style={styles.imagem}
        />
        <View style={styles.inputContainer}>
          <Ionicons name="mail-open-outline" size={20} color="#8B004C" />
          <TextInput
            style={styles.emailinput}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#8B004C" />
          <TextInput
            style={styles.emailinput}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={passwordVisibility}
          />
          <Ionicons
            name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#8B004C"
            onPress={togglePasswordVisibility}
          />
        </View>
        {/* Adicionei uma margem superior para mover o botão Entrar mais para baixo */}
        <TouchableOpacity style={styles.botao1} onPress={handleEntrarSuper}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>
        {/* Mover a saída do aplicativo mais para baixo também */}
        <TouchableOpacity style={styles.botao3} onPress={() => BackHandler.exitApp()}>
          <Text style={styles.botaoTexto3}>Sair do Aplicativo</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7', 
  },
  retangulo: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    width: "90%",
    padding: 20,
    alignItems: 'center',
    shadowRadius: 4,
    elevation: 5,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 9,
    marginVertical: 10,
    backgroundColor: '#f9f9f9', 
  },
  emailinput: {
    flex: 1,
    fontFamily: "OpenSansMedium",
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  botao1: {
    width: "100%",
    backgroundColor: '#8B004C',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 60, // Aumente a margem superior para mover mais para baixo
  },
  botao3: {
    width: "100%",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 1, // Aumente a margem superior para mover mais para baixo
  },
  botaoTexto3: {
    color: '#8B004C',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoTexto: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoSobre: {
    position: 'absolute',
    top: 33,
    right: 20,
    backgroundColor: 'transparent',
  },
  botaoSobreTexto: {
    fontSize: 16,
    color: '#8B004C',
    fontWeight: 'bold',
  },
});

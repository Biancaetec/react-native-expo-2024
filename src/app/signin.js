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
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoSobre} onPress={() => router.push("about")}>
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
        <TouchableOpacity style={styles.botao1} onPress={handleEntrarSuper}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>
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
    marginTop: 100,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    width: "95%",
    height: "70%",
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
    marginTop: 20,
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
    height: 50,
    backgroundColor: '#8B004C',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 70, 
  },
  botao3: {
    width: "100%",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 1, 
  },
  botaoTexto3: {
    color: '#8B004C',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: "RobotoRegular",

  },
  botaoTexto: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: "RobotoRegular",

  },
  botaoSobre: {
    position: 'absolute',
    top: 50,
    right: 25,
    backgroundColor: 'transparent',
  },
  botaoSobreTexto: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
    fontFamily: "RobotoRegular",
    backgroundColor: '#8B004C',
    width: 70,
    height: 30,
    borderRadius: 10,
    textAlign: 'center',
    paddingVertical: 4,

    
  },
});

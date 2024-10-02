import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, StyleSheet, TextInput, Text, View, Alert, Image } from 'react-native';
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
      <View style={styles.retangulo}>
        <Image
          source={{ uri: 'https://www.github.com/biancaetec.png' }}
          style={styles.imagem}
        />

        <View style={styles.input1}>
          <Ionicons name="mail-open-outline" size={20} color="black" />
          <TextInput
            style={styles.emailinput}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.input2}>
          <Ionicons name="lock-closed-outline" size={20} color="black" />
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
            color="black"
            onPress={togglePasswordVisibility}
          />
        </View>
     <View style={styles.botao1}>
        <Button
          title="Entrar"
          onPress={handleEntrarSuper}
          
        />
      </View>

      <View style={styles.botao2}>
        <Button
          title="Sobre"
          onPress={() => router.push("/about")}
          
        />
       </View> 

       <View style={styles.botao3}>
        <Button
          title="Sair do Aplicativo"
          onPress={() => BackHandler.exitApp()}
          
        />
       </View>
 
      
  </View>    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  retangulo: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: "90%",
    height: "64%",
    padding: 20,
    alignItems: 'center',
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  input1: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    alignItems: "center",
    width: "100%", 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10, 
    padding: 10,
    marginTop: '15%',
  },
  input2: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10, 
    padding: 10,
    marginBottom: 60,
  },
  emailinput: {
    flex: 1,
    fontFamily: "OpenSansMedium",
    fontSize: 19,
  },
  botao1: {
    width: "100%",
    borderRadius: 20,
    paddingBottom: 10,
  },
  botao2: {
    width: "100%",
    borderRadius: 8,
    paddingBottom: 10,
  },
  botao3: {
    width: "100%",
    borderRadius: 8,
    paddingBottom: 10,
    
  },
});

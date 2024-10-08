import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useAuth } from "../../hooks/Auth/index";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

export default function Perfil() {
    const { user, signOut } = useAuth();
    const navigation = useNavigation();

    const [email, setEmail] = useState(user?.email || "super@email.com");
    const [password, setPassword] = useState("A123456a!");
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    const handlesair = () => {
        signOut();
        navigation.navigate('index'); 
    };

    const handleeditar = () => {
        setIsEditing(!isEditing);
    };

    return (
        <View style={styles.container}>
            <View style={styles.principal}>
                <TouchableOpacity onPress={handleeditar} style={styles.botaoeditar}>
                    <Ionicons name="pencil-outline" size={24} color="#8B004C" />
                </TouchableOpacity>
<Image  source={{uri: 'src/assets/images/fundo perfil.jpg'}} style={styles.imagemfundo}/>


                <Image
                    source={{ uri: 'https://www.github.com/biancaetec.png' }}
                    style={styles.imagem}
                />
                <Text style={styles.titulo}>{user?.user?.nome}</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="mail-open-outline" size={20} color="#8B004C" />
                    <TextInput
                        style={styles.emailinput}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                        editable={isEditing}
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
                        editable={isEditing}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Ionicons
                            name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
                            size={20}
                            color="#8B004C"
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handlesair} style={styles.botaosair}>
                    <Text style={styles.botaoTexto}>Deslogar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    principal: {
        backgroundColor: "#f1f1f1", 
        width: "95%",
        padding: 20,
        borderRadius: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
        position: 'relative', 
    },
    botaoeditar: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        elevation: 3, 
    },
    imagem: {
        width: 100, 
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 3, 
        borderColor: '#000',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: '#ffffff', 
        marginVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
    emailinput: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: '#333',
    },
    botaosair: {
        backgroundColor: '#8B004C',
        padding: 14, 
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    botaoTexto: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18, 
    },
});

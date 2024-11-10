import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from "react-native";
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
        navigation.navigate('signin'); 
    };

    const handleeditar = () => {
        setIsEditing(!isEditing);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.principal}>
                <TouchableOpacity onPress={handleeditar} style={styles.botaoeditar}>
                    <Text style={styles.editarsalvar}>{isEditing ? "Salvar" : "Editar"}</Text>
                </TouchableOpacity>
                <Image source={{ uri: 'src/assets/images/fundo perfil.jpg' }} style={styles.imagemfundo} />

                <Image
                    source={{ uri: 'https://www.github.com/biancaetec.png' }}
                    style={styles.imagem}
                />
                <Text style={styles.titulo}>{user?.user?.nome}</Text>
                
                <View style={styles.inputContainer1}>
                    <Ionicons name="mail-open-outline" size={20} color="#000" />
                    <TextInput
                        style={styles.emailinput}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                        editable={isEditing}
                    />
                </View>
                
                <View style={styles.inputContainer2}>
                    <Ionicons name="lock-closed-outline" size={20} color="#000" />
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
                            color="#000"
                        />
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity onPress={handlesair} style={styles.botaosair}>
                    <Text style={styles.botaoTexto}>Deslogar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    principal: {
        backgroundColor: "#ffffff", 
        width: "98%",
        height: "80%",
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
        marginTop: "150%",
        height: 40,
        width: "99%",
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#eee',
        elevation: 3, 
    },
    editarsalvar: {
        color: '#007bfc',
        fontWeight: 'bold',
        marginRight: 5,
        textAlign: 'center',
    },
    imagem: {
        width: 100, 
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    inputContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: '#ffffff', 
        marginVertical: 8,
        paddingHorizontal: 10,
        marginTop: "10%",
        width: '100%',
    },
    inputContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: '#ffffff', 
        marginVertical: 8,
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
        backgroundColor: '#007bfc',
        padding: 14, 
        borderRadius: 12,
        alignItems: 'center',
        width: '100%',
        marginTop: "52%",
    },
    botaoTexto: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 18, 
        fontFamily: 'RobotoRegular',
    },
});

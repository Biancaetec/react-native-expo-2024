import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useAuth } from "../../hooks/Auth/index";
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
    const { user, signOut } = useAuth();
    const navigation = useNavigation();

    const handleLogout = () => {
        signOut();
        navigation.navigate('index'); 
    };

    return (
        <View style={styles.container}>
            <View style={styles.principal}>
                <Image
                    source={{
                        uri: 'https://www.github.com/biancaetec.png', 
                    }}
                    style={styles.imagem}
                />
                <Text style={styles.titulo}>
                    {user?.user?.nome}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="super@email.com"
                    
                    value={user?.email}
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value="A123456a!"
                    editable={false}
                />
                <TouchableOpacity onPress={handleLogout} style={styles.botao}>
                    <Text style={styles.botaoTexto}>Deslogar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    principal: {
        backgroundColor: "#ffffff",
        width: "95%",
        padding: 30, 
        borderRadius: 15,
        elevation: 5,
    },
    imagem: {
        width: 100, 
        height: 100,
        borderRadius: 65,
        marginBottom: 20,
        borderWidth: 3, 
        borderColor: '#d40851',
        alignSelf: 'center',
    },
    titulo: {
        fontSize: 26, 
        fontWeight: 'bold', 
        marginBottom: 15,
        textAlign: "center",
        fontFamily: "OpenSansMedium",
        color: '#333',
    },
    input: {
        width: '100%',
        padding: 10, 
        marginVertical: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        fontSize: 18,
    },
    botao: {
        backgroundColor: '#1c75fa',
        padding: 14, 
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        marginTop: 15,
    },
    botaoTexto: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18, 
    },
});
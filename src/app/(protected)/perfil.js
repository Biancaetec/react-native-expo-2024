import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Platform, ScrollView } from "react-native";
import { useAuth } from "../../hooks/Auth/index";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { useCart } from '../../hooks/Cart';

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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image source={{ uri: 'src/assets/images/fundo perfil.jpg' }} style={styles.imagemfundo} />
        
            <Image
                source={{ uri: 'https://www.github.com/biancaetec.png' }}
                style={styles.imagem}
            />
            <Text style={styles.nome}>{user?.user?.nome}</Text>
        
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
        
            <View style={styles.containerbotaoeditar}>
                <TouchableOpacity onPress={handleeditar} style={styles.botaoeditar}>
                    <Text style={styles.textoeditar}>{isEditing ? "Salvar" : "Editar"}</Text>
                </TouchableOpacity>
            </View>
        
            <View style={styles.linha} />
        
            <TouchableOpacity onPress={handlesair} style={styles.botaodeslogar}>
                <Text style={styles.textodeslogar}>Deslogar</Text>
            </TouchableOpacity>
        
            <View>
                <Text style={styles.minhascompras}>Minhas Compras</Text>
            </View>
        
            {/* ScrollView Horizontal */}
            <ScrollView
                horizontal={true}
                style={styles.scrollViewHorizontal}
                contentContainerStyle={styles.scrollContentContainer}
            >
                <View style={styles.imagemContainer}>
                    <Image
                        source={require('../../assets/images/lan3sabbarra.png')}
                        style={styles.imagemItem}
                    />
                    <Image
                        source={require('../../assets/images/produto4-kitesfoliante.png')}
                        style={styles.imagemItem}
                    />
                    <Image
                        source={require('../../assets/images/lan4perfume2.png')}
                        style={styles.imagemItem}
                    />
                    <Image
                        source={require('../../assets/images/sabonete1.png')}
                        style={styles.imagemItem}
                    />
                </View>
            </ScrollView>

            {/* Linha abaixo das imagens */}
            <View style={styles.linha2} />
            <View>
                <Text style={styles.textopagamento}>Confira algumas vendas</Text>
            </View>
        
        </ScrollView>
    );
}


const styles = StyleSheet.create({

    scrollContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    nome: {
        fontSize: 22,
        fontWeight: '500',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
        marginTop: "-30%",
        marginLeft: "-8%",
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
        width: '100%',
        marginTop: "30%",
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
    },    containerbotaoeditar: {
        width: '100%',
        alignItems: 'flex-end',
        marginTop: "-66%",
    },
    botaoeditar: {
        height: 40,
        width: "29%",
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#ffff',
        elevation: 3,
    },
    textoeditar: {
        color: '#007bfc',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    botaodeslogar: {
        backgroundColor: '#007bfc',
        padding: 8,
        borderRadius: 12,
        alignItems: 'center',
        width: '34%',
        marginTop: "-76%",
        marginLeft: "33%",
    },
    textodeslogar: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 16,
    },
  
    linha: {
        height: 1,
        backgroundColor: '#000',
        alignSelf: 'stretch',
        marginVertical: 10,
        marginTop: "60%",
    },

    minhascompras: {
        marginTop: "67%",
        textAlign: 'center',
        fontFamily: 'MontserratLight',
        fontWeight: '500',
        fontSize: 18,
    },
    scrollViewHorizontal: {
        marginTop: "3%", 
        backgroundColor: '#ffffff',
        height: 200,
    },
    scrollContentContainer: {
        flexDirection: 'row', 
        height: 100,
    
    },
    imagemContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    imagemItem: {
        height: 130,
        width: 140,
        position: 'relative', 
    },

    imagemfundo: {
        position: 'absolute',
        width: '130%',
        height: '130%',
    },
    linha2: {
        height: 1,
        backgroundColor: '#000',
        alignSelf: 'stretch',
        marginVertical: 10,
        marginTop: "-60%",
        zIndex: 1,
        position: 'absolute',
    },

    textopagamento: {
        marginTop: "-60%",
        textAlign: 'center',
        fontFamily: 'MontserratLight',
        fontWeight: '500',
        fontSize: 18,
    },
});

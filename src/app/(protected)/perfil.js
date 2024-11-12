import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Platform, ScrollView } from "react-native";
import { useAuth } from "../../hooks/Auth/index";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { useCart } from '../../hooks/Cart';
import { router } from 'expo-router';

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
        <ScrollView contentContainerStyle={[styles.scrollContainer, {  paddingBottom: 120, backgroundColor: '#ffffff', paddingBottom: 20, }]}>
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
                        style={styles.imagemItem3}
                    />
                    <Image
                        source={require('../../assets/images/sabonete1.png')}
                        style={styles.imagemItem4}
                    />
                    <Image
                        source={require('../../assets/images/hidratante.png')}
                        style={styles.imagemItem5}
                    />
                </View>
            </ScrollView>

            {/* Linha abaixo das imagens */}
            <View style={styles.linha2} />
        
            <View>
                <Text style={styles.textocupon}>Cupons disponíveis</Text>
            </View>
            <TouchableOpacity style={styles.containercupon1} onPress={() => router.push("/geral")}>
            <View style={styles.cupon1}>
                <Text style={styles.titulo}>R$ 5 na primeira compra</Text>
                <View style={styles.detalhe1}>
                     <Text style={styles.subtitulo1}>Pedido min. R$ 50</Text>
                </View>
                <Text style={styles.inspiraem1}>Acaba em 12h 35min</Text>
                <Text style={styles.usar1}>Usar</Text>
                <Image source={require('../../assets/images/cupon.webp')} style={{width: 60, height: 60, marginTop: "-22%", marginLeft: "1%"}}/>
            </View>
            </TouchableOpacity>
            {/* cupon 2 */}
            <TouchableOpacity style={styles.containercupon2} onPress={() => router.push("/maisvendidos")}>
            <View style={styles.cupon2}>
                <Text style={styles.titulo2}>R$ 2 categoria "Mais Vendidos"</Text>
                <View style={styles.detalhe2}>
                     <Text style={styles.subtitulo2}>Pedido min. R$ 20</Text>
                </View>
                <Text style={styles.inspiraem2}>Acaba em 2h 25min</Text>
                <Text style={styles.usar2}>Usar</Text>
                <Image source={require('../../assets/images/cupon.webp')} style={{width: 60, height: 60, marginTop: "-22%", marginLeft: "5%"}}/>
            </View>
            </TouchableOpacity>
        
        </ScrollView>
    );
}


const styles = StyleSheet.create({

    scrollContainer: {
        flexGrow: 1,
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
        position: 'static',
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
        marginTop: "20%",
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
        height: 35,
        width: "29%",
        paddingTop: 5,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#ffff',
        elevation: 3,
        position: 'absolute',
        marginTop: "8%",
    },
    textoeditar: {
        color: '#007bfc',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    botaodeslogar: {
        backgroundColor: '#007bfc',
        paddingTop: 5,
        borderRadius: 8,
        alignItems: 'center',
        width: '34%',
        height: 35,
        marginTop: "-76%",
        marginLeft: "40%",
        position: 'absolute',
        marginTop: "19%",
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
        marginTop: "69%",
    },

    minhascompras: {
        marginTop: "1%",
        textAlign: 'left',
        fontFamily: 'RobotoRegular',
        fontSize: 19,
    },
    scrollViewHorizontal: {
        marginTop: "-1%", 
        backgroundColor: '#ffffff',
        width: '107%',
    },
    scrollContentContainer: {
        flexDirection: 'row', 
        height: 110,
        marginLeft: "-5%",
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
    imagemItem3: {
        height: 130,
        width: 140,
        position: 'relative',
        marginLeft: "-10%",
    },
    imagemItem4: {
        height: 144,
        width: 144,
        position: 'relative',
        marginLeft: "-10%",
    },
    imagemItem5: {
        height: 174,
        width: 144,
        position: 'relative',
        marginLeft: "-10%",
        marginTop: "3%",
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

    textocupon: {
        marginTop: "-82%",
        textAlign: 'center',
        fontFamily: 'RobotoRegular',
        fontWeight: '500',
        fontSize: 19,
    },
    containercupon1: {
        marginTop: "145%",
        marginLeft: "5%",
        borderColor: '#ddd',
        borderWidth: 2,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        width: '101%',
        height: 110,
        position: 'absolute',
        
    },
    cupon1: {
        marginTop: "2%",
        marginLeft: "5%",
       
    },
    titulo: {
        marginTop: "2%",
        marginLeft: "27%",
        fontSize: 18,
        fontFamily: 'RobotoMedium',
        fontWeight: '500',
    },
    detalhe1: {
        marginLeft: "26%",
        marginTop: "2%",
        width: '35%',
        height: 23,
        borderRadius: 35,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    subtitulo1: {
        fontSize: 12,
        color: '#757674',
        fontWeight: '600',
        paddingLeft: 10,
    },
    inspiraem1: {
        marginTop: "3%",
        marginLeft: "27%",
        fontSize: 13,
        color: '#9f9f9f',
    },
    usar1: {
        marginTop: "-6%",
        marginLeft: "80%",
        fontSize: 15,
        color: '#ac0c24',
        fontWeight: 'bold',
    },
    containercupon2: {
        marginTop: "182%",
        marginLeft: "5%",
        borderColor: '#ddd',
        borderWidth: 2,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        width: '101%',
        height: 110,
        position: 'absolute',
    },
    titulo2: {
        marginTop: "1%",
        marginLeft: "30%",
        fontSize: 18,
        fontFamily: 'RobotoMedium',
        fontWeight: '500',
    },
    detalhe2: {
        marginLeft: "29%",
        marginTop: "1%",
        width: '35%',
        height: 23,
        borderRadius: 35,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    subtitulo2: {
        fontSize: 12,
        color: '#757674',
        fontWeight: '600',
        paddingLeft: 10,
    },
    inspiraem2: {
        marginTop: "2%",
        marginLeft: "30%",
        fontSize: 13,
        color: '#9f9f9f',
    },
    usar2: {
        marginTop: "-6%",
        marginLeft: "80%",
        fontSize: 15,
        color: '#ac0c24',
        fontWeight: 'bold',
    },
});
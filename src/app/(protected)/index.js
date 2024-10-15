import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { Banner } from "../../components/Banner";
import { router } from "expo-router";
import { useCart } from '../../hooks/Cart';
import { Alert } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from '@expo/vector-icons';
import { Banner2 } from "../../components/Banner2";


export default function Promocao() {
    const { addCart } = useCart();
    
    const addCart1 = () => {
        const imagem = require('../../../src/assets/images/sabonete1.png');
        const nomeProduto = "Sabonete Líquido cereja";
        const especificacao = "Com uma incrível fragância de cereja, disponível em 250ml.";
        const preco = "29.90";
        addCart({ 
            id: 1, 
            imagemproduto: imagem,
            name: nomeProduto, 
            especificacaoproduto: especificacao, 
            precoproduto: preco,
            quantity: 1 
        });
        Alert.alert("Sabonete adicionado!");
    };

    const addCart2 = () => {
        const imagem = require('../../../src/assets/images/sabonete2.png');
        const nomeProduto = "Sabonete Líquido baunilha";
        const especificacao = "Com aroma de baunilha, disponível em 200ml.";
        const preco = "49.90"; 
        addCart({ 
            id: 2, 
            imagemproduto: imagem,
            name: nomeProduto, 
            especificacaoproduto: especificacao,
            precoproduto: preco,
            quantity: 1 
        });
        Alert.alert("Sabonete adicionado!");
    };

    const addCart3 = () => {
        const imagem = require('../../../src/assets/images/hidratante.png');
        const nomeProduto = "Hidratante Corporal";
        const especificacao = "Delicada fragrância de cereja e lavanda. Disponível em embalagem de 200ml.";
        const preco = "29.90";
        addCart({ 
            id: 3, 
            imagemproduto: imagem,
            name: nomeProduto, 
            especificacaoproduto: especificacao, 
            precoproduto: preco,
            quantity: 1 
        });
        Alert.alert("Hidratante adicionado!");
    };

    const saibamaisalert = () => {
        Alert.alert(
            "Em breve",
            "Todas as informações destes produtos estarão disponíveis em breve!",

        );
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
             <View style={styles.containerpesquisa}>
                <TextInput
                    style={styles.pesquisar}
                    placeholder="Buscar produtos"
                    keyboardType="default"
                />
                <AntDesign name="search1" size={18} color="black" style={styles.iconepesquisa} />
            </View>

            <Banner style={styles.banner} />
            <Text style={styles.titulo}>Categorias</Text>
            <View style={styles.containerveja}>
            <Text style={styles.subtitulo}>Veja todas</Text>
            <AntDesign name="arrowright" size={14} color="#ac0c24" style={styles.icone} />
            </View>

            <View style={styles.links}>

            <TouchableOpacity style={styles.link}
                    onPress={() => router.push("index")}>
                <Text style={styles.textolink}>Todos</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.link1}
                    onPress={() => router.push("sabonete")}>
                <Text style={styles.textolink1}>Sabonete</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link2}
                    onPress={() => router.push("list")}>
                <Text style={styles.textolink2}>Hidratante</Text>
                 </TouchableOpacity>
            </View>
        

            <View style={styles.produtoContainer}>
                <View style={styles.containerproduto1}>
                    <View style={styles.containerimagem}>
                        <Image
                            source={require('../../../src/assets/images/sabonete1.png')}
                            style={styles.imagem}
                        />
                    </View>
                    <View style={styles.containerpromocao1}>
                        <Text style={styles.promocao1}>Promoção</Text>
                    </View>
                    <View style={styles.informacoes}>
                        <Text style={styles.marca}>CHARMM</Text>
                        <Text style={styles.nomeProduto}>Sabonete Líquido</Text>
                        <Text style={styles.especificacao}>
                            Com uma incrível fragância de cereja.
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.preco}>R$ 29,90</Text>

                           <TouchableOpacity onPress={addCart1} style={{ padding: 20 }}>
                            <MaterialCommunityIcons name="cart-heart" size={20} color="#3baf2c" />
                           </TouchableOpacity>

                        </View>
                    </View>

                </View>

                <View style={styles.containerproduto2}>
                    <View style={styles.containerimagem}>
                        <Image
                            source={require('../../../src/assets/images/sabonete2.png')}
                            style={styles.imagem2}
                        />
                    </View>
                    <View style={styles.informacoes2}>
                        <Text style={styles.marca2}>CHARMM</Text>
                        <Text style={styles.nomeProduto2}>Sabonete Líquido</Text>
                        <Text style={styles.especificacao2}>
                            Com aroma de baunilha disponível em 200ml.
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.preco}>R$ 49,90</Text>
                            <TouchableOpacity onPress={addCart2} style={{ padding: 20 }}>
                                <MaterialCommunityIcons name="cart-heart" size={20} color="#3baf2c" />
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </View>

            <View style={styles.containerproduto3}>
                <View style={styles.containerimagem}>
                    <Image
                        source={require('../../../src/assets/images/hidratante.png')}
                        style={styles.imagem3}
                    />
                </View>
                <View style={styles.informacoes3}>
                    <View style={styles.containerpromocao3}>
                        <Text style={styles.promocao3}>Promoção</Text>
                    </View>
                    <Text style={styles.marca3}>CHARMM</Text>
                    <Text style={styles.nomeProduto3}>Hidratante Corporal</Text>
                    <Text style={styles.especificacao3}>
                        Hidratação intensa, e uma delicada fragrância de cereja e lavanda. 
                    </Text>
                    <Text style={styles.preco3}>R$ 29,90</Text>
                    <TouchableOpacity onPress={addCart3} style={{ padding: 20, marginTop: "-24%", marginLeft: "64%"}}>
                                <MaterialCommunityIcons name="cart-heart" size={20} color="#3baf2c" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerembreve}>
                <Text style={styles.tituloembreve}>
                    Em breve
                </Text>

            <View style={styles.banner2} />
                <Banner2 />
            <View style={styles.embreve1}>
            <View style={styles.imgembreve1}>
                    <Image
                        source={require('../../../src/assets/images/esfoliante1.png')}
                        style={styles.img1}
                    />
                </View>
                <View style={styles.infembreve1}>
                   
                    <Text style={styles.marcaembreve1}>EKOS</Text>
                    <Text style={styles.nomeembreve1}>Sabonete esfoliante</Text>
                    <Text style={styles.espembreve1}>
                        Sabonete em barra vegetal com esfoliante natural de semente de damasco. 
                    </Text>
                   </View>
                </View>

                <View style={styles.embreve2}>
            <View style={styles.imgembreve2}>
                    <Image
                        source={require('../../../src/assets/images/perfume1.png')}
                        style={styles.img2}
                    />
                </View>
                <View style={styles.infembreve2}>
                   
                    <Text style={styles.marcaembreve2}>EKOS</Text>
                    <Text style={styles.nomeembreve2}>Perfume</Text>
                    <Text style={styles.espembreve2}>
                        Perfume com aroma fresco e envolvente.                    
                    </Text>
                    
                </View>
                </View>

                <TouchableOpacity style={styles.saibamais} onPress={saibamaisalert}>
                    <Text style={styles.saibamaisText}>Saiba mais</Text>
                </TouchableOpacity>
                
        </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: "5%",
        paddingBottom: "19%",
    },
containerpesquisa: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 8,
        marginTop: 20,        
        marginBottom: 10,
    },
    pesquisar: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 14,
    },
    iconepesquisa: {
        marginLeft: 6,
    },
    banner: {
        width: '100%',
        height: '100%',
    },
    titulo: {
        fontSize: 19,
        fontWeight: "600",
        marginTop: "87%",
        marginLeft: "7%",
        width: "100%",
        position: "absolute",
    },
    containerveja: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: "91%",
        marginLeft: "7%",
        width: "100%",
        position: "absolute",
        paddingHorizontal: "8%", 
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: "400",
        marginLeft: "82%",
        width: "100%",
        position: "absolute",
        color: '#ac0c24',

    },
    icone: {
        marginLeft: "112%",
        position: "absolute",
    },
    links: {
        flexDirection: 'row',
        marginTop: "100%",
        marginLeft: "39%",
        width: "100%",
        justifyContent: 'space-between',
        position: "absolute",
    },
    link: {
        marginLeft: "-33%",
        paddingHorizontal: 30,
        height: 36,
        borderRadius: 8,
        position: "absolute",
        backgroundColor: '#ac0c24',
    },
    textolink: {
        marginTop: 8,
        color: "white",
        fontSize: 15,
        fontFamily: "RobotoRegular",
    },
    link1: {
        paddingHorizontal: 20,
        height: 36,
        borderRadius: 8,
        position: "absolute",
        borderColor: '#ac0c24',
        borderWidth: 1,   
    },
    textolink1: {
        marginTop: 8,
        color: "black",
        fontSize: 15,
        fontFamily: "RobotoRegular",
    },
    link2: {
        marginLeft: "35%",
        paddingHorizontal: 18,
        height: 36,
        borderRadius: 8,
        position: "absolute",
        borderColor: '#ac0c24',
        borderWidth: 1,

    },
    textolink2: {
        marginTop: 8,
        color: "black",
        fontSize: 15,
        fontFamily: "RobotoRegular",
    },
    produtoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '42%',
    },
    containerproduto1: {
        width: '49%',
    },
    containerproduto2: {
        width: '52%',
        marginLeft: "6%",
    },
    containerimagem: {
        backgroundColor: "#eee",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
    },
    imagem: {
        width: '210%',
        height: '210%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "-10%",
    },
    imagem2: {
        width: '210%',
        height: '210%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "10%",
    },
    containerpromocao1: {
        backgroundColor: '#3baf2c',
        borderRadius: 20,
        width: 90,
        height: 22,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        marginTop: "3%",
        marginLeft: "2%"
    },
    promocao1: {
        color: "#fff",
    },
    informacoes: {
        marginTop: "2%",
    },
    informacoes2: {
        marginTop: "2%",
    },
    marca: {
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    marca2: {
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomeProduto: {
        fontSize: 15,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomeProduto2: {
        fontSize: 15,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    especificacao: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 7,
    },
    especificacao2: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 7,
    },
    preco: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: '#000',
        fontWeight: '700',
        flex: 1
    },
    preco2: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: '#000',
        fontWeight: '700',
    },

    // produto 3
    containerproduto3: {
        width: '48%',
        marginTop: '10%',
    },

    imagem3: {
        width: '230%',
        height: '230%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "-6%",
        marginTop: '16%',

    },

    containerpromocao3: {
        backgroundColor: '#3baf2c',
        borderRadius: 20,
        width: 90,
        height: 22,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        marginTop: "-93%",
        left: 3,
    },
    promocao3: {
        color: "#fff",
    },
    informacoes3: {
        marginTop: "3%",

    },
    marca3: {
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomeProduto3: {
        fontSize: 15,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    especificacao3: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 20,
    },
    preco3: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: '#000',
        fontWeight: '700',
    },
    // em breve
    containerembreve: {
        marginTop: "10%",
        height: 690,
    },
    tituloembreve: {  
        fontSize: 22,
        marginTop: "10%",
        textAlign: "center",        
        width: "100%",
        position: "absolute",
        marginBottom: "20%",
        fontFamily: "RobotoRegular",
    },
    banner2: { 
        marginTop: "-35%",
        width: '100%',
        height: 200,
    },
    embreve1: {
        backgroundColor: "#eee",
        width: '48%',
        height: 250,
        borderRadius: 10,
        marginTop: '15%',
    },
    imgembreve1: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        marginTop: "-12%",
    },
    img1: {
        width: '215%',
        height: '215%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "10%",
    },
    infembreve1: {
        marginTop: "-7%",
        marginLeft: "3%",
    },
    marcaembreve1: {
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomeembreve1: {
        fontSize: 15,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    espembreve1: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 7,
    },

    embreve2: {
        backgroundColor: "#eee",
        width: '48%',
        height: 250,
        borderRadius: 10,
        marginTop: '-74%',
        marginLeft: "52%",
        marginBottom: "20%",
    },
    imgembreve2: {
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 160,
        marginTop: "-12%",
    },
    img2: {
        width: '219%',
        height: '219%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "2%",
    },
    infembreve2: {
        marginTop: "-7%",
        marginLeft: "3%",
    },
    marcaembreve2: {
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomeembreve2: {
        fontSize: 15,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    espembreve2: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
    },
    saibamais: {
        backgroundColor: '#ac0c24',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "210%",
        marginLeft: "36%",
        marginBottom: "20%",
        position: "absolute",
    },
    saibamaisText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'RobotoRegular',
    },
    
});

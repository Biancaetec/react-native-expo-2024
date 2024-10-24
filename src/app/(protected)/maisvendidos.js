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
    
// referente: sabonete baunilha
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
        Alert.alert("Produto adicionado!");
    };

// referente: hidratante cereja
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
        Alert.alert("Produto adicionado!");
    };

// referente aos lancamentos: sabonete esfoliante
    const addCart5 = () => {
        const imagem = require('../../../src/assets/images/lan1esfoliante.png');
        const nomeProduto = "Sabonete esfoliante";
        const especificacao = "Sabonete vegetal com esfoliante natural.";
        const preco = "79.90";
        addCart({ 
            id: 5, 
            imagemproduto: imagem,
            name: nomeProduto, 
            especificacaoproduto: especificacao, 
            precoproduto: preco,
            quantity: 1 
        });
        Alert.alert("Produto adicionado!");
    };

// referente aos lancamentos: perfume 1
    const addCart6 = () => {
        const imagem = require('../../../src/assets/images/lan2perfume.png');
        const nomeProduto = "Perfume";
        const especificacao = "Perfume com aroma fresco e envolvente.";
        const preco = "59.90";
        addCart({ 
            id: 6, 
            imagemproduto: imagem,
            name: nomeProduto, 
            especificacaoproduto: especificacao, 
            precoproduto: preco,
            quantity: 1 
        });
        Alert.alert("Produto adicionado!");
    };

    // referente aos lancamentos: sabonete em barra 2
    const addCart7 = () => {
        const imagem = require('../../../src/assets/images/lan3sabbarra.png');
        const nomeProduto = "Sabonete em barra";
        const especificacao = "Sabonete vegetal de castanha";
        const preco = "10.90";
        addCart({ 
            id: 7, 
            imagemproduto: imagem,
            name: nomeProduto, 
            especificacaoproduto: especificacao, 
            precoproduto: preco,
            quantity: 1 
        });
        Alert.alert("Produto adicionado!");
    };

     // referente aos lancamentos: perfume masculino
     const addCart8 = () => {
        const imagem = require('../../../src/assets/images/lan4perfume2.png');
        const nomeProduto = "Perfume Masculino";
        const especificacao = "Perfume essencial único 90 ml.";
        const preco = "129.90";
        addCart({ 
            id: 8, 
            imagemproduto: imagem,
            name: nomeProduto, 
            especificacaoproduto: especificacao, 
            precoproduto: preco,
            quantity: 1 
        });
        Alert.alert("Produto adicionado!");
    };


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

            <Text style={styles.titulo}>Confira os produtos mais vendidos: </Text>

            <View style={styles.produtoContainer}>
            


                <View style={styles.containerproduto2}>
                    {/* sabonete baunilha */}
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


            <View style={styles.produtoContainer2}>
                    {/* hidratante */}
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
                        Hidratação intensa, com um frescor de cereja e lavanda. 
                    </Text>
                    <Text style={styles.preco3}>R$ 29,90</Text>
                    <TouchableOpacity onPress={addCart3} style={{ padding: 20, marginTop: "-24%", marginLeft: "64%"}}>
                    <MaterialCommunityIcons name="cart-heart" size={20} color="#3baf2c" />
                    </TouchableOpacity>
                </View>
            </View>

              
            </View>
            <View style={styles.containerlancamento}>

            {/* lançamento 2: sabonete esfoliante  */}
            <View style={styles.lancamento1}>
                <View style={styles.contlancamento1}>
                    <Image
                        source={require('../../../src/assets/images/lan1esfoliante.png')}
                        style={styles.img1}
                    />
                </View>
                <View style={styles.inflancamento1}>
                   
                    <Text style={styles.marcalancamento1}>EKOS</Text>
                    <Text style={styles.nomelancamento1}>Sabonete esfoliante</Text>
                    <Text style={styles.esplancamento1}>
                        Sabonete vegetal com esfoliante natural . 
                    </Text>
                    <Text style={styles.preco5}>R$ 79,90</Text>
                    <TouchableOpacity onPress={addCart5} style={{ padding: 20, marginTop: "-24%", marginLeft: "64%"}}>
                                <MaterialCommunityIcons name="cart-heart" size={20} color="#3baf2c" />
                    </TouchableOpacity>
                   </View>
                </View>

            {/* lançamento 2: perfume  */}
                <View style={styles.lancamento2}>
            <View style={styles.contlancamento2}>
                    <Image
                        source={require('../../../src/assets/images/lan2perfume.png')}
                        style={styles.img2}
                    />
                </View>
                <View style={styles.inflancamento2}>
                   
                    <Text style={styles.marcalancamento2}>EKOS</Text>
                    <Text style={styles.nomelancamento2}>Perfume</Text>
                    <Text style={styles.esplancamento2}>
                        Perfume com aroma fresco e envolvente.                    
                    </Text>
                    <Text style={styles.preco6}>R$ 59,90</Text>
                    <TouchableOpacity onPress={addCart6} style={{ padding: 20, marginTop: "-24%", marginLeft: "64%"}}>
                                <MaterialCommunityIcons name="cart-heart" size={20} color="#3baf2c" />
                    </TouchableOpacity>
                </View>
                </View>

                {/* lançamento 3: sabonete em barra  */}
                <View style={styles.lancamento3}>
                <View style={styles.contlancamento3}>
                    <Image
                        source={require('../../../src/assets/images/lan3sabbarra.png')}
                        style={styles.img3}
                    />
                </View>
                <View style={styles.inflancamento3}>
                   
                    <Text style={styles.marcalancamento3}>EKOS</Text>
                    <Text style={styles.nomelancamento3}>Sabonete em barra</Text>
                    <Text style={styles.esplancamento3}>
                    Sabonete vegetal de castanha
                    </Text>
                    <Text style={styles.preco7}>R$ 10,90</Text>
                    <TouchableOpacity onPress={addCart7} style={{ padding: 20, marginTop: "-24%", marginLeft: "64%"}}>
                                <MaterialCommunityIcons name="cart-heart" size={20} color="#3baf2c" />
                    </TouchableOpacity>
                   </View>
                </View>

                {/* lançamento 4: perfume masculino */}
                <View style={styles.lancamento4}>
            <View style={styles.contlancamento4}>
                    <Image
                        source={require('../../../src/assets/images/lan4perfume2.png')}
                        style={styles.img4}
                    />
                </View>
                <View style={styles.inflancamento4}>
                   
                    <Text style={styles.marcalancamento4}>ESSENCIAL</Text>
                    <Text style={styles.nomelancamento4}>Perfume Masculino</Text>
                    <Text style={styles.esplancamento2}>
                        Perfume essencial único 90 ml.                    
                    </Text>
                    <Text style={styles.preco8}>R$ 129,90</Text>
                    <TouchableOpacity onPress={addCart8} style={{ padding: 20, marginTop: "-24%", marginLeft: "64%"}}>
                                <MaterialCommunityIcons name="cart-heart" size={20} color="#3baf2c" />
                    </TouchableOpacity>
                </View>
                </View>

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
   
    titulo: {
        fontSize: 19,
        fontWeight: "600",
        marginTop: "28%",
        textAlign: "justify", 
        marginLeft: "5%",   
        width: "100%",
        position: "absolute",
    },
    produtoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '30%',
    },
    // produto1 
    containerproduto1: {
        width: '48%',
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
    marca: {
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
    especificacao: {
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
    //produto2
    containerproduto2: {
        width: '49%',
        marginLeft: "1%",
    },
    
    imagem2: {
        width: '210%',
        height: '210%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "10%",
    },
   
    informacoes2: {
        marginTop: "2%",
    },
    marca2: {
        fontSize: 12,
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
    especificacao2: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 7,
    },
    preco2: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: '#000',
        fontWeight: '700',
    },

    // 2 ultimos produtos da linha
    produtoContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '3%',
    },

    // produto 3 hidratante
    containerproduto3: {
        width: '48%',
        marginTop: '-93%',
        marginLeft: "52%",
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
    
    // lançamentos: linha 1
    containerlancamento: {
        marginTop: "-3%",
    },
    // lançamento 1: sabonete esfoliante
    lancamento1: {
        width: '48%',
        height: 250,
        borderRadius: 10,
        marginTop: '20%',
    },
    contlancamento1: {
        backgroundColor: "#eee",
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
    inflancamento1: {
        marginTop: "3%",
        marginLeft: "3%",
    },
    marcalancamento1: {
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomelancamento1: {
        fontSize: 15,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    esplancamento1: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 20,
    },
    preco5: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: '#000',
        fontWeight: '700',
    },
    // lançamento 2: perfume
    lancamento2: {
        width: '49%',
        height: 250,
        borderRadius: 10,
        marginTop: '-74%',
        marginLeft: "52%",
        marginBottom: "20%",
    },
    contlancamento2: {
        backgroundColor: "#eee",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        marginTop: "-12%",
    },
    img2: {
        width: '219%',
        height: '219%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "2%",
    },
    inflancamento2: {
        marginTop: "3%",
        marginLeft: "3%",
    },
    marcalancamento2: {
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomelancamento2: {
        fontSize: 15,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    esplancamento2: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 20,

    },
    preco6: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: '#000',
        fontWeight: '700',
    },

    // lançamento 3: sabonete em barra
    lancamento3: {
        width: '48%',
        height: 250,
        borderRadius: 10,
        marginTop: '4%',
    },
    contlancamento3: {
        backgroundColor: "#eee",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        marginTop: "-10%",
    },
    img3: {
        width: '170%',
        height: '170%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "-1%",
    },
    inflancamento3: {
        marginTop: "3%",
        marginLeft: "3%",
    },
    marcalancamento3: {
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomelancamento3: {
        fontSize: 15,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    esplancamento3: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 20,
    },
    preco7: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: '#000',
        fontWeight: '700',
    },
    // lançamento 4: perfume masculino
    lancamento4: {
        width: '49%',
        height: 250,
        borderRadius: 10,
        marginTop: '-74%',
        marginLeft: "52%",
        marginBottom: "20%",
    },
    contlancamento4: {
        backgroundColor: "#eee",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        marginTop: "-12%",
    },
    img4: {
        width: '200%',
        height: '200%',
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: "-1%",
    },
    inflancamento4: {
        marginTop: "3%",
        marginLeft: "3%",
    },
    marcalancamento4: {
        fontSize: 12,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    nomelancamento4: {
        fontSize: 15,
        fontFamily: "OpenSansMedium",
        color: 'black',
        marginBottom: 5,
    },
    esplancamento4: {
        fontSize: 14,
        fontFamily: "RobotoRegular",
        color: 'black',
        marginBottom: 20,

    },
    preco8: {
        fontSize: 16,
        fontFamily: "RobotoRegular",
        color: '#000',
        fontWeight: '700',
    },

});


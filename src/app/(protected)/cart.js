import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto'; 
import { router } from "expo-router";
import { useCart } from "../../hooks/Cart";

export default function Cart() {
    const { cart, removeCart } = useCart();
    const [total, setTotal] = useState(0.00);

    const handleRemoveOne = (id) => {
        removeCart({ id });
    };

    const calcularTotal = () => {
        const total = cart.reduce((acc, element) => {
            const precoproduto = parseFloat(element.precoproduto) || 0; 
            const quantity = element.quantity || 0; 
            return acc + (precoproduto * quantity);
        }, 0);
        return total.toFixed(2);
    };

    const gerarMensagem = () => {
        let mensagem = 'Olá, gostaria de finalizar seu pedido?\n\n';
        cart.forEach((element, index) => {
            mensagem += `${element.name} - R$ ${element.precoproduto} (Quantidade: ${element.quantity})`;
            if (index < cart.length - 1) {
                mensagem += '\n\n'; 
            }
        });
        mensagem += '\n\n'; 
        mensagem += `Total: R$ ${calcularTotal()}`;
        return encodeURIComponent(mensagem);
    };

    const handleWhatsApp = () => {
        if (cart.length === 0) {
            alert("Seu carrinho está vazio.");
            return;
        }

        const numero = '18996152301'; 
        const mensagem = gerarMensagem();
        const url = `whatsapp://send?text=${mensagem}&phone=${numero}`;

        Linking.openURL(url)
            .then((supported) => {
                if (!supported) {
                    alert('O WhatsApp não está instalado ou não pode ser aberto.');
                }
            })
            .catch(err => console.error('Erro ao abrir o WhatsApp:', err));
    };

    useEffect(() => {
        setTotal(calcularTotal());
    }, [cart]);

    return (
        <View style={styles.containerprincipal}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {cart.length > 0 && (
                    <Text style={styles.totalprodutos}>
                        Total de tipos de produtos no carrinho: {cart.length}
                    </Text>
                )}

                {cart.length > 0 ? (
                    cart.map((element, index) => (
                        <View key={element.id}>
                            <View style={styles.produtos}>
                                <Image 
                                    source={typeof element.imagemproduto === 'number' 
                                        ? element.imagemproduto
                                        : { uri: element.imagemproduto || 'URL_DE_FALHA' }
                                    } 
                                    style={styles.imagemproduto}
                                />
                                <View style={styles.informacao}>
                                    <Text style={styles.nome}>{element.name}</Text>
                                    <Text style={styles.descricao}>{element.especificacaoproduto}</Text>
                                    <Text style={styles.valor}>R$ {element.precoproduto}</Text>
                                    <Text style={styles.quantidade}>Quantidade: {element.quantity || 0}</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.botaoremover}
                                    onPress={() => handleRemoveOne(element.id)}
                                >
                                    <Text style={styles.textobotao}>-</Text>
                                </TouchableOpacity>
                            </View>

                            {index < cart.length - 1 && (
                                <View style={styles.linha} />
                            )}
                        </View>
                    ))
                ) : (
                    <View style={styles.sacolaVaziaContainer}>
                        <Text style={styles.aviso}>Você não tem nenhum produto na sacola.</Text>
                        <Text style={styles.aviso2}>quando você escolher seus produtos, mostraremos aqui.</Text>
                        <TouchableOpacity
                            style={styles.botaopginical}
                            onPress={() => router.back("index.js")}>
                            <Text style={styles.textolink1}>Ver produtos</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>

            {cart.length > 0 && (
                <View style={styles.footer}>
                    <View style={styles.totalContainer}>
                        <Text style={styles.total}>Total:</Text>
                        <Text style={styles.totalvalor}>R$ {total}</Text>
                    </View>
                    <TouchableOpacity style={styles.finalizar} onPress={handleWhatsApp}>
                        <Text style={styles.textofinalizar}>Finalizar compra</Text>
                    </TouchableOpacity>
                    <Fontisto style={styles.icone} name="whatsapp" size={24} color="white" />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    containerprincipal: {
        flex: 1,
        backgroundColor: '#ffffff', 
        padding: 14,
    },
    scrollContainer: {
        paddingBottom: 50, 
    },
    totalprodutos: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
        marginBottom: 20,
        textAlign: 'center',
    },
    produtos: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
        paddingVertical: 5,  
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10, 
        elevation: 3,  
    },
    imagemproduto: {
        width: 180,  
        height: 180,
        marginLeft: "-10%", 
    },
    informacao: {
        flex: 1,
        marginRight: "-8%",  
        marginLeft: "-8%",
        paddingEnd: "15%",
    },
    nome: {
        fontSize: 18,
        color: '#000',
        fontFamily: "RobotoRegular",
        marginBottom: 10,
        width: "150%",
    },
    descricao: {
        fontSize: 15,
        color: '#000',
        marginBottom: 15,
        width: "140%",
    },
    valor: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
        marginBottom: 5,
    },
    quantidade: {
        fontSize: 14,  
        color: '#8B004C',
        marginBottom: 5,
    },
    botaoremover: {
        backgroundColor: '#8B004C',
        paddingVertical: 3,
        paddingHorizontal: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "32%",
    },
    textobotao: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    linha: {
        height: 1,
        backgroundColor: '#f2f3f5',  
        marginVertical: 10,
    },
    sacolaVaziaContainer: {
        alignItems: 'center',
        marginTop: "60%", 
    },
    aviso: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18,
        marginTop: 25,
    },
    aviso2: {
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
        marginTop: 5,
        marginBottom: "10%",
    },
    botaopginical: {
        backgroundColor: '#25D366',
        paddingVertical: 12,
        paddingHorizontal: 17,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textolink1: {
        fontSize: 18,
        fontWeight: '500',
        color: '#ffffff',
    },
    footer: {
        paddingTop: "-10%",
        borderColor: '#DAB3C8',
        position: 'relative', 
        paddingBottom: 17,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    totalvalor: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    icone: {
        marginTop: "-11%",
        marginLeft: "7%",
    },
    finalizar: {
        backgroundColor: '#25D366', 
        paddingVertical: 12,
        paddingHorizontal: 17,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    textofinalizar: {
        fontSize: 18,
        fontWeight: '500',
        color: '#ffffff',
        marginBottom: 1,
    },
});

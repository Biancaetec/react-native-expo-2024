import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import { useCart } from "../../hooks/Cart";

export default function Cart() {
    const { cart, removeCart } = useCart();
    const [total, setTotal] = useState(0);

    const handleRemoveOne = (id) => {
        removeCart({ id });
    };

    const handleWhatsApp = () => {
        const numero = '18996152301'; 
        const mensagem = 'Olá, gostaria finalizar meu pedido!';
        const url = `whatsapp://send?text=${encodeURIComponent(mensagem)}&phone=${numero}`;

        Linking.openURL(url)
            .catch(err => console.error('Erro ao abrir o WhatsApp:', err));
    };

    const calculototal = () => {
        const total = cart.reduce((acc, element) => {
            const precoproduto = parseFloat(element.precoproduto) || 0; // Garante que o preço seja um número
            const quantity = element.quantity || 0; // Garante que a quantidade seja um número
            console.log(`Preço: ${precoproduto}, Quantidade: ${quantity}`); // Log de preço e quantidade
            return acc + (precoproduto * quantity); // Calcula o total
        }, 0);
    
        const totalFormatado = total.toFixed(2); // Formata o total com 2 casas decimais
        console.log("Total calculado:", totalFormatado); // Adicione esta linha para verificar o total calculado
        return totalFormatado;
    };

    useEffect(() => {
        setTotal(calculototal());
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
                                    source={
                                        typeof element.imagemproduto === 'number' 
                                        ? element.imagemproduto
                                        : { uri: element.imagemproduto || 'URL_DE_FALHA' }
                                    } 
                                    style={styles.imagemproduto}
                                />
                                <View style={styles.informacao}>
                                    <Text style={styles.nome}>{element.name}</Text>
                                    <Text style={styles.descricao}>{element.especificacaoproduto}</Text>
                                    <Text style={styles.valor}>{element.precoproduto}</Text>
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
                    <Text style={styles.aviso}>Nenhum produto no carrinho</Text>
                )}
            </ScrollView>

            {/* Exibir o total dos produtos */}
            {cart.length > 0 && (
                <View style={styles.footer}>
                    <Text style={styles.total}>
                        Total:
                    </Text>
                    <Text style={styles.totalvalor}>
                         R$ {total}
                    </Text>
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
        paddingBottom: 20, // Para dar espaço no final do ScrollView
    },
    totalprodutos: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#8B004C',
        marginBottom: 20,
        textAlign: 'center',
    },
    produtos: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10, 
        elevation: 3,  
    },
    imagemproduto: {
        width: 150,
        height: 150,
        marginLeft: -30,
        alignSelf: 'flex-start',
        marginRight: "-6%",
    },
    informacao: {
        flex: 1,
        marginRight: 10,  
    },
    nome: {
        fontSize: 18,
        color: '#000',
        fontFamily: "RobotoRegular",
        marginBottom: 5,
    },
    descricao: {
        fontSize: 14,
        color: '#000',
        marginBottom: 8,
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
        marginBottom: "-35%",
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
    aviso: {
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
        marginTop: "90%",
    },
    footer: {

        paddingTop: 1,
        borderColor: '#DAB3C8',
        position: 'fixed', 
        paddingBottom: 17,
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
        marginBottom: 5,
    },
    total: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
        marginTop: 10,
        textAlign: 'center',
        alignSelf: 'flex-start',
    },
    totalvalor: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
        marginTop: "-20",
        alignSelf: 'flex-end',
    },
});

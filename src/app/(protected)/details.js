import { router, useLocalSearchParams } from "expo-router";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useEffect, useState } from "react";
import { formatDateToBrazilian } from "../../uteis/formatData";
import { formatCurrencyBRL } from "../../uteis/formatCurrency";
import { usePickImage } from "../../uteis/pickImage";
import { useConfig } from "../../hooks/Config";

export default function Details() {
    const { id } = useLocalSearchParams();
    const { getPayment, setImagePayment } = usePaymentsDatabase();
    const [payment, setPayment] = useState({});
    const { pickImage } = usePickImage();
    const { directory } = useConfig();

    const fetchData = async () => {
        try {
            const data = await getPayment(id);
            setPayment(data);
        } catch (error) {
            Alert.alert("Erro ao buscar pagamento");
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    const handlePickImage = async () => {
        try {
            const image = await pickImage();
            if (!image) return;
            setPayment({ ...payment, imagem: image });
            setImagePayment(id, image);
        } catch (error) {
            console.log("handlePickImage: ", error);
            Alert.alert("Erro ao buscar imagem: ", error);
        }
    }

    const handleRemoveImage = async () => {
        try {
            setPayment({ ...payment, imagem: "" });
            setImagePayment(id, "");
        } catch (error) {
            console.log("handleRemoveImage: ", error);
            Alert.alert("Erro ao remover imagem: ", error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerPrincipal}>
                <View style={styles.paymentDetails}>
                    <View style={styles.row}>
                        <Text style={styles.text}>Nome: </Text>
                        <Text style={styles.resposta}>{payment?.nome}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>Data do Pagamento: </Text>
                        <Text style={styles.textNormal}>{formatDateToBrazilian(payment?.data_pagamento || new Date())}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>Número do Recibo: </Text>
                        <Text style={styles.textNormal}>{payment?.numero_recibo}</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>Valor Pago: </Text>
                        <Text style={styles.textNormal}>{formatCurrencyBRL(payment?.valor_pago || 0)}</Text>
                    </View>

                    <View style={{ flexDirection: "column", fontSize: 20,}}>
                        <Text style={styles.text}>Observação: </Text>
                        <Text style={styles.textNormal}>{payment?.observacao}</Text>
                    </View>
                </View>

                <View style={styles.containerImagem}>
                    {
                        !!payment?.imagem ?
                            <Image source={{ uri: `${directory}/${payment?.imagem}` }} style={styles.image} />
                            : <Text style={styles.semImagem}>A imagem não foi cadastrada</Text>
                    }
                </View>

                <View style={styles.containerBotoes}>
                    <Button title="Editar" disabled />
                    <Button title="Imagem" onPress={handlePickImage} />
                    <Button title="Remover imagem" onPress={handleRemoveImage} />
                    {/* <Button title="Voltar" onPress={() => router.push("listprof")} /> */}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffff",
    },
    containerPrincipal: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6,
        marginTop: 20,
    },
    paymentDetails: {
        marginBottom: 30,
    },
    row: {
        flexDirection: "row",
        marginBottom: 8,
        fontSize: 18,
        width: "67%",
        textAlign: "left",

    },
 
    text: {
        fontSize: 18,
        color: "#333",
        fontWeight: "bold", 
        marginRight: 8,  
    },
    resposta: {
        fontSize: 18,
        color: "#333",

    },
    observacao: {
        fontSize: 18,
        color: "#555",
        marginTop: 10,
        flexWrap: "wrap",
    },
    containerImagem: {
        alignItems: "center",
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#ddd",
        marginBottom: 20,
    },
    semImagem: {
        backgroundColor: "#ddd",
        color: "#888",
        textAlign: "center",
        width: 200,
        height: 200,
        lineHeight: 200,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#ddd",
        fontStyle: "italic",
    },
    containerBotoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "30%",
        flexWrap: "wrap",
    },
});
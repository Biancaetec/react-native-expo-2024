import { router, useLocalSearchParams } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useEffect, useState } from "react";
import { formatDateToBrazilian } from "../../uteis/formatData";
import { formatCurrencyBRL } from "../../uteis/formatCurrency";

export default function Details() {
    const { id } = useLocalSearchParams();
    const { getPayment } = usePaymentsDatabase();
    const [payment, setPayment]  = useState({});

    const fetchData = async () => {
        try {
            const data = await getPayment(id);
            // console.log(payment);
            // console.log(data)
            setPayment(data);
        } catch (error) {
            Alert.alert("Erro ao buscar pagamento");
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
        console.log("payment ID", id);
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <Text>Nome: {payment?.nome} </Text>
                <Text>Data do Pagamento: {formatDateToBrazilian(payment?.data_pagamento || new Date())}</Text>
                <Text>Número do Recibo: {payment?.numero_recibo}</Text>
                <Text>Valor Pago: {formatCurrencyBRL(payment?.valor_pago)}</Text>
                <Text>Observação: {payment?.observacao}</Text>
            </View>
            <View styles={styles.contentImage}>
                <Text> A imagem não foi cadastrada</Text>
            </View>
            <View style={styles.containerButtons}>
                <Button title="Editar" disabled/>
                <Button title="Imagem" />
                <Button title="Remover imagem" />
                <Button title="Voltar" onPress={() => router.push("listprof")} />
            </View>
        </View>
        
);
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 6,    
    },
    containerButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "140%",
    },
    contentImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
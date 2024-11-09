import { router, useLocalSearchParams } from "expo-router";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { useEffect, useState } from "react";
import { formatDateToBrazilian } from "../../uteis/formatData";
import { formatCurrencyBRL } from "../../uteis/formatCurrency";
import { usePickImage } from "../../uteis/pickImage";

export default function Details() {
    const { id } = useLocalSearchParams();
    const { getPayment } = usePaymentsDatabase();
    const [payment, setPayment]  = useState({});
    const { pickImage } = usePickImage();

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

const handlePickImage = async () => {
    try {
        const image = await pickImage();
        console.log("Image: ", image);
    } catch (error) {
        console.log("handlePickImage: ",error);
        Alert.alert("Erro ao buscar imagem: ", error);
    }
}
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Nome: {payment?.nome}</Text>
                <Text style={styles.text}>Data do Pagamento: {formatDateToBrazilian(payment?.data_pagamento || new Date())}</Text>
                <Text style={styles.text}>Número do Recibo: {payment?.numero_recibo}</Text>
                <Text style={styles.text}>Valor Pago: {formatCurrencyBRL(payment?.valor_pago || 0)}</Text>
                <Text style={styles.text}>Observação: {payment?.observacao}</Text>
            </View>
            <View styles={styles.contentImage}>
                {
                    !!payment?.imagem ? 
                    <Image source={{uri: payment?.imagem}} style={{width: 200, height: 200}} />
                    :  <Text> A imagem não foi cadastrada</Text>

                }
            </View>
            <View style={styles.containerButtons}>
                <Button title="Editar" disabled/>
                <Button title="Imagem" onPress={handlePickImage} />
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
    text: {
        fontSize: 16,
        fontFamily: "RobotoMedium",
    }
});
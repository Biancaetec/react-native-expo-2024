import { useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

export default function listprof() {
    const [payments, setPayments] = useState([
        { id: "1", user_id: "1", nome: "Bianca", valor_pago: 1.11, data_pagamento: "2021-10-10 12:00:00", numero_recibo: "123" },
        { id: "2", user_id: "2", nome: "Marcos", valor_pago: 2.22, data_pagamento: "2021-10-10 12:00:00", numero_recibo: "456" },
        { id: "3", user_id: "3", nome: "Ana", valor_pago: 3.33, data_pagamento: "2021-10-10 12:00:00", numero_recibo: "789" },
        { id: "4", user_id: "4", nome: "Pedro", valor_pago: 4.44, data_pagamento: "2021-10-10 12:00:00", numero_recibo: "101" },
    ]);

    const Item = ({ data }) => {
        return (
    <View style={styles.container}>
        <View style={styles.item}>

           <View>
                <Text style={styles.title}>{data.nome}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text>{new Date (data.data_pagamento).toLocaleDateString()} </Text>
                        <Text> #{data.numero_recibo}</Text>
                    </View>
            </View>
           <View>
                <Text style={styles.value}>
                    {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(data.valor_pago)}
                </Text>
           </View>
        </View>
    </View>
        );
    };

    return (
        <View style={{ flex: 1}}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={payments}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Item data={item} />}


                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
    },
    item: {
        backgroundColor: "#f4f4f4",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        borderRadius: 16,
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontFamily: "RobotoRegular",
        fontWeight: "bold",
        fontSize: 16,
    },
    value: {
        fontFamily: "RobotoRegular",
        fontWeight: "bold",
        fontSize: 16,
    },
});
import { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";
import { formatDateToBrazilian } from "../../uteis/formatData";
import { formatCurrencyBRL } from "../../uteis/formatCurrency";
import { router } from "expo-router";

export default function ListProf() {
    const [data, setData] = useState([]);
    const { getPayments } = usePaymentsDatabase();
    const [page, setPage] = useState(0); // controla qual página o sistema já carregou
    const [loading, setLoading] = useState(true); // controla se está carregando os dados no banco
    const [hasMore, setHasMore] = useState(true); // controla se tem mais dados para carregar


    async function fetchData() {
        if (hasMore === false) return; // se não há mais dados, não busca mais
        setPage(page + 1);
        const payments = await getPayments(page);
        if (payments.length < 5) setHasMore(false); // se a quantidade de pagamentos for menor que 5, não tem mais dados
        console.log("Page: ", page);
        console.log("Pagamentos: ", payments);
        setData((prevData) => [...prevData, ...payments]);
        setLoading(false);
    }

    useEffect(() => {
        setPage(0);
        fetchData();
    }, []);



    // async function fetchData() {
    //     if (hasMore === false) return; // se não há mais dados, não busca mais
    //     console.log(page)
    //     setPage(page + 1);

    //     const payments = await getPayments(page);
    //     if (payments.length < 5) setHasMore(false); // se a quantidade de pagamentos for menor que 5, não tem mais dados
    //     console.log("Page: ", page);
    //     console.log("Pagamentos: ", payments);
    //     comsole.log(payments)
    //     setData((prevData) => [...prevData, ...payments]);
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     setPage(0);
    //     fetchData();
    // }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => router.push({ pathname: "details", params: { id: item.id } })} // Navegação ao clicar
            style={styles.itemContainer}
        >
            {console.log("Item da list: ", item)}
            <View style={{ flex: 1, gap: 5, marginVertical: 10, }}>
                <Text style={styles.itemName}>{item.nome}</Text>
            
            <View style={styles.row}>
                <View>
                    <Text style={styles.dateText}>
                        {formatDateToBrazilian(item.data_pagamento || new Date())}
                    </Text>
                    <Text>{item.numero_recibo}</Text>
                </View>
            </View>
            </View>
                <View style={styles.valueContent}>
                <Text style={styles.valueText}>
                    {formatCurrencyBRL(item.valor_pago || 0)}
                </Text>
            </View>   
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlashList
                    data={data}
                    renderItem={renderItem}
                    estimatedItemSize={50}
                    onEndReached={fetchData}
                    onEndReachedThreshold={0.8}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    listContainer: {
        flex: 1,
        padding: 10,
    },
    itemContainer: {
        flexDirection: "row",
        margin: 10,
        padding: 3,
        height: 100,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
    },
    itemName: {
        fontFamily: "RobotoMedium",
        fontSize: 18,
        textTransform: "uppercase",
    },
    row: {
        flexDirection: "row",
        gap: 10,
    },
    dateText: {
        fontFamily: "RobotoLight",
    },
    valueText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "OpenSansMedium",
        fontWeight: "700",
        fontSize: 18,
        marginTop: 30,
    
    },
});

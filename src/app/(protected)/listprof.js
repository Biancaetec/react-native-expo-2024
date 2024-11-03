import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";
import { FlashList } from "@shopify/flash-list";
import { formatDateToBrazilian } from "../../uteis/formatDate";
import { formatCurrencyBRL } from "../../uteis/formatCurrency";

export default function listprof() {
    const [ data, setData ] = useState([])
    const { getPayments } = usePaymentsDatabase();
    const [page, setPage] = useState(0) //controla qual página o sistema já carregou
    const [loading, setLoading] = useState(true) // controla se está carregando os dados no banco 
    const [hasMore, setHasMore] = useState(true) //controla se tem mais dados para carregar

    async function fetchData() {

        if (hasMore === false) return; //se essa flag for falsa, não busca mais dados
        console.log(page)
        setPage(page + 1)

        //Essa função vai buscar no banco de dados os pagamentos
        const payments = await getPayments(page);

        if (payments.length < 5) setHasMore(false) //se a quantidade de pagamentos for menor que 5, não tem mais dados{
        // console.log(payments);
        setData([...data, ...payments]);
        setLoading(false)
        }

    useEffect(() =>{
        //Executa a primeira vez a busca de dados
        setPage(0)
        fetchData();
    }, [])

    renderItem = ({ item }) => (
        <View style={{ flexDirection: "row", margin: 5, margin: 10, padding: 3, height: 150, backgroundColor: "#eee", borderRadius: 8}}>
            <View style={{ flex: 1, gap: 5}}> 
                <Text style={{fontFamily: "RobotoMedium", fontSize: 18, textTransform: "uppercase" }}>{item.nome}</Text> 
                <View style={{ flexDirection: "row", gap: 10}}>
                <Text style={{ fontFamily: "RobotoLight"}}>
                    {formatDateToBrazilian(item.data_pagamento || new Date())}
                    </Text>
                <Text>{item.numero_recibo}</Text>
                </View>
            </View>
         <View>
            <Text style={{ flex: 1, justifyContent:"center", alignItems:"center", fontFamily: "OpenSansMedium", fontWeight: "600", fontSize: 15}}>
                {formatCurrencyBRL(item.valor_pago || 0)}
            </Text>
        </View>   
        </View>
      );
    
    return (
    <View style={{ flex: 1, backgroundColor: "#ffff"}}>
            <View style={{flex: 1}}>
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

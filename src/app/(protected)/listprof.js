import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { usePaymentsDatabase } from "../../database/usePaymentsDatabase";



export default function listprof() {
    const [ data, setData ] = useState([])
    const { getPayments } = usePaymentsDatabase();

    async function fetchData() {
        const payments = await getPayments();
        console.log(payments);
        //Essa função vai buscar no banco de dados os pagamentos
        return [];
    }

    useEffect(() =>{
        //Executa a primeira vez a busca de dados
        const tempData = fetchData();
        setData(tempData);
    }, [])
    
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>listagem</Text>
        {
            data.length > 0 && data.map((item, index) => {
                return <Text key={index}>{item}</Text>
            })
        }
    </View>
    );
}

import { useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Details() {
    const { id } = useLocalSearchParams();
    return (
        <View style={{ flex: 1}}>
            <Text>Detalhes - {id ? id : "Sem id"}  </Text>
            <View>
                <Text>Nome</Text>
                <Text>Data do Pagamento</Text>
                <Text>Número do Recibo</Text>
                <Text>Valor Pago</Text>
                <Text>Observação</Text>
            </View>
            <View>
                <Text> A imagem não foi cadastrada</Text>
            </View>
            <View>
                <Button title="Editar" />
                <Button title="Definir imagem" />
                <Button title="Remover imagem" />
                <Button title="Voltar" />
            </View>
        </View>
        
);
}
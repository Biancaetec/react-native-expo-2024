import { router } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { useMaintenanceDatabase } from "../database/useMaintenanceDatabase";

export default function Maintenance() {
const { resetDatabase } = useMaintenanceDatabase();

    const handleReset = async () => 
        {
            //reset database
            try{
            // fazer o chamado da função
            await resetDatabase();
            Alert.alert("Payments", "Banco de dados resetado com sucesso!",);
            } catch (error) {
                Alert.alert("Payments", "Erro ao resetar banco de dados" + error.message,);
            }          
        }
    return (
        <View style={styles.container}>
            <Text style={styles.windowTitle}>Manutenção do Banco </Text>
        <View style={styles.contentButtons}>
            <Button title="zerar" onPress={handleReset}/>
            <Button title="importar usuários" />
            <Button title="importar pagamentos" />
            <Button title="voltar" onPress={() => router.back()} />

</View>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
},
windowTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
},
contentButtons: {
    gap: 10,
},
});
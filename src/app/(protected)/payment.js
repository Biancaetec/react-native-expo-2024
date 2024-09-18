import { router } from "expo-router";
import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Payment() { //criar os itens do menu
    const [valor, setValor] = useState("0,00");
    const [sugestoes, setSugestoes] = useState([
        {
            id: 1,
            nome: "Barbaraanne Farnall"
        },
        {
            id: 2,
            nome: "Joey Najera"
        },
        {
            id: 3,
            nome: "Farrah Bramer"
        },
        {
            id: 4,
            nome: "Marquita Polle"
        },
        {
            id: 5,
            nome: "Bradford Smogur"
        },
        {
            id: 6,
            nome: "Amelina Lesaunier"
        },
        {
            id: 7,
            nome: "Gloriana Bentz"
        },
        {
            id: 8,
            nome: "Cullin Cutten"
        },
        {
            id: 9,
            nome: "Ginny Yakobovicz"
        },
        {
            id: 10,
            nome: "Carlos Baugham"
        },
        {
            id: 11,
            nome: "Frannie Cuttler"
        },
        {
            id: 12,
            nome: "Dita Sprowles"
        },
        {
            id: 13,
            nome: "Rosalia Cuvley"
        },
        {
            id: 14,
            nome: "Annelise Barnwille"
        },
        {
            id: 15,
            nome: "Dud Joule"
        },
        {
            id: 16,
            nome: "Kathi Pedroli"
        },
        {
            id: 17,
            nome: "Tomasina Agar"
        },
        {
            id: 18,
            nome: "Matelda Albany"
        },
        {
            id: 19,
            nome: "Wilfred Treves"
        },
        {
            id: 20,
            nome: "Thadeus Freeborn"
        },
        {
            id: 21,
            nome: "Leonidas Giovanazzi"
        },
        {
            id: 22,
            nome: "Delmar Anderton"
        },
        {
            id: 23,
            nome: "Lizbeth Lambillion"
        },
        {
            id: 24,
            nome: "Thorsten Linturn"
        },
        {
            id: 25,
            nome: "Cyndi Fancet"
        },
        {
            id: 26,
            nome: "Ediva Jirek"
        },
        {
            id: 27,
            nome: "Godfrey Camilio"
        },
        {
            id: 28,
            nome: "Richart Bramer"
        },
        {
            id: 29,
            nome: "Goldia Korn"
        },
        {
            id: 30,
            nome: "Goldy Males"
        },
        {
            id: 31,
            nome: "Gussy Duck"
        },
        {
            id: 32,
            nome: "Helaine Tills"
        },
        {
            id: 33,
            nome: "Carolin Menicomb"
        },
        {
            id: 34,
            nome: "Ephraim Iliffe"
        },
        {
            id: 35,
            nome: "Heriberto Enevoldsen"
        }
    ]);
    const [id, setId] = useState(1);
    const [data, setData] = useState(new Date());
    const [viewCalendar, setViewCalendar] = useState(false)
    const [observacao, setObservacao] = useState ("");

    const handlerCalendar = (event, selectedDate) => {
        setViewCalendar(false);
        setData(selectedDate); 
    };

    return (
        <View style={styles.content}>
            <Text>Inserir Pagamentos</Text>
            <View style={styles.inputView}>
                <Ionicons name="wallet-outline" size={24} color="black" />
                <TextInput
                    placeholder="Valor"
                    keyboardType="decimal-pad"
                    style={styles.inputValor}
                    value={valor}
                    onChangeText={setValor}

                />
            </View>

            <View style={styles.inputView}>
                <Picker selectedValue={id}
                    onValueChange={(itemValue, index) => {
                        setId(itemValue);
                    }}
                    style={{ width: "100%" }}
                >
                    {sugestoes?.map((item) => {
                        return <Picker.Item key={item.id} label={item.nome} value={item.id} />
                    })}
                </Picker>
            </View>

            <View style={styles.inputView}>
                <Text onPress={()=> setViewCalendar(true)} style={styles.inputData}>
                    {data.toLocaleDateString().split("T")[0]}
                </Text>
                {viewCalendar && (
                <DateTimePicker
                value={data}
                onChange={handlerCalendar}
                mode="date"
                textID="dateTimePicker"
                />
                )}
            </View>

            <View style={styles.inputView}>
                <TextInput placeholder="Observações" 
                style={styles.inputObservacao} 
                value={observacao} 
                onChangeText={setObservacao}
                multiline={true}
                />
            </View>

            <View style={styles.contentButtons}>
                <Button title="Salvar" />
                <Button title="Continuar" />
                <Button title="Cancelar" onPress={() => router.back()} />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({ // eu estilizei a pagina

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f2f2f2',

    },
    inputView: {
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        margin: 10,
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
    },
    contentButtons: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "space-around",
    },
    inputValor: {
        flex: 1,
        textAlign: "right",
        padding: 10,
    },
    inputData: {
        width: "100%",
        textAlign: "center",
        fontFamily: "OpenSansMedium",
        fontSize: 20,
        padding: 10,
    },
    inputObservacao: {
        fontFamily: "OpenSansMedium",
        fontSize: 16,
        flex: 1,
        lineHeight: 20,
    },
});
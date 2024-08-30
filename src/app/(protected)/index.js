import { Text, View } from "react-native";
import { useAuth } from "../../hooks/Auth";

export default function Home() { //criar os itens do menu

    const { signOut }  = useAuth();

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Home</Text>
        </View> 
    );
}
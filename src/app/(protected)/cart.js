import { Button, Text, View } from "react-native";
import { useCart } from "../../hooks/Cart";

export default function Cart() {
    const { cart, removeCart } = useCart()

    const handleRemoveOne = (id) => {
        removeCart({id})
    }

    return <View>
        {
            cart.map(element => {
                return <View><Text key={element.id}>
                    {element.name} - {element.quantity}
                    <Button title="-" onPress={() => handleRemoveOne(element.id)} />
                </Text></View>
            })
        }
    </View>
}
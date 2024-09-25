import { Button, Text, View, Image, StyleSheet } from "react-native"; 
import { useCart } from "../../hooks/Cart";

export default function Cart() {
    const { cart, removeCart } = useCart();

    const handleRemoveOne = (id) => {
        removeCart({ id });
    };

    return (
        <View style={styles.container}>
            {cart.length > 0 ? (
                cart.map((element) => (
                    <View key={element.id} style={styles.itemContainer}>
                        <Image 
                            source={{ uri: element.image || 'URL_DE_FALHA' }} // URL padrão se não houver imagem
                            style={styles.image}
                        />
                        <View style={styles.infoContainer}>
                            <Text style={styles.productName}>{element.name || "Nome não disponível"}</Text>
                            <Text style={styles.productDescription}>{element.especificacao || "Especificação não disponível"}</Text>
                            <Text style={styles.productPrice}>R$ {element.preco !== undefined ? element.preco : "Preço não disponível"}</Text>
                            <Text style={styles.productQuantity}>Quantidade: {element.quantity || 0}</Text>
                        </View>
                        <Button title="-" onPress={() => handleRemoveOne(element.id)} />
                    </View>
                ))
            ) : (
                <Text>Nenhum produto no carrinho</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 17,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    productName: {
        fontWeight: 'bold',
    },
    productDescription: {
        color: '#666',
    },
    productPrice: {
        color: '#000',
    },
    productQuantity: {
        color: '#333',
    },
});

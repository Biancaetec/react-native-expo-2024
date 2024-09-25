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
                            source={
                                typeof element.imagemproduto === 'number' 
                                ? element.imagemproduto  // Se a imagem for um caminho local (require)
                                : { uri: element.imagemproduto || 'URL_DE_FALHA' }  // Se for uma URL remota
                            } 
                            style={styles.image}
                        />
                        <View style={styles.infoContainer}>
                            <Text style={styles.productName}>{element.name || "Nome não disponível"}</Text>
                            <Text style={styles.productDescription}>{element.especificacaoproduto || "Especificação não disponível"}</Text>
                            <Text style={styles.productPrice}>{element.precoproduto}</Text>
                            <Text style={styles.productQuantity}>Quantidade: {element.quantity || 0}</Text>
                        </View>
                        <Button title="-"  onPress={() => handleRemoveOne(element.id)} />
                    </View>
                ))
            ) : (
                <Text style={styles.aviso}>Nenhum produto no carrinho</Text>
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
        marginLeft: 3,  // Criando espaço à esquerda
        marginRight: 3, // Criando espaço à direita
    },
    image: {
        width: 150,
        height: 150,
        marginLeft: -20, // Movendo a imagem para a esquerda
        alignSelf: 'flex-start', // Garantindo que a imagem fique no início
    },
    infoContainer: {
        flex: 1,
        paddingLeft: 1,
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    productDescription: {
        color: '#666',
        marginTop: 4,
    },
    productPrice: {
        color: '#000',
        marginTop: 6,
    },
    productQuantity: {
        color: '#333',
        marginTop: 6,
    },
   
});

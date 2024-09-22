import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const initialCartItems = [
    {
        id: '1',
        name: 'Sabonete Líquido de Cereja',
        description: 'Fragrância deliciosa de cereja.',
        price: 29.90,
        quantity: 1,
        image: require('../../../src/assets/images/produto.png'), // Substitua pelo caminho correto
    },
    {
        id: '2',
        name: 'Sabonete Líquido de Baunilha',
        description: 'Fragrância suave de baunilha.',
        price: 24.90,
        quantity: 1,
        image: require('../../../src/assets/images/produto.png'), // Substitua pelo caminho correto
    },
];

export default function Perfil() {  
    const [cartItems, setCartItems] = useState(initialCartItems);

    const updateQuantity = (id, delta) => {
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
            )
        );
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const renderItem = (item) => (
        <View style={styles.itemContainer} key={item.id}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.button}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            {cartItems.map(renderItem)}
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: R$ {getTotal()}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        color: '#555',
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 16,
        color: '#ac0c24',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#ac0c24',
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 18,
        marginHorizontal: 10,
    },
    totalContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    totalText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ac0c24',
    },
});

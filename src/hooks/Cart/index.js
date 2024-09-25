import { createContext, useContext, useState } from "react"

const CartContext = createContext({})

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addCart = async ({ id, imagemproduto, name, especificacaoproduto, precoproduto, quantity, value }) => {
        // setCart((prevItens) => [...prevItens, { id, name, quantity, value }])

        setCart((prevItens) => {
            const itemExistente = prevItens.find(item => item.id === id);

            if (itemExistente) {
                // Se o item já existe, atualiza a quantidade
                return prevItens.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Se não existe, adiciona o novo item com quantidade 1
                return [...prevItens, { id, imagemproduto, name, especificacaoproduto, precoproduto, quantity, value }];
            }
        });
    }
    const removeCart = async ({ id }) => {
        // const product = cart.find(item => item.id !== id)
        // product.quantity -= 1;
        // setCart(products)
        // setCart((prevItens) => [...prevItens, { id, name, quantity, value }])

        setCart((prevItens) => {
            const itemExistente = prevItens.find(item => item.id === id);

            if (itemExistente) {
                // Se o item já existe, atualiza a quantidade
                if (itemExistente.quantity == 1) {
                    return prevItens.filter(item => item.id !== id)
                }

                return prevItens.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } 
        });
    }

    return <CartContext.Provider value={{ cart, addCart, removeCart }}>{children}</CartContext.Provider>
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within an CartProvider");
    }
    return context;
}
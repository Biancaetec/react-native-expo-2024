import { AuthProvider } from "./Auth";
import { DataProvider } from "./Data";
import { FontProvider } from "./Font";
import { CartProvider } from "./Cart"

export function AppProvider({ children }) { //vai devolver todos os hoolks e font que precisamos 
    return (
        <FontProvider>
            <DataProvider>
                <AuthProvider>
                    <CartProvider>
                        {children}
                    </CartProvider>
                </AuthProvider>
            </DataProvider>
        </FontProvider>
    );
}
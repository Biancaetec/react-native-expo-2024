import { AuthProvider } from "./Auth";
import { DataProvider } from "./Data";
import { FontProvider } from "./Font";

export function AppProvider({ children }) { //vai devolver todos os hoolks e font que precisamos 
    return (
    <FontProvider>
        <DataProvider>
        <AuthProvider>{children}</AuthProvider>
        </DataProvider>
    </FontProvider>
    );
}
import { FontProvider } from "./Font";

export function AppProvider({children}) { //vai devolver todos os hoolks e font que precisamos 
    return<FontProvider>{children}</FontProvider>;
}
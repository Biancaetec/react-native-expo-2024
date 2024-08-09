import { Stack }  from "expo-router";
import { AppProvider } from "../hooks";

export default function Layout() {
    return(
        <AppProvider>
            <Stack/>{/*responsável por exibir a pagina inicial*/}
        </AppProvider>
    );
}
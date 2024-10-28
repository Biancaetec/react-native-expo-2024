import { Stack, useSegments, router } from "expo-router";
import { AppProvider } from "../hooks";
import { useAuth } from "../hooks/Auth";
import { useEffect } from "react";

const StackLayout = () => {
    const { user } = useAuth();

    useEffect(() => {
        if (user?.authenticated) {
            router.replace("(protected)"); // na video aula 16  pt.2 ele coloca sigin, mas não funciona o meu botao
        } else {
                router.replace("signin");
        }

    }, [user]);

    
    return (
        <Stack>
            <Stack.Screen name="signin" options={{ headerShown: false }} />
            <Stack.Screen name="about" options={{ headerShown: false }} />
            <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        </Stack>
    );
}
export default function Layout() {

    return (
        <AppProvider>
            <StackLayout />
        </AppProvider>
    );
}
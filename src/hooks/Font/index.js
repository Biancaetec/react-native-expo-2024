import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator } from "react-native";

const FontContext = createContext({});

export function FontProvider({children}) {

    const [loaded, error] = useFonts({
        regular: require("../../assets/fonts/BonaNovaSC-Regular.ttf"),
        regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
        ligth: require("../../assets/fonts/Montserrat-Light.ttf"),
        medium: require("../../assets/fonts/OpenSans-Medium.ttf"),
        light: require("../../assets/fonts/OpenSans-Light.ttf"),
        regular: require("../../assets/fonts/Roboto-Regular.ttf"),
        ligth: require("../../assets/fonts/Roboto-Light.ttf"),
        medium: require("../../assets/fonts/Roboto-Medium.ttf"),
    });

    if (!loaded && !error) {
       return <ActivityIndicator />;
      }

    return <FontContext.Provider value={{}}> {children} </FontContext.Provider>;
}

export function useFont() {
    const context = useContext(FontContext);
    if(!context) {
        throw new Error("usefont must be used within a FontProvider");
    }
    return context;
}
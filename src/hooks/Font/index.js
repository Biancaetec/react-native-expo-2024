import { createContext, useContext } from "react";

const FontContext = createContext({});

export function FontProvider((children)) {
    return <FontContext.Provider value={{}}> {children} </FontContext.Provider>;
}

export function useFont() {
    const context = useContext(FontContext);
    if(!context) {
        throw new Error("usefont not be used within a FontProvider")
    }
    return context;
}
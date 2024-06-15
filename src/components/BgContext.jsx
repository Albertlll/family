
import { createContext, useState, useMemo } from "react";
import bg from "../bg/bg.png"

export const BgContext = createContext();


function ContextProviderBg({children}) {

    const [bgState, setBg] = useState(bg);

    const contextValue = useMemo(() => ({ bgState, setBg }), [bgState]);
  
    return (<BgContext.Provider value={contextValue}>
                {children}
            </BgContext.Provider>);
}

export default ContextProviderBg;
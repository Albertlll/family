
import { createContext, useState, useMemo } from "react";


export const NodeContext = createContext();


function ContextProviderNode({children}) {
    const [node, setNode] = useState(null);
    const contextValue = useMemo(() => ({ node, setNode }), [node]);
  
    return (<NodeContext.Provider value={contextValue}>
                {children}
            </NodeContext.Provider>);
}

export default ContextProviderNode;
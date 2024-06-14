
import { createContext, useState, useMemo } from "react";


export const QuestContext = createContext();


function ContextProviderQuest({children}) {
    const [quest, setQuest] = useState(null);
    const contextValue = useMemo(() => ({ quest, setQuest }), [quest]);
  
    return (<QuestContext.Provider value={contextValue}>
                {children}
            </QuestContext.Provider>);
}

export default ContextProviderQuest;
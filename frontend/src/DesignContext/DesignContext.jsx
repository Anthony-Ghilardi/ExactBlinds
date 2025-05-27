import { createContext, useContext, useState } from "react";

const DesignContext = createContext();

export function DesignProvider({ children }) {
  const [designs, setDesigns] = useState([]);

  return (
    <DesignContext.Provider value={{ designs, setDesigns }}>
      {children}
    </DesignContext.Provider>
  );
}

export function useDesignContext() {
  return useContext(DesignContext);
}

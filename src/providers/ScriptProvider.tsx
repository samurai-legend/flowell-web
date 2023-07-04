"use client";

import { createContext, useEffect, useState } from "react";

export const ScriptContext = createContext<any>({});

const ScriptProvider: React.FC<any> = ({ children }) => {
  const [script, setScript] = useState<any | null>(null);

  useEffect(() => {
    const createscript = document.createElement("script");
    createscript.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(createscript);

    setScript(createscript);
  }, []);

  return (
    <ScriptContext.Provider value={{ script }}>
      {children}
    </ScriptContext.Provider>
  );
};

export default ScriptProvider;

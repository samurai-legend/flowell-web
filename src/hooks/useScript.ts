import { ScriptContext } from "@app/providers/ScriptProvider";
import { useContext } from "react";

export function useScript(): any {
  const context = useContext(ScriptContext);
  if (context === null) {
    throw new Error("useScript must be used within ScriptContext");
  }
  return context;
}

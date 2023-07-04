import ScriptProvider from "./ScriptProvider";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ScriptProvider>{children}</ScriptProvider>;
};

export default Providers;

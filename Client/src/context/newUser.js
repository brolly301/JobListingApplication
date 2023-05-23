import { createContext, useState } from "react";

const UserzContext = createContext();

export function UserzProvider({ children }) {
  const [user, setUser] = useState(null);

  const valueToShare = {
    user,
    setUser,
  };

  return (
    <UserzContext.Provider value={valueToShare}>
      {children}
    </UserzContext.Provider>
  );
}

export default UserzContext;

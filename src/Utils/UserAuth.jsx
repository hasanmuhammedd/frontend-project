import { createContext, useEffect, useState } from "react";

export const UserAuth = createContext();

export function UserAuthProviver({ children }) {
  const [token, setToken] = useState(false);
  useEffect(() => {
    setToken(localStorage.getItem("user_token"));
  }, [token]);
  return <UserAuth.Provider value={{ token, setToken }}>{children}</UserAuth.Provider>;
}

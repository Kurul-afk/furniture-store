import axios from "axios";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface authContextI {
  currentUser: string;
  error: string;
  loading: boolean;
  handleSignUp: any;
}

const initVal = {
  currentUser: "",
  error: "",
  loading: false,
  handleSignUp: () => {},
};

interface UserI {
  email: string;
  password: string;
}

const authContext = createContext<authContextI>(initVal);

export const useAuthContext = () => {
  return useContext(authContext);
};

const API = "http://localhost:8000";

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<string>("");
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignUp = async (
    user: UserI,
    navigate: (value: string) => void
  ) => {
    setLoading(true);
    try {
      await axios.post(`${API}/users`, user);
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <authContext.Provider value={{ currentUser, error, loading, handleSignUp }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

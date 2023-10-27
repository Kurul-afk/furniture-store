import axios from "axios";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface authContextI {
  currentUser: string;
  error: string;
  loading: boolean;
  handleSignUp: any;
  handleSignIn: any;
  handleLogOut: any;
  setCurrentUser: any;
  isAdmin: any;
}

const initVal = {
  currentUser: "",
  error: "",
  loading: false,
  handleSignUp: () => {},
  handleSignIn: () => {},
  handleLogOut: () => {},
  setCurrentUser: () => {},
  isAdmin: "",
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
  const isAdmin = localStorage.getItem("email") === "admin@gmail.com";

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

  const handleSignIn = async (
    user: UserI,
    navigate: (value: string) => void
  ) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/users`);
      const data = response.data;
      const findUser = data.find(
        (item: UserI) =>
          item.email === user.email && item.password === user.password
      );
      console.log(findUser);
      console.log(data);
      if (findUser) {
        setCurrentUser(user.email);
        localStorage.setItem("email", user.email);
        navigate("/");
      } else {
        console.log("Пользователь не найден!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogOut = (navigate: (value: string) => void) => {
    setLoading(true);
    localStorage.removeItem("email");
    setCurrentUser("");
    navigate("/sign-in");
    setLoading(false);
  };

  return (
    <authContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        error,
        loading,
        handleSignUp,
        handleSignIn,
        handleLogOut,
        isAdmin,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;

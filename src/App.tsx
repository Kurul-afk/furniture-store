import React from "react";
import Header from "./components/Header";
import Routing from "./Routing";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/authContext";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;

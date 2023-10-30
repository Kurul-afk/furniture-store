import React from "react";
import Header from "./components/Header";
import Routing from "./Routing";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/authContext";
import ProductContextProvider from "./context/productContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ProductContextProvider>
      <AuthContextProvider>
        <ToastContainer />
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </ProductContextProvider>
  );
};

export default App;

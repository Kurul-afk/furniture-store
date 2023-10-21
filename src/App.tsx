import React from "react";
import Header from "./components/Header";
import Routing from "./Routing";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

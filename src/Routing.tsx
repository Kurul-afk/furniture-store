import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import ArticlesPage from "./pages/ArticlesPage";
import Contacts from "./pages/Contacts";
import OurWork from "./pages/OurWork";
import ReviewsPage from "./pages/ReviewsPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/reviews" element={<ReviewsPage />} />
    </Routes>
  );
};

export default Routing;

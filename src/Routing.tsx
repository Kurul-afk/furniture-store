import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import ArticlesPage from "./pages/ArticlesPage";
import Contacts from "./pages/Contacts";
import OurWork from "./pages/OurWork";
import ReviewsPage from "./pages/ReviewsPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default Routing;

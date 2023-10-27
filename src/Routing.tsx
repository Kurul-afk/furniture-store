import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import ArticlesPage from "./pages/ArticlesPage";
import Contacts from "./pages/Contacts";
import OurWork from "./pages/OurWork";
import ReviewsPage from "./pages/ReviewsPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useAuthContext } from "./context/authContext";
import AddProduct from "./pages/AddProduct";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";

const Routing = () => {
  const { isAdmin, currentUser } = useAuthContext();

  const AdminRoute = () => (isAdmin ? <Outlet /> : <Navigate to={"/"} />);
  const UserRoute = () => (currentUser ? <Outlet /> : <Navigate to={"/"} />);

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
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<UserRoute />}>
        <Route path="/user-page" element={<UserPage />} />
        <Route element={<AdminRoute />}>
          <Route path="/add-product" element={<AddProduct />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;

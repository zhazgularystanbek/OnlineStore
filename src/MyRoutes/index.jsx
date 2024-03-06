import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Backet from "../pages/Backet";
import Favourite from "../pages/Fav";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/backet" element={<Backet />}></Route>
      <Route path="/fav" element={<Favourite />}></Route>
      <Route path="/catalog/:category" element={<Category />}></Route>
    </Routes>
  );
};

export default MyRoutes;

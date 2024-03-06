import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Catalog from "./Catalog";
import List from "./Catalog/Productslist";

const Home = () => {
  return (
    <div>
      <Header />
      <Catalog />
      <List />
      <Footer />
    </div>
  );
};

export default Home;

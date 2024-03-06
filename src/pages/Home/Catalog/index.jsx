import React, { useEffect } from "react";
import { useProductContext } from "../../../MyContext";

const Catalog = () => {
  const { readProduct, product } = useProductContext();
  useEffect(() => {
    readProduct();
  }, []);
  return (
    <div id="catalog">
      <div className="container">
        <div className="catalog">
          <div className="burger">
            <span>Каталог товаров</span>
            <img src={require("../../../assets/burger.png")} alt="" />
          </div>
          <div className="input-b">
            <img src={require("../../../assets/searchGreen.png")} alt="" />
            <input
              type="text"
              placeholder="Введите название товара или артикул"
            />
          </div>
          <div className="search-b">
            <img src={require("../../../assets/searchWhite.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

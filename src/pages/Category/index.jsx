import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Catalog from "../Home/Catalog";
import { useProductContext } from "../../MyContext";
import { useNavigate, useParams } from "react-router-dom";

const Category = () => {
  const { product, readProduct, add, subtr, createBacketProduct, addToFav } =
    useProductContext();
  const { category } = useParams();
  const nav = useNavigate();
  return (
    <div id="category">
      <Header />
      <Catalog />
      <div className="container">
        <div className="category">
          <div className="navs">
            <span onClick={() => nav("/")}>Главная</span>
            <span>/</span>
            <span> Каталог </span>
            <span>/</span>
            <span>{category[0].toUpperCase() + category.slice(1)}</span>
          </div>
          <h2>{category.toUpperCase()}</h2>
          <div className="products">
            {product
              .filter((el) => el.category === category)
              .map((el) => (
                <div className="product-block">
                  <div className="img-block">
                    <img
                      src={
                        el.image
                          ? require(`../../assets/productImg/${el.image}`)
                          : "https://neuronsk.ru/upload/medialibrary/3b0/3b07e6b8419e53910b487d26d5a95bce.png"
                      }
                      alt=""
                    />
                    <img
                      onClick={() => addToFav(el)}
                      src={require("../../assets/favIcon.png")}
                      alt=""
                    />
                  </div>
                  <div className="prod-txt">
                    <p>{el.name}</p>
                    <h4>{el.price} сом</h4>
                  </div>
                  <div className="count">
                    <span onClick={() => subtr(el)}>-</span>
                    <span>{el.count}</span>
                    <span onClick={() => add(el)}>+</span>
                  </div>
                  <button onClick={() => createBacketProduct(el)}>
                    {el.inBacket === false ? "В корзину" : "В корзинe"}
                  </button>
                  <p>Ц:{el.art}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;

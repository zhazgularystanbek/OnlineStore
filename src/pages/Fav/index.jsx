import React from "react";
import { useProductContext } from "../../MyContext";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Catalog from "../Home/Catalog";
import Footer from "../../components/Footer";

const Favourite = () => {
  const { add, subtr, createBacketProduct, addToFav, fav } =
    useProductContext();
  const nav = useNavigate();

  return (
    <div id="fav">
      <Header />
      <Catalog />
      <div className="container">
        <div className="category">
          <div className="navs">
            <span onClick={() => nav("/")}>Главная</span>
            <span>/</span>
            <span> Каталог </span>
            <span>/</span>
            <span>ИЗБРАННЫЕ ТОВАРЫ</span>
          </div>
          <h2>ИЗБРАННЫЕ ТОВАРЫ</h2>
          <div className="products">
            {fav.length !== 0 ? (
              fav.map((el) => (
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
              ))
            ) : (
              <h3 className="redText">В данном разделе товары отсутствуют</h3>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favourite;

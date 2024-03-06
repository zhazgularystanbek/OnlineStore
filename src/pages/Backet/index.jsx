import React, { useEffect } from "react";
import { useProductContext } from "../../MyContext";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Catalog from "../Home/Catalog";
import Footer from "../../components/Footer";

const Backet = () => {
  const { add, subtr, backetPr, getSum, getBacketPr, delProduct } =
    useProductContext();
  const nav = useNavigate();
  const { name } = useParams();
  useEffect(() => {
    getBacketPr();
  }, [backetPr]);

  return (
    <div id="backet">
      <Header />
      <Catalog />
      <div className="container">
        <div className="backet">
          <div className="nav">
            <span onClick={() => nav("/")}>Главная / </span>
            <span>Персональный раздел /</span>
            <span>Корзина</span>
          </div>
          <div className="backet-blocks">
            {backetPr.length === 0 ? (
              <h3 style={{ color: "red" }}>Ваша корзина пуста</h3>
            ) : (
              <div className="block">
                <h3>{getSum()} cом</h3>
                <button>Оформить заказ</button>
              </div>
            )}
          </div>
          <div className="backet-blocks">
            {backetPr.map((el) => (
              <div className="backet-block">
                <img
                  src={require(`../../assets/productImg/${el.image}`)}
                  alt="img"
                />
                <h2>{el.name}</h2>
                <span>{el.price} coм</span>
                <div className="count-blok">
                  <span onClick={() => subtr(el)}>-</span>
                  <span>{el.count}</span>

                  <span onClick={() => add(el)}>+</span>
                </div>
                <p>
                  {el.price * el.count} <span>cом</span>
                </p>
                <h3 onClick={() => delProduct(el.id)}>x</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Backet;

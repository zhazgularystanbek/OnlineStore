import React from "react";
import { useProductContext } from "../../MyContext";

const Footer = () => {
  const { getSum, backetPr, fav } = useProductContext();
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="help">
            <img src={require("../../assets/helpIcon.png")} alt="" />
            <span>Помощь</span>
          </div>
          <div className="footer-navs">
            <div className="watch">
              <img src={require("../../assets/watch.png")} alt="" />
              <p>Недавно просмотренные</p>
              <span>0</span>
            </div>
            <div className="watch">
              <img src={require("../../assets/fav-f.png")} alt="" />
              <p>Избранное</p>
              <span>{fav.length}</span>
            </div>
            <div className="watch">
              <img src={require("../../assets/backet-f.png")} alt="img" />
              <p>Товаров</p>
              <span>{backetPr.length}</span>
              <p>Сумма</p>
              <span>{getSum()} сом</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

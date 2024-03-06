import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../../MyContext";

const Header = () => {
  const [log, setLog] = useState("");
  const [pass, setPass] = useState("");
  const [truePass, setTruePass] = useState(false);
  const navigate = useNavigate();
  const [flag, setflag] = useState(false);
  const { backetPr, getBacketPr, getSum, addToFav, fav } = useProductContext();

  function getPass() {
    if (pass === "111" && log === "admin") {
      setTruePass(false);
      navigate("/admin");
      setPass("");
      setLog("");
      setflag(false);
    } else {
      setTruePass(true);
      setLog("");
      setPass("");
    }
  }
  function getPassWithEnter(e) {
    if (e.key === "Enter") {
      getPass();
    }
  }
  useEffect(() => {
    getBacketPr();
  }, []);

  return (
    <div id="header">
      <div className="line"></div>
      <div className="header">
        <div className="container">
          <div className="header__info">
            <div className="header__info__txt">
              <h3>Условия работы интернет-магазина</h3>
              <h3>Пользовательское соглашение</h3>
            </div>
            <div className="lock-b">
              <img src={require("../../assets/lock.png")} alt="" />
              <div className="lock-b__txt">
                <span onClick={() => setflag(!flag)}>Вход</span>
                <span>|</span>
                <span>Регистрация</span>
              </div>
            </div>
          </div>
          <div className="navs">
            <div className="navs__img">
              <img src={require("../../assets/logo.png")} alt="logo" />
              <div className="tel">
                <a href="tel:996550771199" className="numbers">
                  <img src={require("../../assets/telIcon.png")} alt="logo" />
                  <span>0 (550) 77-11-99</span>
                </a>
                <a href="tel:996550771199" className="numbers">
                  <img src={require("../../assets/telIcon.png")} alt="logo" />
                  <span>0 (772) 77-11-99</span>
                </a>
                <a href="tel:996502771199" className="numbers">
                  <img src={require("../../assets/telIcon.png")} alt="logo" />
                  <span>0 (502) 77-11-99</span>
                </a>
              </div>
            </div>
            <div className="navs__info">
              <div className="fav">
                <img src={require("../../assets/fav.png")} alt="logo" />
                <div className="fav__txt" onClick={() => navigate("/fav")}>
                  <span>Избранное</span>
                  <span>Товаров ({fav.length})</span>
                </div>
              </div>
              <div className="fav">
                <img src={require("../../assets/backet.png")} alt="logo" />
                <div className="fav__txt">
                  <span onClick={() => navigate(`/backet`)}>Корзина</span>
                  <span>
                    {backetPr.length > 0
                      ? `${backetPr.length} позиция на  ${getSum()} сом`
                      : "Ваша корзина пуста"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mod-block" style={{ display: flag ? "block" : "none" }}>
        <div className="modal">
          <div className="close" onClick={() => setflag(!flag)}>
            X
          </div>
          <h2>ВХОД</h2>
          <input
            type="text"
            placeholder="Номер телефона"
            value={log}
            onChange={(e) => setLog(e.target.value)}
          />
          <input
            type="text"
            placeholder="Пароль"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={(e) => getPassWithEnter(e)}
          />
          <p style={{ display: truePass ? "block" : "none" }}>
            *Неверный логин или пароль
          </p>
          <button onClick={getPass}>Войти</button>
          <button className="regist">Регистрация</button>
          <span>Не помните пароль?</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

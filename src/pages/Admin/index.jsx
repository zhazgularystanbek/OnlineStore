import React, { useState } from "react";
import { useProductContext } from "../../MyContext";
import { useNavigate } from "react-router-dom";
import uplImg from "../../assets/upload.jpg";

const Admin = () => {
  const { createProduct } = useProductContext();
  const [inputValue, setInputValue] = useState({
    image: "",
    name: "",
    price: "",
    category: "",
    art: "",
    inBacket: false,
    inFav: false,
    count: 0,
  });
  const nav = useNavigate();

  function handleCreateProduct() {
    if (
      inputValue.image !== "" &&
      inputValue.name !== "" &&
      inputValue.price !== "" &&
      inputValue.category !== "" &&
      inputValue.art !== ""
    ) {
      createProduct(inputValue);
      setInputValue({
        image: "",
        name: "",
        price: "",
        category: "",
        art: "",
        inBacket: false,
        inFav: false,
        count: 0,
      });

      alert("Товар добавлен в каталог");
    } else {
      alert("Заполните все поля!");
    }
  }

  function handleImageChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    setInputValue({ ...inputValue, image: file.name });
  }

  return (
    <div id="admin">
      <div className="container">
        <h1>Добавление товара</h1>
        <span onClick={() => nav("/")}>Перейти на главную</span>
        <div className="admin">
          <div className="admin-img">
            <input type="file" onChange={handleImageChange} />
            <div className="upl">
              <img
                src={
                  inputValue.image
                    ? require(`../../assets/productImg/${inputValue.image}`)
                    : uplImg
                }
                alt="logo"
              />
            </div>
          </div>
          <div className="admin-txt">
            <input
              type="text"
              placeholder="Название продукта"
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
              value={inputValue.name}
            />
            <div className="cp">
              <select
                onChange={(e) =>
                  setInputValue({ ...inputValue, category: e.target.value })
                }
              >
                <option value="choose" selected disabled hidden>
                  Выбрать категорию
                </option>
                <option value="Мясо, птица, рыба">Мясо, птица, рыба</option>
                <option value="Овощи, фрукты, орехи">
                  Овощи, фрукты, орехи
                </option>
                <option value="Хлеб, хлебобулочные изделия">
                  Хлеб, хлебобулочные изделия
                </option>
                <option value="Напитки">Напитки</option>
                <option value="Бакалея">Бакалея</option>
                <option value="Чай, кофе, какао, кисель">
                  Чай, кофе, какао, кисель
                </option>
                <option value="Кондитерские изделия">
                  Кондитерские изделия
                </option>
                <option value="Кулинария">Кулинария</option>
                <option value="Колбаса, сосиски">Колбаса, сосиски</option>
              </select>
              <input
                type="number"
                placeholder="Цена"
                onChange={(e) =>
                  setInputValue({ ...inputValue, price: e.target.value })
                }
                value={inputValue.price}
              />
            </div>
            <input
              type="text"
              placeholder="Артикул товара"
              onChange={(e) =>
                setInputValue({ ...inputValue, art: e.target.value })
              }
              value={inputValue.art}
            />
            <button onClick={handleCreateProduct}>Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

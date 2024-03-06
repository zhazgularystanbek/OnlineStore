import React, { useEffect } from "react";
import { useProductContext } from "../../../../MyContext";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { readProduct, product } = useProductContext();
  useEffect(() => {
    readProduct();
  }, []);
  const nav = useNavigate();
  function goToCat(el) {
    nav(`/catalog/${el.category}`);
  }
  return (
    <div id="list">
      <div className="container">
        <div className="products-block">
          <div className="category-block">
            {product.map((el) => (
              <div className="cat-block" onClick={() => goToCat(el)}>
                <p>{el.category}</p>
              </div>
            ))}
          </div>
          {/* <img src={require("../../../../assets/bg.png")} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default List;

import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const productContext = createContext();
export const useProductContext = () => useContext(productContext);

const MyContext = ({ children }) => {
  const API_PRODUCT = "http://localhost:3200/product";
  const API_BACKET = "http://localhost:3200/backet";
  const API_FAV = "http://localhost:3200/fav";

  const [product, setProduct] = useState([]);
  const [backetPr, setBacketPr] = useState([]);
  const [fav, setFav] = useState([]);

  //   Post
  async function createProduct(newProduct) {
    await axios.post(API_PRODUCT, newProduct);
  }

  async function createBacketProduct(newProduct) {
    const isProductInBacket = backetPr.some((pr) => pr.id === newProduct.id);
    const updatedProduct = { ...newProduct, inBacket: true };
    if (isProductInBacket) {
      return;
    } else {
      await axios.post(API_BACKET, updatedProduct);
    }
    await axios.put(`${API_PRODUCT}/${newProduct.id}`, updatedProduct);
    setProduct(
      product.map((pr) => (pr.id === newProduct.id ? updatedProduct : pr))
    );
    setBacketPr([...backetPr, updatedProduct]);
    readProduct();
    getBacketPr();
  }

  //   get
  async function readProduct() {
    let { data } = await axios(API_PRODUCT);
    setProduct(data);
  }
  async function getBacketPr() {
    let { data } = await axios(API_BACKET);
    setBacketPr(data);
  }
  async function getFav() {
    let { data } = await axios(API_FAV);
    setFav(data);
  }

  // setCount

  function add(el) {
    const updatedProduct = { ...el, count: el.count + 1 };
    axios.put(`${API_PRODUCT}/${el.id}`, updatedProduct).then(() => {
      setProduct(product.map((pr) => (pr.id === el.id ? updatedProduct : pr)));
      readProduct();
    });

    axios.put(`${API_BACKET}/${el.id}`, updatedProduct).then(() => {
      setBacketPr(product.map((pr) => (pr.id === el.id ? updatedProduct : pr)));
      getBacketPr();
    });
  }

  function subtr(el) {
    if (el.count === 0) {
      return;
    }
    const updatedProduct = { ...el, count: el.count - 1 };
    axios.put(`${API_PRODUCT}/${el.id}`, updatedProduct).then(() => {
      setProduct(product.map((pr) => (pr.id === el.id ? updatedProduct : pr)));
      readProduct();
    });
    axios.put(`${API_BACKET}/${el.id}`, updatedProduct).then(() => {
      setBacketPr(product.map((pr) => (pr.id === el.id ? updatedProduct : pr)));
      getBacketPr();
    });
  }
  //   fav
  function addToFav(el) {
    const updatedProduct = { ...el, inFav: !el.inFav };
    axios.put(`${API_PRODUCT}/${el.id}`, updatedProduct).then(() => {
      setProduct(product.map((pr) => (pr.id === el.id ? updatedProduct : pr)));
      readProduct();
    });
    if (el.inFav === false) {
      axios.post(API_FAV, el);
      setFav(...fav, el);
      getFav();
    } else {
      axios.delete(`${API_FAV}/${el.id}`);
      setFav(...fav, el);
      getFav();
    }
    return getFav();
  }
  //   getSum
  function getSum() {
    let sum1 = [];
    backetPr.map((el) => {
      return sum1.push(el.price * el.count);
    });
    sum1 = sum1.reduce((acc, el) => {
      return acc + el;
    }, 0);
    return sum1;
  }
  //   del
  async function delProduct(id) {
    await axios.delete(`${API_BACKET}/${id}`);
    setBacketPr(backetPr.filter((pr) => pr.id !== id));
    const updatedProduct = {
      ...product.find((pr) => pr.id === id),
      inBacket: false,
    };
    await axios.put(`${API_PRODUCT}/${id}`, updatedProduct);
    getBacketPr();
  }

  // values
  let values = {
    createProduct,
    readProduct,
    product,
    add,
    subtr,
    createBacketProduct,
    getBacketPr,
    backetPr,
    addToFav,
    getSum,
    delProduct,
    addToFav,
    fav,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default MyContext;

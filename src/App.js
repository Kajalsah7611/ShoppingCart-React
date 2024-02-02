import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem";
import './App.css';
function App() {
  const productList = [
    {
      price: 99999,
      name: "Iphone 14",
      quantity: 0,
    },

    {
      price: 9999,
      name: "Redmi 10 Max Pro",
      quantity: 0,
    },
  ];

  let [productsList, setProductList] = useState(productList);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productsList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productsList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = () => {
    let newProductList = [...productsList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productsList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const addItem = (name, price) => {
    let newProductList = [...productsList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });

    setProductList(newProductList);
  };

  let newProductList = [...productsList];
  const totalQuantity = newProductList.length;
  //console.log(totalQantity);

  return (
    <>
      <Navbar totalQuantity={totalQuantity} />
      <main className=" container mt-5 main-content">
        <h2>Items in cart are: </h2>
     
        <AddItem addItem={addItem} />
        
        <ProductList
          productList={productsList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>

      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;

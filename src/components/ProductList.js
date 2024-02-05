import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  //  console.log(props)   //gives array object of all the properties passed by app.js

    return (
        props.productList.length > 0 ?
        props.productList.map((product, i) => {
        return <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        index={i}
        decrementQuantity={props.decrementQuantity}
        removeItem={props.removeItem}
      />
         } ) : <h2>No Products Available!!!</h2>
  )
}

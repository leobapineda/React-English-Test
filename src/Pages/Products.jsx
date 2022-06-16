import React from "react";
import { Link } from "react-router-dom";
import products from "../components/Data";

function Products() {
  return (
    <div>
      <h1>products page</h1>
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <img style={{ width: "250px" }} src={product.image} />
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`} >See full recipe</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Products;

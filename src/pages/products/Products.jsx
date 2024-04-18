import React, { useEffect, useState } from "react";

import Card from "../../components/card/Card";
import { axiosConfig } from "../../axios/axiosConfig";

const Products = () => {
  const [products, setProducts] = useState([]);
  async function getAllProduct() {
    const { data } = await axiosConfig({
      url: "/products",
    });
    setProducts(data);
    console.log(data);
  }
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="product--container">
      
      
      <div className="items--contianer">
        {products.map((product, index) => (
          <Card key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;


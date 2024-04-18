import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { axiosConfig } from "../../axios/axiosConfig";


const ProductDetails = () => {
  const [productItem, setProductItem] = useState({});
  console.log(productItem);
  const { id } = useParams();
  async function getSigleProduct() {
    const { data } = await axiosConfig({
      url: `/products/${id}`,
    });
    setProductItem(data);
  }
  useEffect(() => {
    getSigleProduct();
  }, [id]);
  return (
    <div className="productDetails">
      
      <div className="product">
        <div className="image">
          {productItem.onSale ? <div className="discount">{Math.trunc(((productItem.old_price - productItem.new_price) / productItem.old_price) * 100)}%</div> : ""}
          <img src={productItem.img} alt="" />
        </div>
        <div className="description">
          <h4>{productItem.product_name}</h4>
          <p>{productItem.discription}</p>
          <div className="price">
            {productItem.onSale ? (
              <>
                <span>{productItem.new_price} EG</span>
                <del>{productItem.old_price} EG</del>
              </>
            ) : (
              <span>{productItem.old_price} EG</span>
            )}

            <button className="addToCart"> Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

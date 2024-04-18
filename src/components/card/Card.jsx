import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axiosConfig from "../../axios/axiosConfig"
import { toast } from 'react-hot-toast';
import { FaCartPlus } from "react-icons/fa6";

const Card = ({ data }) => {
  async function handleWishList(id) {
    const { data } = await axiosConfig({
      url: `/products/${id}`,
    });
    addToWishList(data);
    console.log(data);
  }
  async function addToWishList(result) {
    try {
      const { data } = await axiosConfig({
        url: "/wishList",
        method: "POST",
        data: result,
      });
      toast.success("Added To WishList");
    } catch (error) {
      toast.error(error.message);
      
    }
  }

  async function handleAddToCart(id) {
    try {
      const response = await axiosConfig({
        url: `/products/${id}`,
      });
      addToCart(response.data);
      toast.success('Added To Cart');
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function addToCart(result) {
    try {
      await axiosConfig({
        url: '/cart',
        method: 'POST',
        data: result,
      });
    } catch (error) {
      toast.error(error.message);
    }
  }
  
  return (
    <div className='card'>
      
      
      {data.onSale ? <div className="discount">{Math.trunc(((data.old_price - data.new_price) / data.old_price) * 100)}%</div> : ""}
      
      <div className="wishListIcon" onClick={() => handleWishList(data.id)}>
        <FaHeart />
        
      </div>
      
      <div className='addToCartIcon' onClick={() => handleAddToCart(data.id)}>
        <FaCartPlus />
      </div>
      
      <Link to={`/products/${data.id}`} className='product--name'><img src={data.img} alt="" /></Link>
      
    <div className="card--discription" ><h4>{data.product_name}</h4>
    <p>{data.discription.substring(0, 30)}...</p>
    <div className="price">
          {data.onSale ? (
            <>
              <span>{data.new_price} EG</span>
              <del>{data.old_price} EG</del>
            </>
          ) : (
            <span>{data.old_price} EG</span>
            
          )}
        </div>
        
      </div>
    </div>
  )
}

export default Card
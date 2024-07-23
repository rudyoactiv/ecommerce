import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Long Sleeve Graphic T-Shirt",
      desc: "Lorem ipsum dolor ",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/5417293/pexels-photo-5417293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/1162494/pexels-photo-1162494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Long Sleeve Graphic T-Shirt",
      desc: "Lorem ipsum dolor ",
      isNew: true,
      oldPrice: 20,
      newPrice: 14,
    },
  ];

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.newPrice}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>  
      <span className="reset">Reset Cart</span>    
    </div>
  );
};

export default Cart;

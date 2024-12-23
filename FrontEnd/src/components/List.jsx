import React, { useEffect, useState } from "react";
import "./components.css";
import Nav from "../components/Nav";
import axios from "axios";
import Swal from "sweetalert2";
import mockData from "../../../BackEnd/Data";
function List() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8777/cart")
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);
function Thank(){
  Swal.fire({
            title: `Thanks For Support`,
            text: "See You Soon",
            icon: "success",
          });
}
  const totalPrice = cartItems.reduce((sum, item) => sum + item.buyinglist, 0);

  return (
    <>
     <Nav />
      <div className="list-container">
        {/* My Cart Section */}
        <div className="buying">
          <h1>My Cart</h1>
          <div className="buying-list">
            {cartItems.map((item, index) => (
              <div className="order" key={index}>
                {/* Display Item Image */}
                <div className="order-details">
                  <h2>{item.title}</h2>
                  <p>${item.buyinglist.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="summary">
          <h1>📋 Summary</h1>
          <div className="price">
            <h3>Subtotal:</h3>
            <h3>${totalPrice.toFixed(2)}</h3>
          </div>
          <button className="btn btn-active btn-primary btn-wide" onClick={Thank}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default List;
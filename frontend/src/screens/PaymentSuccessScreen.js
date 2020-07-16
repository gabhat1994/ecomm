import React, { useEffect } from "react";
import { addToCart, removeFromCart, savePayment } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PaymentSuccess(props) {
  const backtToHomePage = () => {
    props.history.push("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Payment Successfull</h2>

      <button className="button primary " onClick={backtToHomePage}>
        Continue Shopping
      </button>
    </div>
  );
}

export default PaymentSuccess;

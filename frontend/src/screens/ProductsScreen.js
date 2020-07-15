import React, { Component, useEffect } from "react";
// import data from "../data";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  // const product = data.products.find((x) => x.id === props.match.params.id);
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to results</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product" />
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                {product.rating} Stars ({product.numReviews} Reviews)
              </li>
              <li>
                Price : <b>Rs {product.price}</b>
              </li>
              <li>
                Description :<div> {product.description} </div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price : {product.price}</li>
              <li>Status : {product.status}</li>
              <li>
                Qty :{" "}
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </li>
              <li>
                <button className="button"> Add to cart </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductScreen;

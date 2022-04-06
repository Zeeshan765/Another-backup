import React from "react";
import { useDispatch } from "react-redux";
import { addHdd } from "../../../Redux/cartRedux";
function HddComp({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card-container">
        <div className="card-upper-part">
          <img src={product.picture} alt="" />
        </div>
        <div className="card-lower-part">
          <h3>{product.name}</h3>
          <p>{product.company}</p>
          <h4>{product.price}</h4>
     
          <button
            className="view-btn"
            onClick={() => {
              dispatch(addHdd(product));
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default HddComp;

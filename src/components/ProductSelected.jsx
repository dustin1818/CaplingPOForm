import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const ProductSelected = () => {
  const { isDisabled, productQuantity } = useContext(FormContext);
  return (
    <div className="card_bottom">
      <button
        className={isDisabled ? "card_bottom_btn" : "card_bottom_btn selected"}
        disabled={isDisabled}
      >
        {productQuantity} product selected
      </button>
      <div className="card_bottom_btn_container">
        <button className="card_bottom_btn cancel">Cancel</button>
        <button
          className={
            isDisabled ? "card_bottom_btn add" : "card_bottom_btn add selected"
          }
          disabled={isDisabled}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductSelected;

import React, { useContext } from "react";
import { Toaster, toast } from "sonner";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import products from "../json/products";

const ProductSelected = () => {
  const {
    isDisabled,
    productQuantity,
    setProductsList,
    setIsDisabled,
    setProductQuantity,
    setSelected,
  } = useContext(FormContext);
  const navigate = useNavigate();
  const addProduct = () => {
    toast("Products added");
    navigate("/select");
  };
  const cancelProduct = () => {
    navigate("/");
    setProductsList(products);
    setIsDisabled(true);
    setProductQuantity([]);
    setSelected([]);
  };
  return (
    <div className="card_bottom">
      <button
        className={isDisabled ? "card_bottom_btn" : "card_bottom_btn selected"}
        disabled={isDisabled}
      >
        {productQuantity?.length} product selected
      </button>
      <div className="card_bottom_btn_container">
        <button className="card_bottom_btn cancel" onClick={cancelProduct}>
          Cancel
        </button>
        <Toaster />
        <button
          className={
            isDisabled ? "card_bottom_btn add" : "card_bottom_btn add selected"
          }
          disabled={isDisabled}
          onClick={addProduct}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductSelected;

import React, { useContext } from "react";
import { Toaster, toast } from "sonner";
import { FormContext } from "../context/FormContext";

const ProductSelected = () => {
  const { isDisabled, productQuantity } = useContext(FormContext);
  return (
    <div className="card_bottom">
      <button
        className={isDisabled ? "card_bottom_btn" : "card_bottom_btn selected"}
        disabled={isDisabled}
      >
        {productQuantity?.length} product selected
      </button>
      <div className="card_bottom_btn_container">
        <button className="card_bottom_btn cancel">Cancel</button>
        <Toaster />
        <button
          className={
            isDisabled ? "card_bottom_btn add" : "card_bottom_btn add selected"
          }
          disabled={isDisabled}
          onClick={() => toast("Products added")}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductSelected;

import React from "react";

const ProductSelected = () => {
  return (
    <div className="card_bottom">
      <div className="card_bottom_btn ">
        <p>0 product selected</p>
      </div>

      <div className="card_bottom_btn_container">
        <button className="card_bottom_btn cancel">Cancel</button>
        <button className="card_bottom_btn add" disabled>
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductSelected;

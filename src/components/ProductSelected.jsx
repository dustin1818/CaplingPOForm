import React, { useContext } from "react";
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
    openModal,
    setOpenModal,
    Toaster,
    toast,
  } = useContext(FormContext);
  const navigate = useNavigate();
  const addProduct = () => {
    const productNames = productQuantity.map((items) => items.name);
    const textComponent = (
      <p style={{ color: "#3E4760" }}>
        Add <span className="toaster-text">{productNames.join(", ")}</span>{" "}
        successfully.
      </p>
    );

    toast.success(textComponent);
    setTimeout(() => {
      navigate("/select");
    }, 1500);
  };
  const cancelProduct = () => {
    navigate("/");
    setOpenModal({
      ...openModal,
      open: false,
    });
    setProductsList(products);
    setIsDisabled(true);
    setProductQuantity([]);
    setSelected([]);
  };

  return (
    <>
      <div className="card_bottom">
        <button
          className={
            isDisabled ? "card_bottom_btn" : "card_bottom_btn selected"
          }
          disabled={isDisabled}
        >
          {productQuantity?.length} product selected
        </button>
        <div className="card_bottom_btn_container">
          <button className="card_bottom_btn cancel" onClick={cancelProduct}>
            Cancel
          </button>
          <button
            className={
              isDisabled
                ? "card_bottom_btn add"
                : "card_bottom_btn add selected"
            }
            disabled={isDisabled}
            onClick={addProduct}
          >
            ADD
          </button>
        </div>
      </div>
      <Toaster richColors />
    </>
  );
};

export default ProductSelected;

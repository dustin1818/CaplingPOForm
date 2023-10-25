import React, { useState } from "react";

const ChildProducts = ({
  selected,
  prod,
  subProdID,
  inputValue,
  productsList,
  childProducts,
  setSubProdID,
  setProductQuantity,
  setProductListSelected,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const selectInput = (prod) => {
    setIsChecked((prevState) => (prevState = true));
    childProducts.map((products) => {
      if (prod.id === products.id) {
        setSubProdID((prevState) => (prevState = prod.id));
        setProductQuantity((prevState) => (prevState = prod.quantity));
        setProductListSelected((prevState) => (prevState = prod));
        console.log(isChecked);
      }
    });
  };
  return (
    <div>
      {selected.id === prod.id && selected.display === true
        ? productsList.map((products) =>
            prod.id === products.id
              ? products.childProducts.map((prod) => (
                  <>
                    <p>
                      isChecked:{" "}
                      {isChecked && subProdID === prod.id
                        ? true.toString()
                        : false.toString()}
                    </p>
                    <div
                      className="product_list_container_name_wrapper_inner"
                      key={prod.id}
                    >
                      <div className="product_list_container_name_wrapper_inner_div2">
                        <input
                          type="checkbox"
                          checked={
                            isChecked && subProdID === prod.id ? true : false
                          }
                        />
                        <div className="product_list_container_name_wrapper_inner_div1_holder">
                          <p
                            className="product-text"
                            style={{
                              textTransform: "capitalize",
                            }}
                          >
                            {prod.name}
                          </p>
                          <p className="product-subtext"> SKU: {prod.sku}</p>
                        </div>
                      </div>
                      <input
                        className={`product-number-input ${
                          isChecked && subProdID === prod.id ? "active" : ""
                        }`}
                        type="number"
                        value={inputValue}
                        // onChange={() => changeInput(prod)}
                        onClick={() => selectInput(prod)}
                      />
                    </div>
                    <hr style={{ border: "solid 1px #e5e5e5" }} />{" "}
                  </>
                ))
              : null
          )
        : null}
    </div>
  );
};

export default ChildProducts;

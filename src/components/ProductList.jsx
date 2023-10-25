import { useState, useContext } from "react";
import { FormContext } from "../context/FormContext";
import Img from "../assets/image.svg";
import downArrow from "../assets/chevron-down.png";

const ProductList = () => {
  const { productsList, setIsDisabled } = useContext(FormContext);
  const [selected, setSelected] = useState([]);

  // state count 0
  const [childProducts, setChildProducts] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const [productListSelected, setProductListSelected] = useState([]);

  const getProduct = (id) => {
    productsList.map((products) => {
      if (products.id === id) {
        setChildProducts((previousState) => {
          return [...previousState];
        });
        setIsChecked(Array.from({ length: childProducts.length }, () => false));
        setInputValue(Array.from({ length: childProducts.length }, () => 0));
        setSelected((_previousState) => {
          const found = _previousState.find((item) => item.id === id);
          if (!found) {
            return productsList.map((item) => {
              if (item.id === id) {
                return { id: item.id, display: true };
              } else {
                return { id: item.id, display: false };
              }
            });
          }
          return productsList.map((item) => {
            if (item.id === id) {
              return { id: item.id, display: !found.display };
            } else {
              return { id: item.id, display: false };
            }
          });
        });
      }
    });
  };

  const selectInput = (value, index,prod) => {
    setIsDisabled((previousState) => previousState=false);
    setIsChecked((prevState) => {
      const _previousState = [...prevState];
      if (value !== null) {
        _previousState[index] = value;
        setProductListSelected([
          ...productListSelected,
          prod
        ])
      } else {
        _previousState[index] = !_previousState[index];
      }
      return _previousState;
    });
  };

  const updateValue = (value, index) => {
    setInputValue((prevState) => {
      const _previousState = [...prevState];
      _previousState[index] = value;
      return _previousState;
    });
  };

  console.log(productListSelected)
  return (
    <div className="product_list_container">
      <div className="product_list_container_name">
        {Array.isArray(productsList)
          ? productsList.map((prod, index) => (
              <div
                className={`product_list_container_name_wrapper ${
                  selected[index]?.id === prod.id ? "selected" : ""
                }`}
                style={{
                  position: "relative",
                }}
                key={prod.id}
              >
                <span
                  style={{
                    position: "absolute",
                    background: "transparent",
                    height: "4rem",
                    top: 0,
                    left: 0,
                    width: "100%",
                  }}
                  onClick={() => getProduct(prod.id)}
                ></span>
                <div className="product_list_container_name_wrapper_inner">
                  <div className="product_list_container_name_wrapper_inner_div1">
                    <img src={Img} alt="image.svg" />
                    <div className="product_list_container_name_wrapper_inner_div1_holder">
                      <p className="product-text">{prod.name}</p>
                      <p className="product-subtext">ID: {prod.id}</p>
                    </div>
                  </div>
                  {selected[index]?.id === prod.id &&
                  selected[index]?.display === true ? (
                    <img src={downArrow} alt="chevron-down.png" />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M5.625 11.25L9.375 7.5L5.625 3.75"
                        stroke={
                          selected[index]?.id === prod.id
                            ? "#ffffff"
                            : "#C4C4C4"
                        }
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <hr style={{ border: "solid 1px #e5e5e5" }} />
                <div>
                  {selected[index]?.id === prod.id &&
                  selected[index]?.display === true
                    ? productsList.map((products) =>
                        prod.id === products.id
                          ? products.childProducts.map((prod, index) => (
                              <>
                                <div
                                  className={`product_list_container_name_wrapper_inner ${
                                    isChecked[index] ? "active" : ""
                                  }`}
                                  key={prod.id}
                                >
                                  <div className="product_list_container_name_wrapper_inner_div2">
                                    <input
                                      className={`product_list_checkbox ${
                                        isChecked[index] ? "active" : "null"
                                      }`}
                                      type="checkbox"
                                      checked={isChecked[index]}
                                      onClick={() => selectInput(null, index)}
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
                                      <p className="product-subtext">
                                        {" "}
                                        SKU: {prod.sku}
                                      </p>
                                    </div>
                                  </div>
                                  <input
                                    className={
                                      isChecked[index]
                                        ? "product-number-input active"
                                        : "product-number-input"
                                    }
                                    type="number"
                                    value={inputValue[index]}
                                    placeholder="1"
                                    onChange={(e) => {
                                      updateValue(e.target.value, index);
                                      selectInput(true, index)
                                    }}
                                    onSelect={()=> selectInput(true, index,prod)}
                                  />
                                </div>
                                <hr
                                  style={
                                    isChecked[index]
                                      ? { border: "solid 1px #FFF" }
                                      : { border: "solid 1px #e5e5e5" }
                                  }
                                />{" "}
                              </>
                            ))
                          : null
                      )
                    : null}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProductList;

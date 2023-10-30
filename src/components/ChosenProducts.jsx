import { useState, useContext } from "react";
import { useRef } from "react";
import { FormContext } from "../context/FormContext";
import Img from "../assets/image.svg";

const ProductList = () => {
  const {
    setIsDisabled,
    productQuantity,
    setProductQuantity,
    selected,
    Toaster,
    toast,
  } = useContext(FormContext);
  const [inputValue, setInputValue] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const [inHover, setHover] = useState([]);
  const inputRef = useRef(null);

  const setInputActive = (value, index, prod) => {
    setIsDisabled((previousState) => (previousState = false));
    setIsChecked((prevState) => {
      const _previousState = [...prevState];
      if (value !== null) {
        _previousState[index] = value;
        setProductQuantity(() => {
          const addedProduct = [...productQuantity, { ...prod, inputNum: 1 }];
          const productExists = productQuantity.some(
            (item) => item.id === prod.id
          );
          if (productExists) {
            return productQuantity;
          } else {
            return addedProduct;
          }
        });
      } else {
        _previousState[index] = !_previousState[index];
      }
      return _previousState;
    });
  };

  const updateValue = (value, index, prod) => {
    setInputValue((prevState) => {
      const _previousState = [...prevState];
      _previousState[index] = value;
      setProductQuantity(
        productQuantity.map((item) => {
          if (item.id === prod.id) {
            return { ...item, inputNum: _previousState[index] };
          } else {
            return item;
          }
        })
      );
      return _previousState;
    });
  };

  const hoverItem = (value, index) => {
    setHover(() => {
      const _previousState = { ...inHover };
      if (value !== null) {
        _previousState[index] = value;
      } else {
        _previousState[index] = !_previousState[index];
      }
      return _previousState;
    });
  };

  const deleteProduct = (prod) => {
    setProductQuantity(productQuantity.filter((item) => item.id !== prod.id));
    const textComponent = (
      <p style={{ color: "#3E4760" }}>
        Delete <span className="toaster-text">{prod.name}</span> successfully.
      </p>
    );
    toast(textComponent);
  };

  return (
    <div className="product_list_container">
      <div className="product_selected_list_container_name">
        {Array.isArray(productQuantity) && productQuantity.length !== 0 ? (
          productQuantity.map((prod, index) => (
            <div
              className={`product_list_container_name_wrapper ${
                selected[index]?.id === prod.id &&
                selected[index]?.display === true
                  ? "selected"
                  : ""
              }`}
              style={{
                position: "relative",
              }}
              key={prod.id}
              onMouseEnter={() => hoverItem(true, index)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="product_list_container_name_wrapper_inner">
                <div className="product_list_container_name_wrapper_inner_div1">
                  <div className="product_list_container_left_wrapper">
                    <p>{index + 1}</p>
                    <img src={Img} alt="image.svg" />
                  </div>
                  <div className="product_list_container_name_wrapper_inner_div1_holder">
                    <p className="product-text">{prod.name}</p>
                    <p className="product-subtext">ID: {prod.id}</p>
                  </div>
                </div>

                <div className="product_list_container_name_input_wrapper">
                  <input
                    className={
                      isChecked[index]
                        ? "product-number-input active"
                        : "product-number-input"
                    }
                    type="number"
                    ref={inputRef}
                    value={prod.inputNum}
                    placeholder="1"
                    onChange={(e) => {
                      updateValue(e.target.value, index, prod);
                    }}
                    onSelect={() => setInputActive(true, index, prod)}
                  />
                  {inHover[index] ? (
                    <button onClick={() => deleteProduct(prod)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M2.5 5H4.16667H17.5"
                          stroke="#3E4760"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.66602 5.00008V3.33341C6.66602 2.89139 6.84161 2.46746 7.15417 2.1549C7.46673 1.84234 7.89066 1.66675 8.33268 1.66675H11.666C12.108 1.66675 12.532 1.84234 12.8445 2.1549C13.1571 2.46746 13.3327 2.89139 13.3327 3.33341V5.00008M15.8327 5.00008V16.6667C15.8327 17.1088 15.6571 17.5327 15.3445 17.8453C15.032 18.1578 14.608 18.3334 14.166 18.3334H5.83268C5.39065 18.3334 4.96673 18.1578 4.65417 17.8453C4.34161 17.5327 4.16602 17.1088 4.16602 16.6667V5.00008H15.8327Z"
                          stroke="#3E4760"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.33398 9.16675V14.1667"
                          stroke="#3E4760"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.666 9.16675V14.1667"
                          stroke="#3E4760"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : null}
                </div>
              </div>
              <hr style={{ border: "solid 1px #e5e5e5" }} />
              <Toaster />
            </div>
          ))
        ) : (
          <p className="card-warning-text">No more selected products!</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;

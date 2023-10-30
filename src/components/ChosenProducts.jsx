import { useState, useContext } from "react";
import { useRef } from "react";
import { FormContext } from "../context/FormContext";
import Img from "../assets/image.svg";

const ProductList = () => {
  const {
    productsList,
    setIsDisabled,
    productQuantity,
    setProductQuantity,
    selected,
    setSelected,
  } = useContext(FormContext);
  // state count 0
//   const [childProducts, setChildProducts] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [isChecked, setIsChecked] = useState([]);

  const inputRef = useRef(null);

//   const getProduct = (id) => {
//     productsList.map((products) => {
//       if (products.id === id) {
//         setChildProducts((previousState) => {
//           return [...previousState];
//         });
//         setIsChecked(Array.from({ length: childProducts.length }, () => false));
//         setInputValue(Array.from({ length: childProducts.length }, () => 0));
//         setSelected((_previousState) => {
//           const found = _previousState.find((item) => item.id === id);
//           if (!found) {
//             return productsList.map((item) => {
//               if (item.id === id) {
//                 return { id: item.id, display: true };
//               } else {
//                 return { id: item.id, display: false };
//               }
//             });
//           }
//           return productsList.map((item) => {
//             if (item.id === id) {
//               return { id: item.id, display: !found.display };
//             } else {
//               return { id: item.id, display: false };
//             }
//           });
//         });
//       }
//     });
//   };

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
        if (_previousState[index] === false) {
          console.log(false);
        } else {
          console.log(true);
        }
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

  return (
    <div className="product_list_container">
      <div className="product_list_container_name">
        {Array.isArray(productQuantity)
          ? productQuantity.map((prod, index) => (
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
              >
                {/* <span
                  style={{
                    position: "absolute",
                    background: "transparent",
                    height: "4rem",
                    top: 0,
                    left: 0,
                    width: "100%",
                  }}
                  onClick={() => getProduct(prod.id)}
                ></span> */}
                <div className="product_list_container_name_wrapper_inner">
                  <div className="product_list_container_name_wrapper_inner_div1">
                    <img src={Img} alt="image.svg" />
                    <div className="product_list_container_name_wrapper_inner_div1_holder">
                      <p className="product-text">{prod.name}</p>
                      <p className="product-subtext">ID: {prod.id}</p>
                    </div>
                  </div>

                  <input
                    className={
                      isChecked[index]
                        ? "product-number-input active"
                        : "product-number-input"
                    }
                    type="number"
                    ref={inputRef}
                    value={inputValue[index]}
                    placeholder="1"
                    onChange={(e) => {
                      updateValue(e.target.value, index, prod);
                    }}
                    onSelect={() => setInputActive(true, index, prod)}
                  />
                </div>
                <hr style={{ border: "solid 1px #e5e5e5" }} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ProductList;

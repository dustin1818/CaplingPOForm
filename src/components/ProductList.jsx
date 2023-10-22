import { useState, useContext, useEffect } from "react";
import { FormContext } from "../context/FormContext";
import Img from "../assets/image.svg";
import downArrow from "../assets/chevron-down.png";

const ProductList = () => {
  const {
    productsList,
    supplierList,
    setIsDisabled,
    setProductQuantity,
    setSupplierList,
  } = useContext(FormContext);
  const [selected, setSelected] = useState({
    id: 0,
    display: false,
  });

  const [childProducts, setChildProducts] = useState([]);
  const [inputValue, setInputValue] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [subProdID, setSubProdID] = useState(0);
  const [productListSelected, setProductListSelected] = useState([]);

  const getProduct = (id) => {
    setIsDisabled((prevState) => (prevState = false));
    productsList.map((products) => {
      if (products.id === id) {
        setSelected({ id: id, display: true });
        setChildProducts((prevState) => (prevState = products.childProducts));
        // setIsChecked(false);
      }
    });
  };

  const selectInput = (prod) => {
    setIsChecked((prevState) => (prevState = true));
    childProducts.map((products) => {
      if (prod.id === products.id) {
        setSubProdID((prevState) => (prevState = prod.id));
        setProductQuantity((prevState) => (prevState = prod.quantity));
        setProductListSelected((prevState) => (prevState = prod));
        console.log(productListSelected);
      }
    });
  };

  // const changeInput = (prod) => {
  //   console.log("changed");
  //   // if()
  // };

  // console.log(childProducts);
  return (
    <div className="product_list_container">
      <div className="product_list_container_name">
        {Array.isArray(productsList)
          ? productsList.map((prod) => (
              <div
                className={`product_list_container_name_wrapper ${
                  selected.id === prod.id ? "selected" : ""
                }`}
                key={prod.id}
                onClick={() => getProduct(prod.id)}
              >
                <div className="product_list_container_name_wrapper_inner">
                  <div className="product_list_container_name_wrapper_inner_div1">
                    <img src={Img} alt="image.svg" />
                    <div className="product_list_container_name_wrapper_inner_div1_holder">
                      <p className="product-text">{prod.name}</p>
                      <p className="product-subtext">ID: {prod.id}</p>
                    </div>
                  </div>
                  {selected.id === prod.id && selected.display === true ? (
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
                        stroke={selected === prod.id ? "#ffffff" : "#C4C4C4"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <hr style={{ border: "solid 1px #e5e5e5" }} />
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
                                        isChecked && subProdID === prod.id
                                          ? true
                                          : false
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
                                      <p className="product-subtext">
                                        {" "}
                                        SKU: {prod.sku}
                                      </p>
                                    </div>
                                  </div>
                                  {isChecked ? (
                                    <input
                                      className="product-number-input active"
                                      type="number"
                                      value={inputValue}
                                      // onChange={() => changeInput(prod)}
                                      onClick={() => selectInput(prod)}
                                    />
                                  ) : (
                                    <input
                                      className="product-number-input"
                                      type="number"
                                      value={inputValue}
                                      // onChange={() => changeInput(prod)}
                                      onClick={() => selectInput(prod)}
                                    />
                                  )}
                                </div>
                                <hr style={{ border: "solid 1px #e5e5e5" }} />{" "}
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

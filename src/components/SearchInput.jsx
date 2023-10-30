import { useState, useContext } from "react";
import { FormContext } from "../context/FormContext";
FormContext;
import suppliers from "../json/suppliers";
import products from "../json/products";

const SearchInput = () => {
  const {
    openModal,
    productsList,
    setProductsList,
    setSupplierList,
    supplierList,
  } = useContext(FormContext);
  const [productInputVal, setProductInputVal] = useState("");
  const [supplierInputVal, setSupplierInputVal] = useState("");
  const [oldList, setOldList] = useState(productsList);

  const searchSupplier = (e) => {
    setSupplierInputVal(() => {
      const value = e.target.value.trim();
      setSupplierList(() => {
        if (value !== "") {
          const arr = [...supplierList];
          const findSupplier = arr?.filter((supplier) =>
            supplier.name.toLowerCase().includes(value.toLowerCase())
          );
          return findSupplier;
        } else {
          return suppliers;
        }
      });
      return value;
    });
  };

  const searchProducts = (e) => {
    setProductInputVal(() => {
      const value = e.target.value.trim();
      setProductsList(() => {
        if (value !== "") {
          const arr = [...productsList];
          const findProducts = arr?.filter((supplier) =>
            supplier.name.toLowerCase().includes(value.toLowerCase())
          );
          return findProducts;
        } else {
          return oldList;
        }
      });
      return value;
    });
  };

  return (
    <>
      {openModal.open ? (
        /* for products  */
        <div className="search_input_container">
          <div className="search_input_container_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                stroke="#3E4760"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 17.5L13.875 13.875"
                stroke="#3E4760"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search products"
            value={productInputVal}
            onChange={searchProducts}
          />
        </div>
      ) : (
        /* for suppliers  */
        <div className="search_input_container">
          <div className="search_input_container_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                stroke="#3E4760"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 17.5L13.875 13.875"
                stroke="#3E4760"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search supplier"
            onChange={searchSupplier}
            value={supplierInputVal}
          />
        </div>
      )}
    </>
  );
};

export default SearchInput;

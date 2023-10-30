import SearchInput from "./SearchInput";
import ProductSelected from "./ProductSelected";
import SupplierList from "./SupplierList";
import products from "../json/products";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

const CardSuppliers = () => {
  const {
    openModal,
    setProductsList,
    setIsDisabled,
    setOpenModal,
    setProductQuantity,
    setSelected,
  } = useContext(FormContext);
  const cancelProduct = () => {
    const navigate = useNavigate();
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
      <div className="card">
        <div className="card_upper">
          <h1 className="card_heading">Browse</h1>
          <div className="card_heading_icon_container">
            <button
              className="card_heading_icon_container_btn_x"
              style={{ cursor: "pointer", marginLeft: "auto" }}
              onClick={cancelProduct}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="x">
                  <path
                    id="Vector"
                    d="M15 5L5 15"
                    stroke="#7B7B7B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M5 5L15 15"
                    stroke="#7B7B7B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <SearchInput />
        </div>
        <hr style={{ marginTop: "24px" }} />
        <SupplierList />
        <hr style={{ marginTop: "24px" }} />
        <ProductSelected />
      </div>
    </>
  );
};

export default CardSuppliers;

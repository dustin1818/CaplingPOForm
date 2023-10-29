import SearchInput from "./SearchInput";
import ProductSelected from "./ProductSelected";
import SupplierList from "./SupplierList";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const CardSuppliers = () => {
  const { openModal } = useContext(FormContext);
  return (
    <>
      <div className="card">
        <div className="card_upper">
          <h1 className="card_heading">Browse</h1>
          <div className="card_heading_icon_container">
            <button
              className="card_heading_icon_container_btn_x"
              style={{ cursor: "pointer", marginLeft: "auto" }}
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
          <SearchInput openModal={openModal} />
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

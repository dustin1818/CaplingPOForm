import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import SearchInput from "../components/SearchInput";
import ProductSelected from "./ProductSelected";
import SupplierList from "./SupplierList";
import suppliers from "../json/suppliers";
import products from "../json/products";

const Card = () => {
  const [supplierList, setSupplierList] = useState(suppliers);
  const [productsList, setProductsList] = useState(products);
  const [openModal, setOpenModal] = useState({
    modalName: "",
    open: false,
  });
  const nodeRef = useRef(null);
  return (
    <>
      {!openModal.open && (
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
            <SearchInput />
          </div>
          <hr style={{ marginTop: "24px" }} />
          <SupplierList
            supplierList={supplierList}
            productsList={productsList}
            setOpenModal={setOpenModal}
          />
          <hr style={{ marginTop: "24px" }} />
          <ProductSelected />
        </div>
      )}
      <CSSTransition
        in={openModal.open}
        classNames="cards"
        timeout={500}
        nodeRef={nodeRef}
        onEnter={() =>
          setOpenModal({
            modalName: openModal.modalName,
            open: true,
          })
        }
        onExited={() =>
          setOpenModal({
            modalName: "",
            open: false,
          })
        }
      >
        <div
          className="card"
          ref={nodeRef}
          style={openModal.open ? { display: "block" } : { display: "none" }}
        >
          <div className="card_upper">
            <h1 className="card_heading">
              Creative {openModal?.modalName} Services
            </h1>
            <div className="card_heading_icon_container">
              <button
                className="card_heading_icon_container_btn_left_arrow"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenModal({
                    name: "Browse",
                    open: false,
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.6673 8L3.33398 8"
                    stroke="#7B7B7B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.00065 12.6667L3.33398 8.00004L8.00065 3.33337"
                    stroke="#7B7B7B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
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
            <SearchInput />
          </div>
          <hr style={{ marginTop: "24px" }} />
          <SupplierList
            supplierList={supplierList}
            productsList={productsList}
          />
          <hr style={{ marginTop: "24px" }} />
          <ProductSelected />
        </div>
      </CSSTransition>
    </>
  );
};

export default Card;

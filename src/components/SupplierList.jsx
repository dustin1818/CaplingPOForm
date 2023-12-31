import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
const SupplierList = () => {
  const { supplierList, productsList, setOpenModal, setProductsList } =
    useContext(FormContext);
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  // get supplier products
  const getSupplierProduct = (id) => {
    productsList.data.find((product) =>
      product.supplierId === id ? setSelected(product.supplierId) : null
    );
    setTimeout(() => {
      setOpenModal({
        modalName: supplierList.map((supplier) =>
          supplier.id === id ? supplier.name : ""
        ),
        open: true,
      });
      setProductsList((prevState) => {
        const productID = prevState?.data.filter(
          (prodId) => id === prodId.supplierId
        );
        return productID;
      });
      navigate("/products");
    }, 350);
  };

  return (
    <div className="supplier_list_container">
      <div className="supplier_list_container_name">
        {supplierList &&
          supplierList.map((supplier) => (
            <div
              className={`supplier_list_container_name_wrapper ${
                selected === supplier.id ? "selected" : ""
              }`}
              key={supplier.id}
              onClick={() => getSupplierProduct(supplier.id)}
            >
              <div className="supplier_list_container_name_wrapper_inner">
                <p>{supplier.name}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M5.625 11.25L9.375 7.5L5.625 3.75"
                    stroke={selected === supplier.id ? "#ffffff" : "#C4C4C4"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <hr
                style={
                  selected === supplier.id
                    ? { border: "solid 1px #2f8df8fc" }
                    : { border: "solid 1px #e5e5e5" }
                }
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SupplierList;

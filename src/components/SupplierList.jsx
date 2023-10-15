import { useState } from "react";

const SupplierList = ({ supplierList, productsList }) => {
  let supplierProducts;
  const [selected, setSelected] = useState(false);
  const getSupplierProduct = (id) => {
    productsList.data.filter((product) =>
      product.supplierId === id ? (supplierProducts = product) : null
    );
    setSelected(true);
    console.log("works");
  };
  return (
    <div className="supplier_list_container">
      <div className="supplier_list_container_name">
        {supplierList &&
          supplierList.map((supplier) => (
            <div
              className={`supplier_list_container_name_wrapper ${
                selected ? "selected" : ""
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
                    stroke="#C4C4C4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SupplierList;

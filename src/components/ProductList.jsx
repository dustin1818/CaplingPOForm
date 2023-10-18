import { useState, useContext } from "react";
import { FormContext } from "../context/FormContext";
const ProductList = () => {
  const { chosenProductList, setChosenProductList } = useContext(FormContext);
  const [selected, setSelected] = useState(0);
  return (
    <></>
    // <div className="supplier_list_container">
    //   <div className="supplier_list_container_name">
    //     {productsList &&
    //       productsList.map((product) => (
    //         <div
    //           className={`supplier_list_container_name_wrapper ${
    //             selected === product.id ? "selected" : ""
    //           }`}
    //           key={product.id}
    //           onClick={() => getSupplierProduct(product.id)}
    //         >
    //           <div className="supplier_list_container_name_wrapper_inner">
    //             <p>{product.name}</p>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="15"
    //               height="15"
    //               viewBox="0 0 15 15"
    //               fill="none"
    //             >
    //               <path
    //                 d="M5.625 11.25L9.375 7.5L5.625 3.75"
    //                 stroke={selected === product.id ? "#ffffff" : "#C4C4C4"}
    //                 strokeWidth="1.5"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //               />
    //             </svg>
    //           </div>
    //           <hr
    //             style={
    //               selected === product.id
    //                 ? { border: "solid 1px #2f8df8fc" }
    //                 : { border: "solid 1px #e5e5e5" }
    //             }
    //           />
    //         </div>
    //       ))}
    //   </div>
    // </div>
  );
};

export default ProductList;

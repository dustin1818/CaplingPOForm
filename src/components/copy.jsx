// import { useState, useContext, useEffect } from "react";
// import { FormContext } from "../context/FormContext";
// import Img from "../assets/image.svg";
// import downArrow from "../assets/chevron-down.png";
// import ChildProducts from "./ChildProducts";

// const cpoy = () => {
//   const {
//     productsList,
//     supplierList,
//     setIsDisabled,
//     setProductQuantity,
//     setSupplierList,
//   } = useContext(FormContext);
//   const [selected, setSelected] = useState({
//     id: 0,
//     display: false,
//   });

//   const [childProducts, setChildProducts] = useState([]);
//   const [inputValue, setInputValue] = useState(1);
//   const [subProdID, setSubProdID] = useState(0);
//   const [productListSelected, setProductListSelected] = useState([]);

//   const getProduct = (id) => {
//     setIsDisabled((prevState) => (prevState = false));
//     productsList.map((products) => {
//       if (products.id === id) {
//         setSelected({ id: id, display: true });
//         setChildProducts((prevState) => (prevState = products.childProducts));
//         // setIsChecked(false);
//       }
//     });
//   };

//   return (
//     <div className="product_list_container">
//       <div className="product_list_container_name">
//         {Array.isArray(productsList)
//           ? productsList.map((prod) => (
//               <div
//                 className={`product_list_container_name_wrapper ${
//                   selected.id === prod.id ? "selected" : ""
//                 }`}
//                 key={prod.id}
//                 onClick={() => getProduct(prod.id)}
//               >
//                 <div className="product_list_container_name_wrapper_inner">
//                   <div className="product_list_container_name_wrapper_inner_div1">
//                     <img src={Img} alt="image.svg" />
//                     <div className="product_list_container_name_wrapper_inner_div1_holder">
//                       <p className="product-text">{prod.name}</p>
//                       <p className="product-subtext">ID: {prod.id}</p>
//                     </div>
//                   </div>
//                   {selected.id === prod.id && selected.display === true ? (
//                     <img src={downArrow} alt="chevron-down.png" />
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="15"
//                       height="15"
//                       viewBox="0 0 15 15"
//                       fill="none"
//                     >
//                       <path
//                         d="M5.625 11.25L9.375 7.5L5.625 3.75"
//                         stroke={selected === prod.id ? "#ffffff" : "#C4C4C4"}
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   )}
//                 </div>
//                 <hr style={{ border: "solid 1px #e5e5e5" }} />
//                 <ChildProducts
//                   selected={selected}
//                   prod={prod}
//                   subProdID={subProdID}
//                   inputValue={inputValue}
//                   productsList={productsList}
//                   childProducts={childProducts}
//                   setSubProdID={setSubProdID}
//                   setProductQuantity={setProductQuantity}
//                   setProductListSelected={setProductListSelected}
//                 />
//               </div>
//             ))
//           : null}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
// import { useState, useContext, useEffect } from "react";
// import { FormContext } from "../context/FormContext";
// import Img from "../assets/image.svg";
// import downArrow from "../assets/chevron-down.png";
// import ChildProducts from "./ChildProducts";

// const ProductList = () => {
//   const {
//     productsList,
//     supplierList,
//     setIsDisabled,
//     setProductQuantity,
//     setSupplierList,
//   } = useContext(FormContext);
//   const [selected, setSelected] = useState({
//     id: 0,
//     display: false,
//   });

//   const [childProducts, setChildProducts] = useState([]);
//   const [inputValue, setInputValue] = useState(1);
//   const [subProdID, setSubProdID] = useState(0);
//   const [productListSelected, setProductListSelected] = useState([]);

//   const getProduct = (id) => {
//     setIsDisabled((prevState) => (prevState = false));
//     productsList.map((products) => {
//       if (products.id === id) {
//         setSelected({ id: id, display: true });
//         setChildProducts((prevState) => (prevState = products.childProducts));
//         // setIsChecked(false);
//       }
//     });
//   };

//   return (
//     <div className="product_list_container">
//       <div className="product_list_container_name">
//         {Array.isArray(productsList)
//           ? productsList.map((prod) => (
//               <div
//                 className={`product_list_container_name_wrapper ${
//                   selected.id === prod.id ? "selected" : ""
//                 }`}
//                 key={prod.id}
//                 onClick={() => getProduct(prod.id)}
//               >
//                 <div className="product_list_container_name_wrapper_inner">
//                   <div className="product_list_container_name_wrapper_inner_div1">
//                     <img src={Img} alt="image.svg" />
//                     <div className="product_list_container_name_wrapper_inner_div1_holder">
//                       <p className="product-text">{prod.name}</p>
//                       <p className="product-subtext">ID: {prod.id}</p>
//                     </div>
//                   </div>
//                   {selected.id === prod.id && selected.display === true ? (
//                     <img src={downArrow} alt="chevron-down.png" />
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="15"
//                       height="15"
//                       viewBox="0 0 15 15"
//                       fill="none"
//                     >
//                       <path
//                         d="M5.625 11.25L9.375 7.5L5.625 3.75"
//                         stroke={selected === prod.id ? "#ffffff" : "#C4C4C4"}
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   )}
//                 </div>
//                 <hr style={{ border: "solid 1px #e5e5e5" }} />
//                 <ChildProducts
//                   selected={selected}
//                   prod={prod}
//                   subProdID={subProdID}
//                   inputValue={inputValue}
//                   productsList={productsList}
//                   childProducts={childProducts}
//                   setSubProdID={setSubProdID}
//                   setProductQuantity={setProductQuantity}
//                   setProductListSelected={setProductListSelected}
//                 />
//               </div>
//             ))
//           : null}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

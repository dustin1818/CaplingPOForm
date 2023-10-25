import CardSuppliers from "./components/CardSuppliers";
import suppliers from "./json/suppliers";
import products from "./json/products";
import CardProducts from "./components/CardProducts";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { FormContext } from "./context/FormContext";
function App() {
  const [supplierList, setSupplierList] = useState(suppliers);
  const [productsList, setProductsList] = useState(products);
  const [openModal, setOpenModal] = useState({
    modalName: "",
    open: false,
  });
  const nodeRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [productQuantity, setProductQuantity] = useState([]);
  return (
    <div style={{ padding: "50px" }}>
      <FormContext.Provider
        value={{
          openModal,
          supplierList,
          setSupplierList,
          productsList,
          setProductsList,
          setOpenModal,
          nodeRef,
          CSSTransition,
          isDisabled,
          setIsDisabled,
          productQuantity,
          setProductQuantity,
        }}
      >
        <CardSuppliers />
        <CardProducts />
      </FormContext.Provider>
    </div>
  );
}

export default App;

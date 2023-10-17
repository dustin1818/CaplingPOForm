import CardSuppliers from "./components/CardSuppliers";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import suppliers from "./json/suppliers";
import products from "./json/products";
import CardProducts from "./components/CardProducts";
import { FormContext } from "./context/FormContext";
function App() {
  const [supplierList, setSupplierList] = useState(suppliers);
  const [productsList, setProductsList] = useState(products);
  const [openModal, setOpenModal] = useState({
    modalName: "",
    open: false,
  });
  const nodeRef = useRef(null);
  return (
    <div style={{ padding: "50px" }}>
      <FormContext.Provider
        value={{
          openModal,
          supplierList,
          productsList,
          setOpenModal,
          nodeRef,
          CSSTransition,
        }}
      >
        <CardSuppliers />
        <CardProducts />
      </FormContext.Provider>
    </div>
  );
}

export default App;

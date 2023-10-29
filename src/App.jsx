import CardSuppliers from "./components/CardSuppliers";
import suppliers from "./json/suppliers";
import products from "./json/products";
import CardProducts from "./components/CardProducts";
import { useState, useRef } from "react";
import { FormContext } from "./context/FormContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardSelection from "./components/CardSelection";
function App() {
  const [supplierList, setSupplierList] = useState(suppliers);
  const [productsList, setProductsList] = useState(products);
  const [openModal, setOpenModal] = useState({
    modalName: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [productQuantity, setProductQuantity] = useState([]);
  const [selected, setSelected] = useState([]);
  return (
    <Router>
      <div style={{ padding: "50px" }}>
        <FormContext.Provider
          value={{
            openModal,
            supplierList,
            setSupplierList,
            productsList,
            setProductsList,
            setOpenModal,
            isDisabled,
            setIsDisabled,
            productQuantity,
            setProductQuantity,
            selected,
            setSelected,
          }}
        >
          <Routes>
            <Route path="/" element={<CardSuppliers />} />
            <Route path="/products" element={<CardProducts />} />
            <Route path="/select" element={<CardSelection />} />
          </Routes>
        </FormContext.Provider>
      </div>
    </Router>
  );
}

export default App;

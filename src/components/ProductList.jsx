import { useState, useContext } from "react";
import { FormContext } from "../context/FormContext";
const ProductList = () => {
  const {productsList} = useContext(FormContext);
  const [selected, setSelected] = useState(0);
  // console.log(productsList.data || productsList.map((prod) => prod));
  return (
  <div className="supplier_list_container">
      <div className="supplier_list_container_name">
        {Array.isArray(productsList)? productsList.map((prod) => <h1 key={prod.id}>{prod.name}</h1>) : null}
      </div>
    </div>
  );
};

export default ProductList;

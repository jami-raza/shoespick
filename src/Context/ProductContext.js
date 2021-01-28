import React, { createContext, useState } from "react";
import { Shoes } from "../Shoes";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products] = useState(Shoes);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

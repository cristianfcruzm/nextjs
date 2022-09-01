import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  return <div>Esta es la Pagina de Productos: {id}</div>;
};

export default ProductItem;

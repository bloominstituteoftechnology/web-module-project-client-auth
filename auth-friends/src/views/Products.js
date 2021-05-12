import { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ProductCards from "./productcards";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
        console.log(products);
      })
      .catch((err) => console.log("product fetch failed: ", err));
  }, []);
  return (
    <div
      className="d-flex flex-row flex-wrap justify-content-center"
      style={{
        width: "100vw",
        backgroundColor: "black",
        padding: "5vh 1vw",
      }}
    >
      <ProductCards products={products} />
    </div>
  );
}

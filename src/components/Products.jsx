import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [apidata, setapiData] = useState([]);

  useEffect(() => {
    const getDatafromDb = async () => {
      try {
        let res = await fetch(`http://localhost:8080/products`);
        let data = await res.json();
        console.log(data);
        setapiData(data);
      } catch (e) {
        console.log(e);
      }
    };
    getDatafromDb();
  }, []);

  return (
    <div className="Product">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {apidata.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

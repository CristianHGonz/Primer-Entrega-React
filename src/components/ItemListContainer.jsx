import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router";

export const ItemListContainer = () => {
  const [getProducts, setGetProducts] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    async function fetchData() {
      const datoRecibido = await fetch("https://dummyjson.com/products");
      const data = await datoRecibido.json();
      setGetProducts(data.products);
    }

    fetchData();
  }, []);

  return <ItemList getProducts={getProducts} />;
};

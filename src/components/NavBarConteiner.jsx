import { useState, useEffect } from "react";
import { NavBar } from "./NavBar";

export const NavBarConteiner = () => {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    async function catData() {
      const catRecibida = await fetch(
        "https://dummyjson.com/products/category-list",
      );
      const cat = await catRecibida.json();
      setCategoria(cat);
    }
    catData();
  }, []);
  return <NavBar categoria={categoria} />;
};

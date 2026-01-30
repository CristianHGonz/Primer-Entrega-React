import { NavBarConteiner } from "./components/NavBarConteiner";
import { ItemListContainer } from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <NavBarConteiner />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:prodCat" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

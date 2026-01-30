import { Item } from "./Item";
import styles from "../styles/ItemListContainer.module.css";

export const ItemList = ({ getProducts }) => {
  return (
    <div className={styles.divPrincipal}>
      {getProducts.map((prod) => (
        <Item prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

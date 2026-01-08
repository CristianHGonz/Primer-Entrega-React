import styles from "../styles/ItemListContainer.module.css";

export const ItemListContainer = ({ text }) => {
  return <h2 className={styles.text}>{text}</h2>;
};

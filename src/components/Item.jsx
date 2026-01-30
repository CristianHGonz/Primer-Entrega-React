import styles from "../styles/ItemListContainer.module.css";

export const Item = ({ prod }) => {
  return (
    <div className={styles.divSecundario}>
      <h5 className={styles.titulo}>{prod.title}</h5>
      <img className={styles.img} src={prod.thumbnail} alt={prod.title} />
      <p>CATEGORÍA: {prod.category}</p>
      <p className={styles.descripcion}>{prod.description}</p>
      <button className={styles.boton}>COMPRAR</button>
    </div>
  );
};

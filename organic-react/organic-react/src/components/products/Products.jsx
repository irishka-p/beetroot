import styles from "./products.module.scss";

const Products = () => {
  return (
    <>
      <div className={styles.products}>
        <div className={styles.wrapper}>
          <h4 className={styles.subtitle}>Organic</h4>
          <h2 className={styles.title}>Our Products</h2>
          <div className={styles.block}></div>
        </div>
      </div>
    </>
  );
};

export default Products;

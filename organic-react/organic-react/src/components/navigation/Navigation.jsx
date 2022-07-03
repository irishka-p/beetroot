import styles from "./navigation.module.scss";

const Navigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.item}>Home</li>
          <li className={styles.item}>About us</li>
          <li className={styles.item}>Shop</li>
          <li className={styles.item}>Pages</li>
          <li className={styles.item}>Contact us</li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

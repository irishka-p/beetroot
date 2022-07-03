// import Button from "../../elements/button/button/button";
import Navigation from "../navigation/Navigation";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div classNames={styles.wrapper}>
          <div classNames={styles.logo}></div>
        </div>
        <Navigation />
      </header>
    </>
  );
};

export default Header;

import Button from "../../elements/button/button";
import Navigation from "../navigation/Navigation";
import styles from "./header.module.scss";
import Logo from "assets/images/logo.png";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src={Logo} alt='logo'></img>
          </div>
          <Navigation />
          <Button />
        </div>
      </header>
    </>
  );
};

export default Header;

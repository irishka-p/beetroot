import styles from "./discount.module.scss";
import Rose from "assets/images/rose.png";
import White from "assets/images/white.png";
import classNames from "classnames";
import { Star } from "./icons";

const Discount = () => {
  return (
    <>
      <div className={styles.discount}>
        <div className={classNames(styles.wrapper, styles.container)}>
          <div className={styles.card}>
            <img src={Rose} alt='rose' />
          </div>
          <div className={styles.card}>
            <img src={White} alt='white' />
          </div>
        </div>
        <img scr={Star} alt='star' />
      </div>
    </>
  );
};

export default Discount;

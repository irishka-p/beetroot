import styles from "./friendly.module.scss";
import FieldImage from "assets/images/field.png";
import classNames from "classnames";

const Friendly = () => {
  return (
    <>
      <div className={classNames(styles.wrapper, styles.container)}>
        <div classNames={styles.photo}>
          <img src={FieldImage} alt='field' />
        </div>
        <div className={styles.text}>
          <div className={styles.subtitle}>Eco Friendly</div>
          <div className={styles.title}>
            From our Farm
            <br /> to your Home.
          </div>
          <h3 className={classNames(styles.title, styles.titleSmall)}>
            Choose Your Products
          </h3>
          <p className={classNames(styles.text, styles.textSmall)}>
            In our listing, we have several collections of organic products.
            This is the place where you need to choose the product you want.
          </p>
          <h3 className={classNames(styles.title, styles.titleSmall)}>
            Farmers will produce it
          </h3>
          <p className={classNames(styles.text, styles.textSmall)}>
            The Product that you ordered will be verified that we have or not if
            have we will start to move on with the next step.
          </p>
          <h3 className={classNames(styles.text, styles.textSmall)}>
            We Can Delivery too
          </h3>
          <p className={classNames(styles.text, styles.textSmall)}>
            If you are not comfortable going to the nearby market place we also
            will deliver your product to your doorstep.
          </p>
        </div>
      </div>
    </>
  );
};

export default Friendly;

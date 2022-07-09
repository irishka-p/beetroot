import styles from "./banner.module.scss";
import BannerImage from "assets/images/banner.jpg";
import classNames from "classnames";

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.wrapper}>
          <img src={BannerImage} alt='banner' />
          <div className={classNames(styles.content, styles.container)}>
            <div className={styles.subtitle}>Made With Nature</div>
            <div className={styles.title}>
              <h1>
                Welcome to the <br />
                world of nature
                <br />
                and organic.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

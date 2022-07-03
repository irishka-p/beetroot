import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div classNames={styles.wrapper}>
          <img></img>
          <div classNames={styles.subtitle}>Made With Nature</div>
          <div classNames={styles.title}>
            <h1>
              Welcome to the <br />
              world of nature
              <br />
              and organic.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

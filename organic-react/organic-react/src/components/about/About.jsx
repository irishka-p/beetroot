import styles from "./about.module.scss";
import AboutUsImage from "assets/images/aboutUs.png";
import CupImage from "assets/icon/cup.png";
import PostImage from "assets/icon/post.png";
import classNames from "classnames";

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={classNames(styles.wrapper, styles.container)}>
          <div className='about__img'>
            <img src={AboutUsImage} alt='about' />
          </div>
          <div className={styles.content}>
            <div className={styles.subtitle}>About us</div>
            <h3 className={styles.title}>
              We believe In Organic
              <br />
              Foods For Strong Health
            </h3>
            <p className={styles.text}>
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              and care. We aim to give our customers a healthy chemical-free
              meal for perfect nutrition.
            </p>
            <div className={styles.shop}>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src={CupImage} alt='cup' />
                </div>
                <div>
                  <div className={styles.mod}>Organic Foods Only</div>
                  <p className={styles.text}>
                    The Product that you ordered will be verified that we have
                    or not if have we will start to move on with the next step.
                  </p>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src={PostImage} alt='post' />
                </div>
                <div>
                  <div className={styles.mod}>Quality Standards</div>
                  <p className={styles.text}>
                    Once your product is packed it will be delivered to your
                    nearby locality you can directly visit the to buy the
                    product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

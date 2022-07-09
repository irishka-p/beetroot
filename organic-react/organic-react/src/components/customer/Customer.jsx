import styles from "./customer.module.scss";
import BannerImage from "assets/images/banner-customer.jpg";
import PhotoImage from "assets/images/photo.png";

// const Array [{'title-circle': "100%", "text-circle":"Organic" }
//
// ]

const Customer = () => {
  return (
    <>
      <div className={styles.customer}>
        <div className={classNames(styles.wrapper, styles.container)}>
          <div className={styles.banner}>
            <img src={BannerImage} alt='banner customer' />
          </div>
          <div className={styles.stars}></div>
        </div>
        <div className={styles.subtitle}>Testimonial</div>
        <div className={styles.title}>What Our Customer Saying?</div>
        <div className={styles.photo}>
          <img src={PhotoImage} alt='photo' />
        </div>

        <div className={steles.text}>
          <p>
            The quality of organic produce is extremely high, the service is
            second to none and the taste of the food
          </p>
          <p>takes me back to my childhood when we were growing our own.</p>
        </div>
        {/* <div>
        <span class="customer__text-name">Sara Taylor</span>
        <br />
        <span class="customer__text-mod">Consumer</span>
      </div> */}
        <div class='customer__bloks'>
          <div class='customer__circle'>
            <div class='customer__circle-mod'>
              <div class='customer__title-circle '>100%</div>
              <div class='customer__text-circle'>Organic</div>
            </div>
          </div>
          <div class='customer__circle'>
            <div class='customer__circle-mod'>
              <div class='customer__title-circle'>285</div>
              <div class='customer__text-circle'>Active Product</div>
            </div>
          </div>
          <div class='customer__circle'>
            <div class='customer__circle-mod'>
              <div class='customer__title-circle'>385+</div>
              <div class='customer__text-circle'>Organic Orchads</div>
            </div>
          </div>
          <div class='customer__circle'>
            <div class='customer__circle-mod'>
              <div class='customer__title-circle'>25+</div>
              <div class='customer__text-circle'>Years of Farming</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;

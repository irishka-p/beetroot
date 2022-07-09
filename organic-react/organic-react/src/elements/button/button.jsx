import styles from "./button.module.scss";

const button = () => {
  return (
    <>
      <button type='button' className={styles.button}>
        {/* <div className='header__icon icon-bg'>
          {/* <svg viewBox='0 0 25 25' class='icon header__icon'>
            <use xlink:href='#icon-bucket'></use>
          </svg> */}
        {/* </div> */} */}
        <span className={styles.text}>Cart 0</span>
      </button>
    </>
  );
};

export default button;

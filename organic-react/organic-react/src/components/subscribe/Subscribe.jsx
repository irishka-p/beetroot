import classNames from "classnames";
import styles from "./subscribe.module.scss";
import FooterImage from "assets/images/footer.png";

const Subscribe = () => {
  return (
    <>
      <div className={styles.suscribe}>
        <div className={classNames(styles.wrapper, styles.container)}>
          <div className={styles.image}>
            <img src={FooterImage} alt='orange' />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              Subscribe our <br />
              Newsletter
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;

//         <div class="subscribe__buttons">
//           <input class="subscribe__input" type="email" placeholder="Enter your email address">
//           <button type="button" class="subscribe__button js-toggle-registration-modal"><span class="subscribe__text">Subscribe</span>
//           <div class="icon"></div>
//           </button>
//         </div>
//         <div class="modal" id="js-registration-modal">
//           <div class="modal__wrapper">
//           <form class="modal__form" method="post" id="js-registration-form">
//             <div class="modal__registration">
//               <h4  class="modal__title">Registration</h4>
//               <button type="button" class="modal__button-close js-toggle-registration-modal"><span>X</span></button>
//
//             </div>
{
  /* <input class="modal__input" type="text" placeholder="role" required>
            <input class="modal__input" type="text" placeholder="First Name" required minlength="3">
            <input class="modal__input" type="text" placeholder="Last Name" required>
            <input class="modal__input" type="email" placeholder="email" required min="6" title="example@mail.com">
            <input class="modal__input" type="text" placeholder="User Name" required>
            <input class="modal__input" type="password" placeholder="password" required>
            <input class="modal__input" type="text" placeholder="disabledSeasonAnimation" >
            <input class="modal__input" type="text" placeholder="language" required>
            <button class="modal__button"><span>Submit</span></button>
          </form> */
}
//        </div>
//       </div>
//     </div>
//   </div>
// </div>

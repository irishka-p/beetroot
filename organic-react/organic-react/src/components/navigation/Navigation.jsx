import styles from "./navigation.module.scss";

const Array = [
  { name: "home", link: "#home" },
  { name: "About us", link: "#About us" },
  { name: "Shop", link: "#Shop" },
  { name: "Pages", link: "#Pages" },
  { name: "Contact us", link: "#Contact us" },
];

const Navigation = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {Array.map((element, index) => (
            <li className={styles.item} key={index}>
              <a href={element.link}>{element.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

// const Array = ["<a class="navigation__link js-navigation-item" href="#home">Home</a>
// ", "About us", "Shop", "Pages", "Contact us"];
//
// const Navigation = () => {
//   return (
//     <>
//       <nav className={styles.navigation}>
//         <ul className={styles.list}>
//           {Array.map((element, index) => (
//             <li className={styles.item} key={index}>
//               {element}
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </>
//   );
// };

export default Navigation;

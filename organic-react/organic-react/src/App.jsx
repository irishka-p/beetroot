import About from "components/about/About";
import Discount from "components/discount/Discount";
import Friendly from "components/friendly/Friendly";
import Products from "components/products/Products";
import Subscribe from "components/subscribe/Subscribe";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import "./styles/index.scss";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Discount />
      <About />
      <Products />
      <Friendly />
      <Subscribe />
    </>
  );
};

export default App;

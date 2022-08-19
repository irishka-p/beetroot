import React, { useEffect, useState } from "react";
import Select from "react-select";
// import { menuListCSS } from "react-select/dist/declarations/src/components/Menu";
import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../../../context/ThemeContext";
import { useTheme } from "../../../hooks/useTheme";
import styles from "./header.module.scss";
import cities from "cities-list";
import { useMemo } from "react";
import type { GroupBase } from "react-select";

interface Props {}
type Option = {
  value: string;
  label: string;
};

function CitiesSelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => {
    const citiesOptions: Option[] = [];
    Object.keys(cities).map((city) =>
      citiesOptions.push({ label: city, value: city })
    );
    return citiesOptions;
  }, []);
  const changeHandler = (value: string) => {
    setValue(value);
  };
  const selectOptionsHandler = () => console.log(options);
  selectOptionsHandler();
  return (
    <Select
      options={options as any}
      value={value}
      // onChange={({ newValue }) => changeHandler(newValue)}
      onChange={(e) => console.log(e)}
    />
  );
}
export default CitiesSelector;

export const Header = (props: Props) => {
  const theme = useTheme();
  // const options = [
  //   { value: "city-1", label: "Львів" },
  //   { value: "city-2", label: "Київ" },
  //   { value: "city-3", label: "Одеса" },
  // ];

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    menuList: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id='header-logo' />
        </div>
        <div className={styles.title}>React weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id='change-theme' />
        </div>
        <CitiesSelector />
        {/* <Select
          defaultValue={options[0]}
          styles={customStyles}
          options={options}
        /> */}
      </div>
    </header>
  );
};

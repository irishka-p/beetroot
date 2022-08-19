import React from "react";
import Select from "react-select";
import { GlobalSvgSelector } from "../../../assets/icons/global/GlobalSvgSelector";
import { Item } from "../../Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../Home/components/ThisDayInfo/ThisDayItem";
import styles from "./popup.module.scss";

interface Props {}

export const Popup = ({}: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "temperature",
      value: "20° feels like 17°",
    },
    {
      icon_id: "pressure",
      name: "pressure",
      value: "765 mm of mercury is normal",
    },
    {
      icon_id: "precipitation",
      name: "precipitation",
      value: "no precipitation",
    },
    {
      icon_id: "wind",
      name: "wind",
      value: "3 m/s southwest light breeze",
    },
  ];
  return (
    <>
      <div className={styles.blur}></div>
      <div className={styles.popup}>
        <div className={styles.day}>
          <div className={styles.day__temp}>20°</div>
          <div className={styles.day__name}>Monday</div>
          <div className={styles.img}>
            <GlobalSvgSelector id='small_rain_sun' />
          </div>
          <div className={styles.day__time}>
            Time: <span>21:54</span>
          </div>
          <div className={styles.day__city}>
            City:<span>Львів</span>
          </div>
        </div>
        <div className={styles.this__day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={styles.close}>
          <GlobalSvgSelector id='close' />
        </div>
      </div>
    </>
  );
};

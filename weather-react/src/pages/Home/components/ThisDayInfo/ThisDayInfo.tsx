import React from "react";
import styles from "./thisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import { ThisDayItem } from "./ThisDayItem";

interface Props {}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

const ThisDayInfo = (props: Props) => {
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
    <div className={styles.this__day_info}>
      <div className={styles.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={styles.cloud__img} src={cloud} alt='cloud' />
    </div>
  );
};

export default ThisDayInfo;

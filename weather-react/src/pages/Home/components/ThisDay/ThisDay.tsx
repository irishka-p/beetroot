import { useEffect, useState } from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import styles from "./thisDay.module.scss";

interface Props {
  weather: Weather;
}

const dayIndex = new Date().getDay();
const getDayName = (dayIndex: number) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dayIndex];
};

export const ThisDay = ({ weather }: Props) => {
  return (
    <div className={styles.this__day}>
      <div className={styles.top__block}>
        <div className={styles.top__block_wrpper}>
          <div className={styles.this__temp}>
            {Math.floor(weather.main.temp)}°
          </div>
          <div className={styles.this__day_name}>{getDayName(dayIndex)}</div>
        </div>
        <GlobalSvgSelector id='sun' />
      </div>
      <div className={styles.bottom__block}>
        <div className={styles.this__time}>
          Time: <span>{}</span>
        </div>
        <div className={styles.this__city}>
          City:<span> Львів</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;

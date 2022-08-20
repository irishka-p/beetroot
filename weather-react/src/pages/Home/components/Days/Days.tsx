import React from "react";
import { Card } from "./Card";
import styles from "./Days.module.scss";
import { Tabs } from "./Tabs";

interface Props {}

export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: "Today",
      day_info: "20 july",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
    {
      day: "Tomorrow",
      day_info: "21 july",
      icon_id: "rainy",
      temp_day: "+18",
      temp_night: "+15",
      info: "small rain and sunny",
    },
    {
      day: "Thursday",
      day_info: "22 july",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "rainy day",
    },
    {
      day: "Friday",
      day_info: "23 july",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
    {
      day: "Saturday",
      day_info: "24 july",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
    {
      day: "Sunday",
      day_info: "25 july",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
    {
      day: "Monday",
      day_info: "26 july",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Cloudy",
    },
  ];
  return (
    <>
      <Tabs />
      <div className={styles.days}>
        {days.map((day: Day) => (
          <Card day={day} key={day.day} />
        ))}
      </div>
    </>
  );
};

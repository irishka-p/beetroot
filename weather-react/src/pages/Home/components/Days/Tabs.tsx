import styles from "./Days.module.scss";

interface Props {}

export const Tabs = (props: Props) => {
  const tabs = [
    {
      value: "for week",
      id: "week",
    },
    {
      value: "for 10 days",
      id: "10 days",
    },
    {
      value: "for month",
      id: "month",
    },
  ];
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        {tabs.map((tab) => (
          <div
            className={
              styles.tab
              // + "" + styles.active
            }
            key={tab.value}
          >
            {tab.value}
          </div>
        ))}
      </div>
      <div className={styles.cancel}>Cancel</div>
    </div>
  );
};

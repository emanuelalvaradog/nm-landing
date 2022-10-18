import React from "react";
import styles from "./ActivityCard.module.css";

export function ActivityCard({ activity }) {
  return (
    <div
      className={styles.activity}
      // style={{ backgroundImage: `url(${activity.image})` }}
    >
      <div className={styles.activityText}>
        <h1>{activity.title}</h1>
        <p>{activity.description}</p>
      </div>
    </div>
  );
}

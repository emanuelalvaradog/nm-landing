import React from "react";
import { ActivityCard } from "../ActivityCard/ActivityCard";
import Activities from "../../lib/activities.json";
import styles from "./ActivitiesContainer.module.css";

export function ActivitiesContainer() {
  return (
    <section className={styles.activitySection}>
      <div className={styles.activitySectionTitle}>
        <h1>Actividades</h1>
      </div>
      <div className={styles.activities}>
        {Activities.map((activity) => (
          <ActivityCard activity={activity} key={activity.title} />
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { YoutubeCard } from "../YoutubeCard/YoutubeCard";
import styles from "./VideosContainer.module.css";

export function VideosContainer() {
  return (
    <section className={styles.videoSection}>
      <div className={styles.divider}>
        <span className={styles.dividerText}>Conócenos</span>
      </div>
      <div className={styles.videos}>
        <YoutubeCard videoId={"E073DtEBvjc"} />
        <YoutubeCard videoId={"qZ9xv5SI1cE"} />
        <YoutubeCard videoId={"ikjM_PYyLFE"} />
      </div>
    </section>
  );
}

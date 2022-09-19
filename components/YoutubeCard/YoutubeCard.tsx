import React from "react";
import styles from "./YoutubeVideo.module.css";

export function YoutubeCard({ videoId }) {
  return (
    <div className={styles.video}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

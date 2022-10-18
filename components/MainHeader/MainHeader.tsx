import Image from "next/image";
import React from "react";
import styles from "./MainHeader.module.css";
// import nmLogo from "../../public/nmHeaderLogo.png";

export function MainHeader() {
  return (
    <header className={styles.header}>
      <img
        className={styles.headerImage}
        src="/nmHeaderLogo.png"
        alt="navidad en las montañas"
      />
      <div className={styles.links}>
        <p>Actividades</p>
        <p>Servicios</p>
        <p>Cómo llegar</p>
        <button>¡Quiero ir!</button>
      </div>
    </header>
  );
}

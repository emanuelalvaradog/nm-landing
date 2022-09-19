import Image from "next/image";
import React from "react";
import styles from "./MainHeader.module.css";
import nmLogo from "../../public/nmHeaderLogo.png";

export function MainHeader() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.headerImage}
        src={nmLogo}
        alt="NM Logo"
        layout="intrinsic"
        width="130%"
        height="130%"
      />
    </header>
  );
}

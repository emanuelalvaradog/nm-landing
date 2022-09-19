import { useState } from "react";
import { RegisterForm, VideosContainer, MainHeader } from "../components";

import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isRegistered, setIsRegisteres] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/nmIcoLogo.ico" />
        <meta
          property="og:image"
          content="https://www.navidadenlasmontanas.com/nmShareImg.png"
        />
        <title>Navidad en las montañas - 2022</title>
        <meta property="og:title" content="Navidad en las montañas - 2022" />
        <meta name="description" content="Navidad en las montañas 2022" />
        <meta
          property="og:description"
          content="El evento alpino más grande de México"
        />
      </Head>

      <MainHeader />

      <main className={styles.main}>
        <section className={styles.firstSection}>
          <section className={styles.title}>
            <h1>Próximamente</h1>
            <p>Invierno 2022</p>
          </section>
          <VideosContainer />
        </section>
        <RegisterForm />
      </main>
    </div>
  );
}

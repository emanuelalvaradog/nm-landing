import { useEffect } from "react";
import {
  MainHeader,
  ActivitiesContainer,
  ArrivalContainer,
} from "../components";

import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
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
          <h1>¡Ven y vive Navidad en las Montañas!</h1>
          <h2>Del 14 al 21 de diciembre</h2>
          <p>
            Conoce nuestro evento alpino, único en su tipo en México, donde
            podrás disfrutar de un hermoso bosque iluminado con más de 100 mil
            luces, una rica comida y un gran ambiente navideño
          </p>
          <button>
            <a
              href="https://www.ticketmaster.com.mx/navidad-en-las-montanas-boletos/artist/1517921"
              target="__blank"
              rel="noopener"
            >
              Comprar boletos
            </a>
          </button>
        </section>
        <ActivitiesContainer />
        <ArrivalContainer />
      </main>
    </div>
  );
}

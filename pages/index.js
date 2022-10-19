import { NextSeo } from "next-seo";
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
      <NextSeo
        title="Navidad en las montañas"
        description="Navidad en las montañas es el evento alpino más grande de México donde podrás disfrutar, en compañía de tu familia y amigos, de un hermoso bosque iluminado con más de 100mil luces, una rica comida y un gran ambiente navideño."
        canonical="https:///www.navidadenlasmontanas.com"
        openGraph={{
          url: "https://www.navidadenlasmontanas.com",
          title: "Navidad en las montañas",
          description:
            "Navidad en las montañas es el evento alpino más grande de México donde podrás disfrutar, en compañía de tu familia y amigos, de un hermoso bosque ilumminado con más de 1000mil luces, una rica comida y un gran ambiene navideño.",
          images: [{ url: "/nmShareImg.png", alt: "Navidad en las montañas" }],
        }}
      />

      <Head>
        <link rel="icon" href="/nmIcoLogo.ico" />
        <title>Navidad en las montañas - 2022</title>
      </Head>

      <MainHeader />

      <main className={styles.main}>
        <section className={styles.firstSection}>
          <h1>¡Ven y vive Navidad en las Montañas!</h1>
          <h2>Del 15 al 21 de diciembre</h2>
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

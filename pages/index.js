import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import nmLogo from "../public/vercel.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Navidad en las montañas 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Image
          className={styles.headerImage}
          src={nmLogo}
          alt="NM Logo"
          layout="intrinsic"
          width="120%"
        />
      </header>

      <main className={styles.main}>
        <section className={styles.firstSection}>
          <section className={styles.title}>
            <h1>Próximamente</h1>
            <p>Invierno 2022</p>
          </section>
          <section className={styles.videoSection}>
            <div className={styles.divider}>
              <span className={styles.dividerText}>Conócenos</span>
            </div>
            <div className={styles.videos}>
              <div className={styles.video}> </div>
              <div className={styles.video}> </div>
              <div className={styles.video}> </div>
              <div className={styles.video}> </div>
            </div>
          </section>
        </section>
        <section className={styles.register}>
          <h3>Regístrate</h3>
          <p>
            ¿Quieres enterarte de las últimas noticias de Navidad en las
            Montañas 2022?
          </p>
          <p>¡Escríbenos!</p>
          <p>Nos alegrará mucho conocerte.</p>
          <form className={styles.form}>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Teléfono" />
            <textarea placeholder="Déjanos un mensaje" />
            <button>Registrar</button>
          </form>
        </section>
      </main>
    </div>
  );
}

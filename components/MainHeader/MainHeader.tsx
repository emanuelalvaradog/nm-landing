import React, { useEffect } from "react";
import styles from "./MainHeader.module.css";

export function MainHeader() {
  let sections;

  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollTo({ target }) {
    const sectionName = target.attributes[0].value;

    const section2scroll = sections.find((section) =>
      section.className.toLowerCase().includes(sectionName)
    );

    window.scrollTo({
      top: section2scroll?.offsetTop - 120,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    setTimeout(() => {
      sections = Array.from(document.querySelectorAll("section"));
    }, 1000);
  }, []);

  return (
    <header className={styles.header}>
      <img
        className={styles.headerImage}
        onClick={scrollToTop}
        src="/nmHeaderLogo.png"
        alt="navidad en las montañas"
      />
      <div className={styles.links}>
        <p data-value="activities" onClick={scrollTo}>
          Actividades
        </p>
        <p data-value="arrival" onClick={scrollTo}>
          Cómo llegar
        </p>
        <p data-value="faq" onClick={scrollTo}>
          FAQ
        </p>
        <button>
          <a
            href="https://www.ticketmaster.com.mx/navidad-en-las-montanas-boletos/artist/1517921"
            target="__blank"
            rel="noopener"
          >
            ¡Quiero ir!
          </a>
        </button>
      </div>
    </header>
  );
}

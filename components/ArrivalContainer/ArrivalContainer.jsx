import styles from "./ArrivalContainer.module.css";

export function ArrivalContainer() {
  return (
    <section className={styles.arrival}>
      <h1>Cómo llegar</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.5897591134021!2d-99.38144137079355!3d19.440081099180016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20f434210a51b%3A0x1402c4b515aeac97!2sAv%20Cortina%20d&#39;Ampezzo%2C%20Villa%20Alpina%2C%20M%C3%A9x.!5e0!3m2!1sen!2smx!4v1666058426900!5m2!1sen!2smx"
        // width="800"
        // height="600"
        // style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className={styles.contact}>
        <div className={styles.contactCard}>
          <h2>Taquilla Oficial</h2>
          <p>Av. Clavería 12. Azcapotzalco, CDMX</p>
        </div>
        <div className={styles.contactCard}>
          <a aria-label="Chat on WhatsApp" href="https://wa.me/1XXXXXXXXXX">
            {" "}
            <img
              alt="Chat on WhatsApp"
              src="/WhatsAppButtonGreenMedium.png"
            />{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

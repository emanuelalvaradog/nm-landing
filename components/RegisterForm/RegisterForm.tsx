import React from "react";
import styles from "./RegisterForm.module.css";

const API_ENDPOINT = "https://sheetdb.io/api/v1/pz0e6de40nz1l";

export function RegisterForm() {
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formChildren = Array.from(e.target.children);
    try {
      setIsLoading(true);
      await fetch(API_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      formChildren.map((e) => (e.value = ""));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <section className={styles.register}>
      <h3>Regístrate</h3>
      <p>Entérate de las últimas noticias de Navidad en las Montañas 2022</p>

      <form className={styles.form} onSubmit={onSubmitHandler}>
        <input type="text" name="data[nombre]" placeholder="Nombre" required />
        <input
          type="email"
          name="data[correo]"
          placeholder="Correo electronico"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="Correo inválido - correo@email.com"
          required
        />
        <input
          type="tel"
          name="data[telefono]"
          placeholder="Teléfono"
          pattern="[0-9]{10}"
          title="Teléfono invalido - Solo 10 dígitos"
          required
        />
        <textarea name="data[mensaje]" placeholder="Déjanos un mensaje" />
        <button disabled={isLoading}>Registrar</button>
      </form>
    </section>
  );
}

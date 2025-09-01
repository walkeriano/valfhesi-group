import styles from "./presentation.module.css";
import Image from "next/image";

export default function Presentation() {
  return (
    <section className={styles.containerPresentation}>
      <section className={styles.infoPerson}>
        <section className={styles.datosPerson}>
          <p>
            "Crear soluciones de manera eficaz a las necesidades de nuestros
            clientes y{" "}
            <span>defender sus derechos en pro del valor de la justicia"</span>
          </p>
          <h2>Sayuri Quispe</h2>
          <h3>Abogada Fundadora</h3>
        </section>
      </section>
      <section className={styles.imgBox}>
        <Image src="/say-person.jpg" alt="abogada-socia-senior" fill />
      </section>
    </section>
  );
}

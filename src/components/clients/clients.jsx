import styles from "./clients.module.css";
import Image from "next/image";

export default function Clients() {
  return (
    <section className={styles.sectionClients}>
      <h2>
        nuestros <span>clientes</span>
      </h2>
      <p>nacionales e internacionales</p>
      <section className={styles.flexClients}>
        <div className={styles.sliderTrack}>
          <div className={styles.item}>
            <Image src="/plaza-vea.jpg" alt="logo-plaza-vea" fill />
          </div>
          <div className={styles.item}>
            <Image src="/client-05.png" alt="logo-05" fill />
          </div>
          <div className={styles.item}>
            <Image src="/client-06.png" alt="logo-06" fill />
          </div>
          <div className={styles.item}>
            <Image src="/client-04.png" alt="logo-04" fill />
          </div>
          <div className={styles.item}>
            <Image src="/client-02.png" alt="logo-02" fill />
          </div>
          

          {/* Duplicado para el loop infinito */}
          <div className={styles.item}>
            <Image src="/plaza-vea.jpg" alt="logo-plaza-vea" fill />
          </div>
          <div className={styles.item}>
            <Image src="/client-05.png" alt="logo-05" fill />
          </div>
          <div className={styles.item}>
            <Image src="/client-06.png" alt="logo-06" fill />
          </div>
          <div className={styles.item}>
            <Image src="/client-04.png" alt="logo-04" fill />
          </div>
          <div className={styles.item}>
            <Image src="/client-02.png" alt="logo-02" fill />
          </div>
        </div>
      </section>
    </section>
  );
}

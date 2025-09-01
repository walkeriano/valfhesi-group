import styles from "./clients.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Clients() {
  return (
    <section className={styles.sectionClients}>
      <h2>
        nuestros <span>clientes</span>
      </h2>
      <p>nacionales e internacionales</p>
      <section className={styles.flexClients}>
        <div className={styles.item}>
          <Image src="/plaza-vea.jpg" alt="logo-cliente" fill={true} />
        </div>
        <div className={styles.item}>
          <Image src="/client-01.png" alt="logo-cliente" fill={true} />
        </div>
        <div className={styles.item}>
          <Image src="/client-02.png" alt="logo-cliente" fill={true} />
        </div>
        <div className={styles.item}>
          <Image src="/client-03.png" alt="logo-cliente" fill={true} />
        </div>
        <div className={styles.item}>
          <Image src="/client-04.png" alt="logo-cliente" fill={true} />
        </div>
        <div className={styles.item}>
          <Image src="/client-05.png" alt="logo-cliente" fill={true} />
        </div>
        <div className={styles.item}>
          <Image src="/client-06.png" alt="logo-cliente" fill={true} />
        </div>
      </section>
      <section className={styles.flexBtn}>
        <button>
          <FontAwesomeIcon
            className={styles.icon}
            size="2x"
            icon={faArrowRight}
          />
        </button>
        <button>
          <FontAwesomeIcon
            className={styles.icon}
            size="2x"
            icon={faArrowRight}
          />
        </button>
      </section>
    </section>
  );
}

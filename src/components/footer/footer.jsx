import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowsUpToLine } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <button onClick={() => scrollToSection("hero")} className={styles.btnUp}>
        <FontAwesomeIcon
          icon={faArrowsUpToLine}
          size="2x"
          className={styles.icon}
        />
      </button>
      <section className={styles.containFooter}>
        <section className={styles.leftFooter}>
          <Image src="/log-white.svg" alt="icon-btn" width={260} height={75} />
          <p>Valfhesi Group S.A.C</p>
          <p>Copyright 2025.</p>
        </section>
        <section className={styles.rightFooter}>
          <ul>
            <li>+51 957 839 801</li>
            <li>+511 6476537</li>
            <li>sayuri.quispe@valfhesigroup.com.pe</li>
            <li>legal@valfhesigroup.com.pe</li>
            <li>Av. Arequipa N° 4130, Oficina 302, Miraflores</li>
          </ul>
          <div className={styles.socialMediaFooter}>
            <Link href="https://www.linkedin.com/company/valfhesi-group-sac/posts/?feedView=all" className={styles.btnSocial}>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faLinkedin}
              />
            </Link>
            <Link
              href="https://wa.me/51957839801?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSocial}
            >
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
}

import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
        <FontAwesomeIcon icon={faArrowsUpToLine} size="2x" className={styles.icon} />
      </button>
      <section className={styles.containFooter}>
        <section className={styles.leftFooter}>
          <Image src="/log-white.svg" alt="icon-btn" width={260} height={75} />
          <p>Valfhesi Group S.A.C</p>
          <p>Copyright 2025.</p>
        </section>
        <section className={styles.rightFooter}>
          <ul>
            <li>993 744 957</li>
            <li>contacto@gmail.com</li>
            <li>Lima, Perú</li>
          </ul>
          <div className={styles.socialMediaFooter}>
            <Link href="/" className={styles.btnSocial}>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faInstagram}
              />
            </Link>
            <Link href="/" className={styles.btnSocial}>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faFacebook}
              />
            </Link>
            <Link href="/" className={styles.btnSocial}>
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

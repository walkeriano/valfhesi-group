import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./hero.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/header/header";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ id }) {
  const textRef = useRef(null);

  useEffect(() => {
    // 🔹 Animación suave ligada al scroll
    gsap.fromTo(
      textRef.current,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "bottom 100%",
          end: "bottom 20%",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <section id={id} className={styles.sectionHero}>
      <Header />
      <section className={styles.containerText}>
        <section className={styles.textArea}>
          <h1>
            Asesoría <span>legal</span> &<br />
            Consultoría <span>empresarial</span>
          </h1>
          <h2>
            especialistas en brindar un servicio integral y personalizado en el
            ámbito jurídico
          </h2>
          <section className={styles.containerCalltoAction}>
            <a
              className={styles.btnContact}
              href="https://wa.me/51950856453?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
              target="_blank"
              rel="noopener noreferrer"
            >
              agendar reunión
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faArrowRight}
              />
            </a>
            <Link
              className={styles.links}
              href="https://wa.me/51950856453?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </Link>
            <Link className={styles.links} href="tel:+51950856453">
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faPhoneVolume}
              />
            </Link>
            <Link
              className={styles.links}
              href="mailto: contacto@goskating.com"
            >
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faEnvelope}
              />
            </Link>
          </section>
        </section>
      </section>
      <section ref={textRef} className={styles.firstPerson}>
        <Image src="/bg-lawyer.jpg" alt="image-presentation" fill={true} />
      </section>
    </section>
  );
}

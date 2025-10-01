import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./itemServices.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export default function ItemServices({ title, image, description }) {
  const el = useRef(null);
  const [change, setChange] = useState(true);

  useEffect(() => {
    const element = el.current;
    gsap.set(element, { opacity: 0, x: 50 });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      },
      onLeave: () => {
        gsap.to(element, {
          opacity: 0,
          x: -50,
          duration: 0.5,
          ease: "power3.in",
        });
      },
      onEnterBack: () => {
        gsap.to(element, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(element, {
          opacity: 0,
          x: 50,
          duration: 0.5,
          ease: "power3.in",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section className={styles.item}>
      {change ? (
        <section className={styles.infoItem}>
          <h3>{title}</h3>
          <FontAwesomeIcon
            className={styles.iconTwo}
            size="2x"
            icon={faChevronDown}
          />
          <section className={styles.boxBtns}>
            <button onClick={() => setChange(false)}>
              <p>ver más</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faArrowRight}
              />
            </button>
            <Link
              href="https://wa.me/51957839801?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>reservar</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </Link>
          </section>
        </section>
      ) : (
        <section className={styles.showOn}>
          <div className={styles.infoGeneral}>
            <h3>{title}</h3>
            <ul>
              {description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <section className={styles.boxBtnsTwo}>
            <button onClick={() => setChange(true)}>
              <p>Minimizar</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faArrowRight}
              />
            </button>
            <Link
              href="https://wa.me/51957839801?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>reservar</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </Link>
          </section>
          <div className={styles.containImage}>
            <Image
              src="/bg-ave-contact.png"
              alt="bg-image"
              fill
              className={styles.imgBgShow}
            />
          </div>
        </section>
      )}

      <Image src={image} alt="image-service" fill={true} />
    </section>
  );
}

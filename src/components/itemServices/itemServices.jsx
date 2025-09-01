import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./itemServices.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export default function ItemServices({ title, image }) {
  const el = useRef(null);

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
      <Link
        href="https://wa.me/51950856453?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.infoItem}
      >
        <h3>{title}</h3>
        <FontAwesomeIcon
          className={styles.iconTwo}
          size="2x"
          icon={faChevronDown}
        />
        <button>
          <p>reservar</p>
          <FontAwesomeIcon
            className={styles.icon}
            size="2x"
            icon={faArrowRight}
          />
        </button>
      </Link>
      <Image src={image} alt="image-service" fill={true} />
    </section>
  );
}

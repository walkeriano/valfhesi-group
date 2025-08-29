import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./itemServices.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export default function ItemServices({ title, description, image }) {
  const [change, setChange] = useState(true);
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
      {change ? (
        <div className={styles.infoItem}>
          <h3>{title}</h3>
          <FontAwesomeIcon
            className={styles.iconTwo}
            size="2x"
            icon={faChevronDown}
          />
          <button onClick={()=>setChange(false)}>
            <p>ver más</p>
            <FontAwesomeIcon
              className={styles.icon}
              size="2x"
              icon={faArrowRight}
            />
          </button>
        </div>
      ) : (
        <div   className={styles.containerShow}>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <div className={styles.containerBtns}>
            <button className={styles.mini} onClick={() => setChange(true)}>
              <p>Minimizar</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faArrowRight}
              />
            </button>
            <button className={styles.contact}>
              <p>Reservar reunión</p>
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </button>
          </div>
        </div>
      )}
      <Image src="/bg-lawyer.jpg" alt="image-service" fill={true} />
    </section>
  );
}

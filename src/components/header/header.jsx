"use client";
import React, { useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const [show, setShow] = useState(true);

  const scrollToSection = (id) => {
    if (typeof window === "undefined") return;

    const target = document.getElementById(id);
    if (!target) return;

    const headerHeight =
      document.querySelector(`.${styles.containerHeader}`)?.offsetHeight || 0;

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, offsetY: headerHeight },
      ease: "power2.inOut",
    });
  };

  return (
    <section className={styles.containerHeader}>
      <Link href="/">
        <Image src="/logo-val.png" className={styles.logoResp} alt="logo-sb-legal" width={260} height={90} />
      </Link>
      <ul className={styles.ulGeneral}>
        <li onClick={() => scrollToSection("hero")}>inicio</li>
        <li onClick={() => scrollToSection("nosotros")}>nosotros</li>
        <li onClick={() => scrollToSection("services")}>servicios</li>
        <li onClick={() => scrollToSection("contacto")}>contacto</li>
        <div className={styles.flexSocialMedia}>
          <Link href="https://www.facebook.com/Comopezenelaula" target="_blank" className={styles.linkIcon}>
            <FontAwesomeIcon
              className={styles.icon}
              size="2x"
              icon={faInstagram}
            />
          </Link>
          <Link href="https://www.facebook.com/Comopezenelaula" target="_blank" className={styles.linkIcon}>
            <FontAwesomeIcon
              className={styles.icon}
              size="2x"
              icon={faFacebook}
            />
          </Link>
        </div>
      </ul>
      {show ? (
        <section onClick={()=>setShow(false)} className={styles.menuShow}>
          <FontAwesomeIcon className={styles.icon} size="2x" icon={faBars} />
        </section>
      ) : (
        <section className={styles.menuShowOn}>
          <button onClick={()=>setShow(true)} className={styles.btnClose}><FontAwesomeIcon className={styles.icon} size="2x" icon={faXmark} /></button>
          <ul className={styles.ulResponsive}>
            <li onClick={() => scrollToSection("hero")}>inicio</li>
            <li onClick={() => scrollToSection("nosotros")}>nosotros</li>
            <li onClick={() => scrollToSection("services")}>servicios</li>
            <li onClick={() => scrollToSection("contacto")}>contacto</li>
            <div className={styles.flexSocialMedia}>
              <Link href="https://www.facebook.com/Comopezenelaula" target="_blank" className={styles.linkIcon}>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faInstagram}
                />
              </Link>
              <Link href="https://www.facebook.com/Comopezenelaula" target="_blank" className={styles.linkIcon}>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faFacebook}
                />
              </Link>
            </div>
          </ul>
        </section>
      )}
    </section>
  );
}

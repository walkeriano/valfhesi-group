import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services.module.css";
import ItemServices from "@/components/itemServices/itemServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Services({ id }) {
  const textRef = useRef(null);
  const services = [
    {
      id: 1,
      title: "Derecho Administrativo",
      description: [
        "Implementación de manual de protección al consumidor.",
        "Capacitaciones relacionadas a las normas de protección al consumidor en relación a cada negocio.",
        "Atención de reclamos y/o quejas interpuestas en libro de reclamaciones físico y/o virtual, plataforma virtual del Indecopi (reclama virtual).",
        "Solución de controversias.",
        "Contacto directo con clientes con la finalidad de llegar a un acuerdo transaccional, velando por mitigar cualquier riesgo. Elaboración de acuerdos extrajudiciales.",
        "Absolución de requerimientos, cartas emitidas por el Indecopi.",
        "Denuncias Administrativas Sancionadoras.",
      ],
      image: "/service-4.jpg",
    },
    {
      id: 2,
      title: "Derecho Municipal",
      description: [
        "Implementación de manual de protección al consumidor.",
        "Capacitaciones relacionadas a las normas de protección al consumidor en relación a cada negocio.",
        "Atención de reclamos y/o quejas interpuestas en libro de reclamaciones físico y/o virtual, plataforma virtual del Indecopi (reclama virtual).",
        "Solución de controversias.",
        "Contacto directo con clientes con la finalidad de llegar a un acuerdo transaccional, velando por mitigar cualquier riesgo. Elaboración de acuerdos extrajudiciales.",
        "Absolución de requerimientos, cartas emitidas por el Indecopi.",
        "Denuncias Administrativas Sancionadoras.",
      ],
      image: "/service-5.jpg",
    },
    {
      id: 3,
      title: "Derecho Civil",
      description: [
        "Implementación de manual de protección al consumidor.",
        "Capacitaciones relacionadas a las normas de protección al consumidor en relación a cada negocio.",
        "Atención de reclamos y/o quejas interpuestas en libro de reclamaciones físico y/o virtual, plataforma virtual del Indecopi (reclama virtual).",
        "Solución de controversias.",
        "Contacto directo con clientes con la finalidad de llegar a un acuerdo transaccional, velando por mitigar cualquier riesgo. Elaboración de acuerdos extrajudiciales.",
        "Absolución de requerimientos, cartas emitidas por el Indecopi.",
        "Denuncias Administrativas Sancionadoras.",
      ],
      image: "/service-1.jpg",
    },
    {
      id: 4,
      title: "Derecho Registral",
      description: [
        "Implementación de manual de protección al consumidor.",
        "Capacitaciones relacionadas a las normas de protección al consumidor en relación a cada negocio.",
        "Atención de reclamos y/o quejas interpuestas en libro de reclamaciones físico y/o virtual, plataforma virtual del Indecopi (reclama virtual).",
        "Solución de controversias.",
        "Contacto directo con clientes con la finalidad de llegar a un acuerdo transaccional, velando por mitigar cualquier riesgo. Elaboración de acuerdos extrajudiciales.",
        "Absolución de requerimientos, cartas emitidas por el Indecopi.",
        "Denuncias Administrativas Sancionadoras.",
      ],
      image: "/service-6.jpg",
    },
    {
      id: 5,
      title: "Ingeniería",
      description: [
        "Implementación de manual de protección al consumidor.",
        "Capacitaciones relacionadas a las normas de protección al consumidor en relación a cada negocio.",
        "Atención de reclamos y/o quejas interpuestas en libro de reclamaciones físico y/o virtual, plataforma virtual del Indecopi (reclama virtual).",
        "Solución de controversias.",
        "Contacto directo con clientes con la finalidad de llegar a un acuerdo transaccional, velando por mitigar cualquier riesgo. Elaboración de acuerdos extrajudiciales.",
        "Absolución de requerimientos, cartas emitidas por el Indecopi.",
        "Denuncias Administrativas Sancionadoras.",
      ],
      image: "/service-7.jpg",
    },
    {
      id: 6,
      title: "Topografía y Construcción",
      description: [
        "Implementación de manual de protección al consumidor.",
        "Capacitaciones relacionadas a las normas de protección al consumidor en relación a cada negocio.",
        "Atención de reclamos y/o quejas interpuestas en libro de reclamaciones físico y/o virtual, plataforma virtual del Indecopi (reclama virtual).",
        "Solución de controversias.",
        "Contacto directo con clientes con la finalidad de llegar a un acuerdo transaccional, velando por mitigar cualquier riesgo. Elaboración de acuerdos extrajudiciales.",
        "Absolución de requerimientos, cartas emitidas por el Indecopi.",
        "Denuncias Administrativas Sancionadoras.",
      ],
      image: "/service-8.jpg",
    },
  ];

  useEffect(() => {
    // 🔹 Animación para el texto (entra desde la izquierda)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 30%",
          scrub: true, // efecto ligado al scroll
        },
      }
    );
  }, []);

  return (
    <section id={id} className={styles.containerServices}>
      <section className={styles.titleText}>
        <h2>
          asesorías & <span>consultorías</span>
        </h2>
        <p>servicio integral y personalizado en todo el ámbito jurídico</p>
        <section className={styles.containerCalltoAction}>
          <a
            className={styles.btnContact}
            href="https://wa.me/51949273157?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
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
          <section className={styles.btnContactGeneral}>
            <Link
              className={styles.links}
              href="https://wa.me/51949273157?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </Link>
            <Link className={styles.links} href="tel:+51949273157">
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faPhoneVolume}
              />
            </Link>
            <Link
              className={styles.links}
              href="mailto: sayuri.quispe@valfhesigroup.com.pe"
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
      <section className={styles.flexItems}>
        {services.map((service) => (
          <ItemServices
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </section>
    </section>
  );
}

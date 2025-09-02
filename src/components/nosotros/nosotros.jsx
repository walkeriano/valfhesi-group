import styles from "./nosotros.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Nosotros({ id }) {
  return (
    <section id={id} className={styles.containerNosotros}>
      <section className={styles.containerTexto}>
        <Image
          src="log-white.svg"
          alt="logo-white-version"
          width={300}
          height={75}
        />
        <section className={styles.generalInfo}>
          <p>
            Valfhesi Group SAC es una empresa 100% peruana, con más de doce años
            de trayectoria, nacida con una clara vocación innovadora,
            especializada en brindar un servicio integral y personalizado en el
            ámbito jurídico enfocado en la asesoría y consultoría Empresarial,
            teniendo como principales campos de desarrollo los siguientes:
            Derecho de la Empresa, Derecho Civil, Derecho Administrativo,
            Derecho Municipal, y Derecho Registral.
          </p>
          <p>
            Contamos con un equipo de abogados especialistas en las citadas
            materias, así como profesionales de diversas áreas complementarias
            para gestiones municipales y registrales, entre las que destacan la
            Ingeniería Civil, Arquitectura, Ingeniería eléctrica, Ingeniería
            Sanitaria, contando con profesionales que se encuentran altamente
            capacitados y comprometidos con desarrollar y entregar resultados de
            calidad y valor a nuestros clientes.
          </p>
          <section className={styles.containerCalltoAction}>
            <Link
              className={styles.links}
              href="https://wa.me/51957839801?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.icon}
                size="2x"
                icon={faWhatsapp}
              />
            </Link>
            <Link className={styles.links} href="tel:+51957839801">
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
            <a
              className={styles.btnContact}
              href="https://wa.me/51957839801?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
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
          </section>
        </section>
      </section>
      <section className={styles.imgBox}>
        <Image src="/ave.png" alt="hello world" fill={true} />
      </section>
    </section>
  );
}

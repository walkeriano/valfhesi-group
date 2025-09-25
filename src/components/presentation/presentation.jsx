import styles from "./presentation.module.css";
import Image from "next/image";

export default function Presentation() {
  return (
    <section className={styles.containerPresentation}>
      <section className={styles.infoPerson}>
        <section className={styles.datosPerson}>
          <h2>Sayuri Quispe</h2>
          <h3>Abogada Fundadora</h3>
          <h4>
            "Crear soluciones de manera eficaz a las necesidades de nuestros
            clientes y{" "}
            <span>defender sus derechos en pro del valor de la justicia"</span>
          </h4>
          <p>
            Abogada fundadora con sólidos valores éticos y morales; con amplia
            experiencia en asesoría legal en Derecho Municipal, Derecho
            Administrativo y Gestión Pública. Maestra en Derecho de La Empresa
            por la PUCP, Egresada de la Maestría en Derecho Penal por la UNFV.
            Su trayectoria profesional se compone también de conocimientos
            técnicos en el área municipal y registral, con habilidades de
            coordinación institucional y análisis jurídico destacando en
            asesoría y representación de empresas del sector privado.
          </p>
        </section>
      </section>
      <section className={styles.imgBox}>
        <Image src="/say-person.jpg" alt="abogada-socia-senior" fill />
      </section>
    </section>
  );
}

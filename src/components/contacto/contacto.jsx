import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./contacto.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faPaperPlane,
  faUser,
  faPhoneVolume,
  faEnvelope,
  faTriangleExclamation,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Contacto({ id }) {
  const formShow = useRef(null);

  const formRef = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false); // Estado para mostrar mensaje de éxito
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para deshabilitar el botón mientras se envía
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar errores

  useEffect(() => {
    // 🔹 Animación para el texto (entra desde la izquierda)
    gsap.fromTo(
      formShow.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formShow.current,
          start: "top 90%",
          end: "top 30%",
          scrub: true, // efecto ligado al scroll
        },
      }
    );
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage(""); // Limpiar cualquier mensaje de error anterior

    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);

    // Aquí es donde agregamos la clave de acceso de Web3Forms
    const accessKey = "285d4c2e-2da7-44f5-8632-15a4707d41a5"; // Asegúrate de incluir las comillas
    object.access_key = accessKey;

    const json = JSON.stringify(object);

    // Enviar los datos al API de Web3Forms
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setIsSuccess(true);

      // Ocultar mensaje a los 3s
      setTimeout(() => {
        // Resetear el formulario antes (o después, como prefieras)
        formRef.current.reset();
        setIsSuccess(false);
      }, 3000);
    } else {
      setErrorMessage("Error al enviar el formulario. Inténtalo de nuevo.");
    }

    setIsSubmitting(false); // Rehabilitar el botón después de la respuesta
  };

  return (
    <section id={id} className={styles.containerContact}>
      <section ref={formShow} className={styles.formContainer}>
        <span></span>

        {isSuccess && (
          <div className={styles.successMessage}>
            <FontAwesomeIcon
              className={styles.icon}
              size="2x"
              icon={faCalendarCheck}
            />
            <p>¡Gracias! Tus datos fueron enviados con exito</p>
          </div>
        )}
        {errorMessage && (
          <div className={styles.errorMessage}>
            <FontAwesomeIcon
              className={styles.icon}
              size="2x"
              icon={faTriangleExclamation}
            />
            <p>{errorMessage}</p>
          </div>
        )}
        <section className={styles.generalContext}>
          <section className={styles.containerText}>
            <h3>
              canáles de <span>contacto</span>
            </h3>
            <p className={styles.p}>Envíanos tus datos y te contactaremos</p>
            <form ref={formRef} onSubmit={onSubmit} className={styles.formBox}>
              <section className={styles.boxInputs}>
                <div className={styles.itemsInputs}>
                  <label htmlFor="">
                    <input
                      type="text"
                      placeholder="Nombres..."
                      name="name"
                      required
                    />
                    <FontAwesomeIcon
                      className={styles.icon}
                      size="2x"
                      icon={faUser}
                    />
                  </label>
                  <label htmlFor="">
                    <input
                      type="number"
                      placeholder="Teléfono..."
                      name="telefono"
                      required
                    />
                    <FontAwesomeIcon
                      className={styles.icon}
                      size="2x"
                      icon={faPhoneVolume}
                    />
                  </label>
                </div>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  placeholder="Mensaje..."
                ></textarea>
              </section>
              <button type="submit" disabled={isSubmitting}>
                <p>{isSubmitting ? "Enviando..." : "Enviar"}</p>
                <FontAwesomeIcon
                  className={styles.icon}
                  size="2x"
                  icon={faPaperPlane}
                />
              </button>
            </form>
          </section>
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
        <div className={styles.boxImage}>
          <Image src="/bg-ave-contact.png" alt="icon-ave" fill={true} />
        </div>
      </section>
    </section>
  );
}

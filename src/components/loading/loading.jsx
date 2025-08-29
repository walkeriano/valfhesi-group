import styles from "./loading.module.css";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={styles.contLoading}>
      <Image src="/logo-val.png" className={styles.logo} alt="logo-sb-legal" width={340} height={120} />
      <div className={styles.loader}></div>
      <section className={styles.bgAve}>
        <Image src="/ave-white.png" alt="logo-sb-legal" fill={true}/>
      </section>
    </div>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import NavBar from './Components/NavBar/NavBar';
import { FaWhatsapp } from 'react-icons/fa'
import Presentation from './Components/Presentation/Presentation';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Estudio Jurídico Mocca accidentes de trabajo laboral ART</title>
        <meta name="description" content="accidentes de trabajo laboral ART" />
        <meta name="google-site-verification" content="google-site-verification=kdF53Bf7O0fRzhu0gOXSPCRVZjIEYzFYajAMdlcBups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />




      <main className={styles.main}>
        
        
        
        <section className={styles.hero}>
        <div className={styles.imgOverlay}></div>
        <div className={styles.imgOverlayii}></div>
        <div className={styles.headerContainer}></div>
            <div className={styles.contentContainer}>
              <h1 className={styles.titleHeader}>
                Abogado Accidente de Trabajo ART 
              </h1>
              <h2 className={styles.subtitleHeader}>Si Ud tuvo un accidente de trabajo o un accidente in itinere y le quedaron secuelas, podemos reclamar su indemnización</h2>
              <button className={styles.headerButton}>
                <FaWhatsapp className={styles.icono}/>
                Consultanos por Whatsapp
              </button>
            </div>

        </section>

        <Presentation/>


        <div className={styles.grid}>
          
          <Link href="/Art" >
            <div className={styles.card}>
            <div>fotito</div>
            <h2>ART &rarr;</h2>
            <h2>Accidentes de Trabajo</h2>
            <span>mas info +</span>
            </div>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <div>fotito</div>
            <h2>enfermedades profesionales &rarr;</h2>
            <span>mas info +</span>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <div>fotito</div>
            <h2>Accidentes de tránsito &rarr;</h2>
            <span>mas info + </span>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <div>mas info + </div>
            <h2>Despidos &rarr;</h2>
            <span>
              mas info +
            </span>
          </a>


          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <div>fotito </div>
            <h2>Amparos de Salud &rarr;</h2>
            <h2>Obras sociales</h2>
            <span>
              mas info +
            </span>
          </a>


          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <div>fotito </div>
            <h2>Migraciones &rarr;</h2>
            <span>
              mas info +
            </span>
          </a>
        </div>
      </main>
    </div>
  )
}

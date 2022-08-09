import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import NavBar from './Components/NavBar/NavBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Estudio Jurídico Mocca accidentes de trabajo laboral ART</title>
        <meta name="description" content="accidentes de trabajo laboral ART" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <section>
          <div className={styles.headerContainer}>

            <h1 className={styles.title}>
              Abogado Accidente de Trabajo ART 
            </h1>
            <h2>Si Ud tuvo un accidente de trabajo o un accidente in itinere y le quedaron secuelas, podemos reclamar su indemnización</h2>
            <button>Consultanos por Whatsapp</button>
          </div>
        </section>


        <p className={styles.description}>
          superabogada
        </p>

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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import NavBar from '../Components/NavBar/NavBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Estudio Jurídico Mocca accidentes de trabajo laboral ART - Buenos Aires</title>
        <meta name="description" content="accidentes de trabajo laboral ART" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Estudio Jurídico Mocca & Asoc. 
        </h1>
        <h2>Abogados especialistas en Accidentes</h2>
        <h3>accidentes de trabajo, enfermedades profesionales, accidentes de tránsito</h3>

        <p className={styles.description}>
          superabogada
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>reclamosART &rarr;</h2>
            <p>llenate de dinero si te rompiste un dedo</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Despido &rarr;</h2>
            <p>si te echaron de tu trabajo te ayudamos a vengarte</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Accidentes de trabajo &rarr;</h2>
            <p>si trabajas con maquinas ponete pillo</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
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

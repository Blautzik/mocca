import React from 'react'
import styles from './Presentation.module.css'

const Presentation = () => {
  return (
    <section className={styles.main}>
    <h1 className={styles.acento}>Abogados especialistas en Accidentes y enfermedades profesionales</h1>
    <h2 className={styles.titulo}>Sin gastos ni adelantos. Solo cobramos cuándo usted gana</h2>
    <span className={styles.texto}> 96.8% de casos ganados</span>
  </section>
  )
}

export default Presentation
import styles from './barrareserva.module.css';
import { useState } from 'react';

const Barrarecurso = (props) => {

  
  return (
    <div className={styles.busqueda}>
        <div className={styles.lupa}>
            <img src="/media/lupa.png" alt="lupa" />
        </div>
        <div className={styles.info}>
            <label className={styles.placeholder}  htmlFor="">Tipo de recurso</label>
            <input className={styles.input} type="text" />
            </div>
        </div>
  );
};

export default Barrarecurso;
"use client"
import React, { useState } from 'react';
import styles from './BibliotecaBusqueda.module.css';

function ResultadosAlumn({ results }) {
  const [page, setPage] = useState(1);
  const booksPerPage = 3;

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const startIndex = (page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksToDisplay = results.slice(startIndex, endIndex);

  return (
    <div>
    <div className={styles.resultadosContainer}>
      {booksToDisplay.length > 0 ? (
        <div className={styles.resultadosGrid}>
          {booksToDisplay.map((libro, index) => (
            <div key={index} className={styles.resultadoBox}>
      <article className={styles.libro}>
        <div className={styles.librocuadro1}>
          <div className={styles.icono3}>
            <span>{libro.categoria}</span>
          </div>
          <p>
          {libro.titulo}
          </p>
        </div>
        <div className={styles.imglibro}>
          <div className={styles.imglibro2}>
            <img src={libro.imagen} alt="" />
          </div>
        </div>
        <div className={styles.informacionlibro}>
          <span className={styles.spaninfo1}>ISBN: {libro.ISBN}</span>
          <span className={styles.spaninfo2}>Autor: {libro.autor}</span>
          <span className={styles.spaninfo2}>Editor: {libro.editorial}</span>
          <span></span>
        </div>
        

        
      </article>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
      
      </div>
      <div className={styles.busquedalibro}>
        <button className={styles.botoncambio} onClick={handlePrevPage} disabled={page === 1}>
          Anterior
        </button>
        <button className={styles.botoncambio} onClick={handleNextPage} disabled={endIndex >= results.length}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default ResultadosAlumn;

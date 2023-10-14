import { useState } from "react";
import React from "react";
import ReservaButton from "./ReservaButton";
import styles from "./Libro.module.css";  

const Libro = (props) => {
  const { libro } = props;
  const [isReserva, setIsReserva] = useState(false);
  const [isDisponible, setIsDisponible] = useState(true);


  const reservarLibro = () => {

    if (isDisponible) {

      setIsDisponible(false);

      setIsReserva(false);

      setIsEnable(false);
    }
  };

  return (
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
        <span className={styles.spaninfo2}>
          {isDisponible ? "Disponible" : "Reservado"}
        </span>
      </div>
      <div className={styles.contenedorbotonreserva}>
        <ReservaButton
          libro={libro}
          onClick={reservarLibro}
          isEnable={!isDisponible}
          className={styles.buttondisabled}
        />
      </div>
    </article>
  );
};

export default Libro;
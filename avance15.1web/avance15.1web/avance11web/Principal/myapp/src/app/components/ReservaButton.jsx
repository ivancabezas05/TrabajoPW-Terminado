import { useState } from "react";
import React from "react";
import styles from "./ReservaButton.module.css";

const ReservaButton = ({ libro }) => {
  const [isReserva, setIsReserva] = useState(false);

  const handleClick = () => {

    alert("RESERVA COMPLETADA :La reserva del recurso se realizo con éxito");
  };

  return (
    <button type="button" className={styles.reservaButton} onClick={handleClick}>
      Reservar
    </button>
  );
};

export default ReservaButton;
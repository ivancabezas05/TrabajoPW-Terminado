import styles from './perfiladmin.module.css';

const BarraP = ({ setOpcionSeleccionada, modo }) => {
  const handleOptionClick = (opcion) => {
    setOpcionSeleccionada(opcion);
  };
  return (
    modo === 'admin' ?(
    <nav className={styles.barracuadro}>
      <ul className={styles.opcionescuadro}>
        <li className={styles.licuadro} onClick={() => handleOptionClick('DATOS PERSONALES')}>DATOS PERSONALES </li>
        <li className={styles.licuadro} onClick={() => handleOptionClick('CUENTA')}>CUENTA</li>
        <li className={styles.licuadro} onClick={() => handleOptionClick('PREFERENCIAS')}>PREFERENCIAS</li>
      </ul>
    </nav>) : modo === 'alumno' ?(
      <nav className={styles.barracuadro}>
      <ul className={styles.opcionescuadro}>
        <li className={styles.licuadro} onClick={() => handleOptionClick('DATOS PERSONALES')}>DATOS PERSONALES </li>
        <li className={styles.licuadro} onClick={() => handleOptionClick('CUENTA')}>CUENTA</li>
      </ul>
    </nav>
    ) : modo === 'agregar' ?(
      <nav className={styles.barracuadro}>
      <ul className={styles.opcionescuadro}>
        <li className={styles.licuadro} onClick={() => handleOptionClick('DATOS PERSONALES')}>INSERTAR NUEVO LIBRO</li>
      </ul>
      </nav>
    ) : null
  );
};

export default BarraP;

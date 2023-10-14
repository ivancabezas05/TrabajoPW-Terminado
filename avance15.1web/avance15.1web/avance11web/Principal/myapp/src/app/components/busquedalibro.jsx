import styles from './botoneslibro.module.css';

const Botoneslibro = ({ currentPage, totalPages, onPageChange }) => {
  // Función para ir a la página anterior
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  // Función para ir a la página siguiente
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }

  return (
    <div className={styles.busquedalibro}>
      <span>Página {currentPage}</span>
      <button className={styles.botoncambio} onClick={goToPreviousPage}>Anterior</button>
      <button className={styles.botoncambio} onClick={goToNextPage}>Siguiente</button>
    </div>
  );
}

export default Botoneslibro;







import styles from './admin.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  const { correo } = router.query;

  // Determinar si estamos en una de las páginas específicas (admin, inicioadmin, biblioteca)
  const isAdminPage = router.pathname.startsWith('/Inicioadmin') || router.pathname === '/Perfiladmin' || router.pathname === '/Biblioteca' || router.pathname === '/agregarlibro'  ;

  // Agregar el parámetro 'correo' a los enlaces de Sidebar
  const correoParam = correo ? `?correo=${correo}` : '';

  return (
    <aside className={styles.barralateral}>
      <ul className={styles.opciones}>
        <li className={styles.li}>
          <Link href={`${isAdminPage ? '/Inicioadmin' : '/Inicioalumno'}${correoParam}`}>
            {isAdminPage ? 'Inicio' : 'Principal'}
          </Link>
        </li>
        <li className={styles.li}>
          <Link href={`${isAdminPage ? '/Perfiladmin' : '/Perfilalumno'}${correoParam}`}>
            {isAdminPage ? 'Perfil' : 'Perfil'}
          </Link>
        </li>
        <li className={styles.li}>
          <Link href={`${isAdminPage ? '/Biblioteca'   : '/Prestamos'}${correoParam}`}>
            {isAdminPage ? 'Biblioteca'   : 'Prestamos'}
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

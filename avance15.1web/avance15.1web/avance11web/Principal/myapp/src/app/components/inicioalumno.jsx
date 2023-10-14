import styles from './admin.module.css';
import Sidebar from './sidebar';
import Cuadros from './cuadros';
import Barra from './barra';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Inicioalumno = () => {
  const router = useRouter();
  const [nombre, setNombre] = useState(""); // Agregamos un estado para el nombre

  useEffect(() => {
    // Recuperar datos del usuario desde localStorage
    const usuarioJSON = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioJSON);

    if (usuario) {
      // Aquí puedes utilizar los datos del usuario en esta página
      const nombreUsuario = usuario.nombres;
      setNombre(nombreUsuario); // Establecemos el nombre en el estado
      console.log('Datos del usuario recuperados desde localStorage:', usuario);
    } else {
      // Si no se encuentra un usuario en localStorage, puedes manejarlo adecuadamente.
      router.push('/login'); // Redirigir al usuario a la página de inicio de sesión si no hay usuario en localStorage.
    }
  }, []); // Esto se ejecutará después de la renderización inicial del componente

  // Resto de tu código de la página de inicio del alumno
  return (
    <div className={styles.container}>
      <Barra titulobarra="Biblioteca" />
      <main className={styles.xd}>
        <Sidebar li1="Principal" li2="Perfil" li3="Prestamos" />
        <section className={styles.parte2}>
          <div className={styles.titulo2}>
            <span>Bienvenido, {nombre}!</span> {/* Mostramos el nombre aquí */}
          </div>
          <Cuadros texto='Últimas Reservas' mostrarOpcion={false} />
          <Cuadros texto='Los más pedidos' mostrarOpcion={false} />
        </section>
      </main>
    </div>
  );
};

export default Inicioalumno;

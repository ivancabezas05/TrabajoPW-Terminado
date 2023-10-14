import styles from './peralum.module.css'
import Barra from './barra';
import Sidebar from './sidebar';
import Contenido from './contenidoadmin';
import { useEffect, useState } from 'react';


const Perfilalum = () =>{


    const modo= 'alumno'
  useEffect(() => {
    // Recuperar datos del usuario desde localStorage
    const usuarioJSON = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioJSON);

    if (usuario) {
      // Aquí puedes utilizar los datos del usuario en esta página
        console.log('Datos del usuario recuperados desde localStorage:', usuario);
    } else {
      // Si no se encuentra un usuario en localStorage, puedes manejarlo adecuadamente.
      router.push('/login'); // Redirigir al usuario a la página de inicio de sesión si no hay usuario en localStorage.
    }
  }, []); // Esto se ejecutará después de la renderización inicial del componente

  // Resto de tu código de la página de inicio del alumno
    return (
        <div className={styles.container}>
        <Barra titulobarra = "Biblioteca"/>
        <main className={styles.xd}>
            <Sidebar/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Mi Perfil</span>
                </div>
                <Contenido modo = 'alumno'/>
            </section>
        </main>
    </div>
    )
}

export default Perfilalum;
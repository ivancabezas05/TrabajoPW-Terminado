import styles from './agregarlibro.module.css'
import Sidebar from './sidebar';
import Barra from './barra';
import Contenido from './contenidoadmin';
import { useEffect, useState } from 'react';

const Agregarlibro = () =>{

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
      }, []);

    const modo='agregar'
    return (
        <div className={styles.container}>
        <Barra titulobarra='Administración de Bibliotecas'/>
        <main className={styles.xd}>
            <Sidebar li1="Inicio" li2="Perfil" li3="Biblioteca"/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Bienvenido, Juan</span>
                </div>
                <Contenido modo= 'agregar'/>
                
            </section>
        </main>
    </div>
    )
}

export default Agregarlibro;
import styles from './perfiladmin.module.css'
import Sidebar from './sidebar';
import Barra from './barra';
import Contenido from './contenidoadmin';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Perfiladm = () =>{


    const modo= 'admin'
    const router = useRouter();
    const [nombre, setNombre] = useState(""); 


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
        <Barra titulobarra='Administración de Bibliotecas'/>
        <main className={styles.xd}>
            <Sidebar li1="Inicio" li2="Perfil" li3="Biblioteca"/>
            <section className={styles.parte2}>
                <div className={styles.titulo2}>
                    <span>Bienvenido, {nombre}!</span>
                </div>
                <Contenido modo= 'admin'  />
                
            </section>
        </main>
    </div>
    )
}

export default Perfiladm;
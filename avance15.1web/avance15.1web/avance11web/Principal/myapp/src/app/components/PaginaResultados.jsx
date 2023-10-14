"use client"
import Sidebar from './sidebar';
import React, { useState, useRef, useEffect } from 'react';
import ResultadosAlumn from './AlumnResultados';
import BusquedaAlumnRes from './AlumnBusquedaRes';
import styles from './Biblioteca.module.css';
import { useRouter } from 'next/router'; 


function PaginaResultados({ results }) {
  const modo= 'alumno'
    const [nombre, setNombre] = useState(""); 
    const router = useRouter();
    
    useEffect(() => {

        
        // Recuperar datos del usuario desde localStorage
        const usuarioJSON = localStorage.getItem('usuario');
        const usuario = JSON.parse(usuarioJSON);
    
        if (usuario) {
          // Aquí puedes utilizar los datos del usuario en esta página
          const nombreUsuario = usuario.nombres;
          setNombre(nombreUsuario);
          console.log('Datos del usuario recuperados desde localStorage:', usuario);
        } else {
          // Si no se encuentra un usuario en localStorage, puedes manejarlo adecuadamente.
          router.push('/login'); // Redirigir al usuario a la página de inicio de sesión si no hay usuario en localStorage.
        }
      }, []); 

  return (
    <div>
    
    <div className={styles.container}>
      <main className={styles.xd}>
        <section className={styles.parte2}>
          <div className={styles.titulo2}>
            <span>Búsqueda</span>
            <BusquedaAlumnRes />
          </div>
          <h7 className={styles.h1}>Resultados de la Búsqueda: </h7>
          <article >
            <div className={styles.recuadro1}>
              <div className={styles.Barrasprestamo}>
              <ResultadosAlumn results={results} />
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
    </div>
  );
}

export default PaginaResultados;

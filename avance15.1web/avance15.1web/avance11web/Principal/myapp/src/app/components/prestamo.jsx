"use client"
import Sidebar from './sidebar';
import Botonlibros from './busquedalibro';
import Barra from './barra';
import Libro from './libro';
import Barrareserva from './barrareserva';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Admins from "./Admin.json";
import Alumnos from "./Alumnos.json"
import styles from './prestamo.module.css'
import Barrarecurso from './barrarecurso'
import BusquedaAlumn from './AlumnBusqueda';
import BusquedaAlumnRes from './AlumnBusquedaRes';
import ResultadosAlumn from './AlumnResultados';
import PaginaResultados from './PaginaResultados';


const Prestamo = () =>{


    const modo= 'alumno'
    const [nombre, setNombre] = useState(""); 
    
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
      }, []); // Esto se ejecutará después de la renderización inicial del componente
    
      // Resto de tu código de la página de inicio del alumno

      const [searchText, setSearchText] = useState('');
      const [categories, setCategories] = useState([]);
      const [libraryData, setLibraryData] = useState([]);
      const [searchResults, setSearchResults] = useState([]);
      const [showResults, setShowResults] = useState(false); // Nuevo estado para mostrar resultados
    
      useEffect(() => {
        fetch('library.json')
          .then((response) => response.json())
          .then((data) => {
            setLibraryData(data);
          })
          .catch((error) => {
            console.error('Error al cargar library.json', error);
          });
      }, []);
    
      const handleSearch = (text, categories) => {
        setSearchText(text);
        setCategories(categories);
    
        const textResults = libraryData.filter((libro) =>
          libro.titulo.toLowerCase().includes(text.toLowerCase())
        );
    
        if (categories.length > 0) {
          const categoryResults = libraryData.filter((libro) => {
            const libroCategorias = (libro.categoria || '').toLowerCase();
            return categories.some((category) => libroCategorias.includes(category.toLowerCase()));
          });
          setSearchResults(categoryResults);
        } else {
          setSearchResults(textResults);
        }
    
        setShowResults(true); // Mostrar resultados después de la búsqueda
      };

    return (
        <div className={styles.container}>
        <Barra titulobarra = 'Administración de Biblioteca'/>
        <main className={styles.xd}>
        <Sidebar li1="Inicio" li2="Perfil" li3="Bibliotecas" />
          {showResults ? (
            <PaginaResultados results={searchResults} />
          ) : (
        <section className={styles.parte2}>
          
            <div className={styles.titulo2}>
              <span>Búsqueda</span></div>
              <article className={styles.articulo1}>
                  
                <div className={styles.recuadro1}>
                  <div className={styles.Barrasprestamo}>
                    <BusquedaAlumn onSearch={handleSearch} />
                  </div>
                  <div className={styles.checkboxs}>
                        <span>Incluir busqueda</span>
                        <div>
                            <input type="checkbox" />
                            <span>Título</span> 
                        </div>
                        <div>
                            <input type="checkbox" />
                            <span>Autor, autores</span>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <span>Serie</span>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <span>ISBN</span>
                        </div>
                    </div>
                    
                </div>
        
                
              </article>
            
          
        </section>
        )}
      </main>
    </div>
    )
}

export default Prestamo;
"use client"
import styles from './resultados.module.css';
import Sidebar from './sidebar';
import Botonlibros from './busquedalibro';
import Barra from './barra';
import Libro from './libro';
import Barrareserva from './barrareserva';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Admins from "./Admin.json";
import Alumnos from "./Alumnos.json"


const Resultados = () => {
  // No necesitas verificar la condición AdminPage
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

  const [libraryData, setLibraryData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  
  useEffect(() => {
    fetch('library.json')
      .then(response => response.json())
      .then(data => {
        setLibraryData(data);
      })
      .catch(error => {
        console.error("Error al cargar library.json", error);
      });
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);

    const results = libraryData.filter(libro => libro.titulo.toLowerCase().includes(text.toLowerCase()));

    setSearchResults(results);
  }

  const [currentPage, setCurrentPage] = useState(1);
  // Número de libros a mostrar por página
  const booksPerPage = 3;

  // Función para obtener los libros que deben mostrarse en la página actual
  const getBooksForCurrentPage = () => {
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    return searchResults.slice(startIndex, endIndex);
  }

  // Función para manejar el cambio de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  return (
    <div className={styles.container}>
      <Barra />
      <main className={styles.xd}>
        <Sidebar li1="Principal" li2="Perfil" li3="Biblioteca" />
        <section className={styles.parte2}>
          <div className={styles.titulo2}>
            <span>Biblioteca</span>
            <Link href={'./agregarlibro'}>
              <button className={styles.botontitulo}>Añadir un nuevo recurso</button>
            </Link>
          </div>
          <article className={styles.articulo1}>
            <div className={styles.recuadro1}>
              <Barrareserva onSearch={handleSearch}  />
            </div>
            <div className={styles.libros} >
            {getBooksForCurrentPage().map((libro, index) => (
                <Libro key={index} libro={libro} />
              ))}
            </div>
            <Botonlibros
            currentPage={currentPage}
            totalPages={Math.ceil(searchResults.length / booksPerPage)}
            onPageChange={handlePageChange} 
            />
          </article>
        </section>
      </main>
    </div>
  );
};

export default Resultados;
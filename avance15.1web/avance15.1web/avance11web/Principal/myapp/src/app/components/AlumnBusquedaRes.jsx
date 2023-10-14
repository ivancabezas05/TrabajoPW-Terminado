"use client"
import Sidebar from './sidebar';
import React, { useState, useRef, useEffect } from 'react';
import styles from './BibliotecaBusqueda.module.css';
import { useRouter } from 'next/router'; 

function BusquedaAlumnRes(props) {
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
      }, []); // Esto se ejecutará después de la renderización inicial del componente
    
      // Resto de tu código de la página de inicio del alumno

  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState([]);
  const categoryInputRef = useRef(null);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
  }

  const handleCategoryInputKeyDown = (e) => {
    if (e.key === 'Enter' && categoryInputRef.current.value.trim() !== '') {
      const newCategory = categoryInputRef.current.value.trim();
      setCategories([...categories, newCategory]);
      categoryInputRef.current.value = '';
    }
  }

  const removeCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  }

  const handleSearch = () => {
    props.onSearch(searchText, categories);
  }

  return (
    <div >
    
    <div className={styles.botones2}>
        <button className={styles.boton2} onClick={handleSearch}>
                Volver a buscar
              </button>
    </div>
        
    </div>
  );
}

export default BusquedaAlumnRes;

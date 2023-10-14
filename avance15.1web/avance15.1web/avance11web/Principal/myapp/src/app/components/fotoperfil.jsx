import styles from './perfiladmin.module.css';
import React, { useState, useEffect } from 'react';

const FotoP = ({ modo }) => {
    const [imagenURL, setImagenURL] = useState(null);

    useEffect(() => {
    // Recuperar la URL de la imagen del almacenamiento local al cargar el componente
    const storedImagenURL = localStorage.getItem(`imagenURL${modo}`);
    if (storedImagenURL) {
    setImagenURL(storedImagenURL);
    }
    }, [modo]);

    const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const newImagenURL = e.target.result;

    // Guardar la URL de la nueva imagen en el almacenamiento local
    localStorage.setItem(`imagenURL${modo}`, newImagenURL);
    setImagenURL(newImagenURL);
    };

    reader.readAsDataURL(file);
    }
    };

    const handleCambiarImagen = () => {
    if (imagenURL) {
    setImagenURL(null);
    localStorage.removeItem(`imagenURL${modo}`);
    }
    };

    return (
    <div className={styles.contenedorphoto}>
    {imagenURL && (
    <div className={styles.elementos}>
    <img src={imagenURL} alt="imagen" />
    <button onClick={handleCambiarImagen}>Cambiar Imagen</button>
    </div>
    )}
    {!imagenURL && (
    <div className={styles.Botoncambiar}>
    <input type="file" id="cargarimagen" accept="image" onChange={handleImagenChange} />
    <label htmlFor="cargarimagen">Agregar imagen</label>
    </div>
    )}
    </div>
    );

};

export default FotoP;

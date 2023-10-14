
"use client"
import styles from './perfiladmin.module.css'
import BarraP from './barraperfiles';
import InputP from './inputperfil';
import BotonP from './botonP';
import FotoP from './fotoperfil';
import React, { useState, useEffect } from 'react';



const Contenido = ({ modo }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('DATOS PERSONALES');
  const [datosPersonales, setDatosPersonales] = useState({
    nombres: '',
    tipoDocumento: '',
    apellidos: '',
    nroDocumento: '',
    correo: '',
    password: '',
    color: '',
    prefijo: '',
    idioma: '',
  });

  useEffect(() => {
    const usuarioJSON = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioJSON);
    if (usuario) {
      setDatosPersonales(usuario);
    }
  }, []);

  // Función para manejar cambios en los datos personales
  const handleDatosPersonalesChange = (e) => {
    const { name, value } = e.target;
    setDatosPersonales({ ...datosPersonales, [name]: value });
  };

  // Función para guardar los cambios en el localStorage
  const handleGuardarCambios = () => {
    // Validar si algún campo está vacío
    const camposVacios = Object.values(datosPersonales).some(value => {
      if (typeof value === 'string') {
        return value.trim() === '';
      }
      return false; // Si no es una cadena, no se considera vacío
    });
  
    if (camposVacios) {
      alert('Por favor, completa todos los campos antes de guardar los cambios.');
    } else {
      const usuarioJSON = localStorage.getItem('usuario');
      const usuario = JSON.parse(usuarioJSON);
  
      // Combinar los datos existentes con los datos actualizados
      const usuarioActualizado = { ...usuario, ...datosPersonales };
  
      // Guardar los datos actualizados en el localStorage
      localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
      console.log('Datos de usuario actualizados en localStorage:', usuarioActualizado);
    }
  };
  
  return (
    <article className={styles.articulo1}>
      <div className={styles.recuadro1}>
        <div className={styles.cuadro1}>
          <FotoP modo = {modo} />
        </div>
        <div className={styles.cuadro2}>
          <BarraP setOpcionSeleccionada={setOpcionSeleccionada} modo = {modo}/>
          {modo === 'admin' ? (
            <form className={styles.formulario} action="">
              {/* Renderizar inputs basados en la opción seleccionada */}
              {opcionSeleccionada === 'DATOS PERSONALES' && (
                <>
                  <InputP placeholder='Nombres' inputType='text' required name='nombres' value={datosPersonales.nombres || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Tipo de Documento' inputType='text' name='tipoDocumento' required value={datosPersonales.tipoDocumento || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Apellidos' inputType='text' required name='apellidos' value={datosPersonales.apellidos || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Nro de Documento' inputType='text' name='nroDocumento' required value={datosPersonales.nroDocumento || ''} onChange={handleDatosPersonalesChange}  />
                  <BotonP onSaveChanges={handleGuardarCambios} />
                </>
              )}
              {opcionSeleccionada === 'CUENTA' && (
                <>
                  <InputP placeholder='Correo' inputType='email' name='correo' required value={datosPersonales.correo || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Password' inputType='password' name='password' required value={datosPersonales.password || ''} onChange={handleDatosPersonalesChange} />
                  <BotonP onSaveChanges={handleGuardarCambios} />
                </>
              )}
              {opcionSeleccionada === 'PREFERENCIAS' && (
                <>
                  <InputP placeholder='Color' inputType='text' name='color' required value={datosPersonales.color || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Prefijo' inputType='text' name='prefijo' required value={datosPersonales.prefijo || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Idioma' inputType='text'  name='idioma' required value={datosPersonales.idioma || ''} onChange={handleDatosPersonalesChange} />
                  <BotonP onSaveChanges={handleGuardarCambios} />
                </>
              )}
              
            </form>
          ) : modo === 'alumno' ? (
            <form className={styles.formulario} action="">
              {/* Renderizar inputs basados en la opción seleccionada */}
              {opcionSeleccionada === 'DATOS PERSONALES' && (
                <>
                  <InputP placeholder='Nombres'inputType='text' name='nombres' value={datosPersonales.nombres || ''} onChange={handleDatosPersonalesChange} required />
                  <InputP placeholder='Tipo de Documento' inputType='text'  name='tipoDocumento' required value={datosPersonales.tipoDocumento || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Apellidos' inputType='text' name='apellidos' required value={datosPersonales.apellidos || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Nro de Documento' inputType='text' name='nroDocumento' required value={datosPersonales.nroDocumento || ''} onChange={handleDatosPersonalesChange} />
                  <BotonP onSaveChanges={handleGuardarCambios} />
                </>
              )}
              {opcionSeleccionada === 'CUENTA' && (
                <>
                  <InputP placeholder='Correo' inputType='email'  name='correo' required value={datosPersonales.correo || ''} onChange={handleDatosPersonalesChange} />
                  <InputP placeholder='Password' inputType='password' name='password' required value={datosPersonales.password || ''} onChange={handleDatosPersonalesChange} />
                  <BotonP onSaveChanges={handleGuardarCambios} />
                </>
              )}
              
            </form>
          ) : modo ='agregar' ? (
            <form className={styles.formulario} action="">
                {/* Renderizar inputs basados en la opción seleccionada */}
                {opcionSeleccionada === 'DATOS PERSONALES' && (
                  <>
                    <InputP placeholder='TÍTULO' inputType='text' name='' value={datosPersonales.Titulo || ''} onChange={handleDatosPersonalesChange} required/>
                    <InputP placeholder='Autor, autores' inputType='text'  name='' value={datosPersonales.autor|| ''} onChange={handleDatosPersonalesChange} required />
                    <InputP placeholder='ISBN' inputType='text'  name='' value={datosPersonales.isbn || ''} onChange={handleDatosPersonalesChange} required/>
                    <InputP placeholder='Serie, tipo'  inputType='text' name='' value={datosPersonales.serie || ''} onChange={handleDatosPersonalesChange} required />
                  </>
                )}
                
                <BotonP onSaveChanges={handleGuardarCambios} />
              </form>
          ) : null }
        </div>
      </div>
    </article>
  );
};

export default Contenido;

  
// olvidarcontra.jsx

'use client'

import styles from './registro.module.css'
import Input from './input1'
import React, { useState } from 'react';
import Link from 'next/link'
import Admins from "./Admin.json";
import Alumnos from "./Alumnos.json"
import { useRouter } from 'next/router';

const OlvidarContra = () => {
  const [state, setState] = useState({ correo: '', contra: '', nuevacontra: '' });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    const { correo, contra, nuevacontra } = state;

    // Verificar si el correo y contraseña existen en los JSON
    let user = Admins.find((admin) => admin.correo === correo && admin.password === contra);

    if (!user) {
      user = Alumnos.find((alumno) => alumno.correo === correo && alumno.password === contra);
      if (user) {
        user.tipo = 'alumno';  // Asignar tipo 'alumno' al objeto user
      }
    } else {
      user.tipo = 'admin';  // Asignar tipo 'admin' al objeto user
    }

    if (user) {
      // Usuario encontrado, actualizar la contraseña
      user.password = nuevacontra;

      // Guardar los datos actualizados en localStorage
      localStorage.setItem('usuario', JSON.stringify(user));

      // Redireccionar a alguna página o mostrar un mensaje de éxito
      alert('Contraseña actualizada exitosamente.');

      // Redireccionar a alguna página
      router.push(`/${user.tipo === 'admin' ? 'Inicioadmin' : 'Inicioalumno'}?correo=${correo}&nombre=${user.nombres}`);
    } else {
      // No coincide el correo o contraseña
      alert('El correo o la contraseña son incorrectos.');
    }
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.contenido}> 
        <form className={styles.registro} onSubmit={handleUpdatePassword}>
          <Input inputType="text" spanText="Correo" name="correo" value={state.correo} onChange={handleInputChange} />
          <Input inputType="password" spanText="Contraseña" name="contra" value={state.contra} onChange={handleInputChange} />
          <Input inputType="password" spanText="Nueva Contraseña" name="nuevacontra" value={state.nuevacontra} onChange={handleInputChange} />
          <div className={styles.label2}>
            <div className={styles.opcion}>
              <button className={styles.button1} type="submit">Actualizar</button>
            </div>
          </div> 
        </form>
      </div> 
    </div>
  );
}

export default OlvidarContra;

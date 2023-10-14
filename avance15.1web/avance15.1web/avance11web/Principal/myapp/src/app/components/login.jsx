
"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import styles from './page.module.css'
import Input from './input1'; 
import Admins from "./Admin.json";
import Alumnos from "./Alumnos.json"


const Login = () =>{
  const [state, setState] = useState({ usuario: '', contrasena: '' });
  const router = useRouter();



  const mngmtChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const validarLogeo = (e) => {
    e.preventDefault();

    const { usuario, contrasena } = state;

    // Verificar si el usuario es un administrador
    const admin = Admins.find(
      (admin) => admin.correo === usuario && admin.password === contrasena
    );

    // Verificar si el usuario es un usuario común
    const alumno = Alumnos.find(
      (alumno) => alumno.correo === usuario && alumno.password === contrasena
    );

    if (admin) {
      // Usuario es un administrador
      localStorage.setItem('usuario', JSON.stringify(admin));
      console.log('Datos del administrador guardados en localStorage:', admin);
      router.push(`/Inicioadmin?correo=${usuario}&nombre=${admin.nombres}`);
      
    } else if (alumno) {
      // Usuario es un usuario común
      localStorage.setItem('usuario', JSON.stringify(alumno));
      console.log('Datos del administrador guardados en localStorage:', alumno);
      router.push(`/Inicioalumno?correo=${usuario}&nombre=${alumno.nombres}`);
      
    } else {
      // No coincide la contraseña o usuario
      alert('No coincide la contraseña o usuario o No tiene cuenta');
    }
  };
  


    return (
        <div className={styles.contenedor}>
          <div className={styles.contenido}> 
          <span className={styles.titulo1}>Sistema de reserva de Libros</span>
          <form  className= {styles.registro} onSubmit={validarLogeo}>
              <Input inputType="text" spanText="Usuario o Correo" name="usuario"
                value={state.usuario}
                onChange={mngmtChange}/>
              <div className={styles.label2}>
              <Input inputType="password" spanText="Contraseña" name="contrasena"
                value={state.contrasena}
                onChange={mngmtChange}/>
              <div className={styles.opcion}>
              <span><button className= {styles.button1} ><Link href="./olvidarContra">Olvidé mi contraseña</Link></button></span>
              </div>
              </div> 
              <div className={styles.botones}>
                  <button className= {styles.button1} ><Link href="./registro">Registro usuario</Link></button>
                  <button className= {styles.button2} type="submit">Ingresar</button>
              </div>
          </form>
          </div> 
          
      </div>
    )
}

export default Login;
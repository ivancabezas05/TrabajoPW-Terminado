import styles from './admin.module.css'
import Icono1 from './icono1';
import Icono2 from './icono2';

const Span = (props) =>{
    return (
        
        <header className={styles.barra}>
           <Icono1/>
            <span className={styles.titulobarra}>{props.titulobarra}</span>
            <Icono2/>
        </header>    

    )
}

export default Barra;

import styles from './admin.module.css'

const Cuadros = (props) =>{ 

    return (
        <article className={styles.articulo1}>  
                    <div className={styles.recuadro1}>   
                    <div>
                        <span className={styles.texto}>{props.texto}</span>
                    </div>
        <div className={styles.contenido}>
        <div className={styles.cuadro}>   
        <div className={styles.contenedorimg}>  
            <img src="/media/retrato.png" alt="imagen"/>
        </div>
        <div className={styles.textito}>
        <p>"Clean Code: A Handbook of Agile <br/> Software Craftsmanship"</p>
        <span>18/09/2023 08:00 am</span>
        </div>
        <div className={styles.imagencuadro}>
            <img src="/media/libro.jpg" alt="imagen-libro"/>
        </div>
        </div>
        <div className={styles.cuadro}>   
            <div className={styles.contenedorimg}>
                <img src="/media/retrato.png" alt="imagen"/>
            </div>
            <div className={styles.textito}>
            <p>”Introduction to the Theory <br/> of Computation”</p>
            <span>18/09/2023 08:00 am</span>
            </div>
            <div className={styles.imagencuadro}>
                <img src="/media/libro.jpg" alt="imagen"/>
            </div>
        </div>
    </div>
    {props.mostrarOpcion && (
          <div className={styles.opcion}>
            <span>Ver todo</span>
          </div>
        )}   
        </div>
    </article>
    )

}

export default Cuadros;
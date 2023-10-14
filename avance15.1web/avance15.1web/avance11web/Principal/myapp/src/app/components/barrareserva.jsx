import styles from './barrareserva.module.css';
import { useState } from 'react';

const Barrareserva = (props) => {

  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
    props.onSearch(inputText);
  }
   
  return (
    <div className={styles.busqueda}>
                            <div className={styles.lupa}>
                                <img src="/media/lupa.png" alt="lupa" />
                            </div>
                            <div className={styles.info}>
                                    <label className={styles.placeholder}  htmlFor="">Ingresa la palabra clave:</label>
                                    <input className={styles.input} type="text" value={searchText}
                                    onChange={handleInputChange}/>
                            </div>
                        </div>
  );
};

export default Barrareserva;
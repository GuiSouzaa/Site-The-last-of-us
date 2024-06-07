import Header from '../../../componentes/Header';
import Footer from '../../../componentes/Header/Footer';
import styles from './Favoritos.module.css'

function Favoritos(){
    return(
        <div className={styles.favoritos}>
            <Header />
            <h2>Favoritos</h2>
            <Footer />
            
        </div>
    )
}

export default Favoritos;
import Header from '../../componentes/Header';
import Banner from '../../componentes/Header/Banner';
import Footer from '../../componentes/Header/Footer';
import styles from './Inicio.module.css';

function Inicio(){
    return(
        <div className={styles.inicio}>
        <Header />
        <Banner />
        <Footer />
        </div>
    )
}

export default Inicio;
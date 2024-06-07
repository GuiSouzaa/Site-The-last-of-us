import Header from '../../../componentes/Header';
import PersonagensCards from '../../../componentes/Header/PersonagensCards';
import styles from './Personagem.module.css';

function Personagem(){
    return(
        <div className={styles.personagens}>
            <Header />
            <PersonagensCards />
        </div>
    )
}

export default Personagem;
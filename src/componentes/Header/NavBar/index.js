import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';

function NavBar(){
    return(
       <div className={styles.navegacao}>
        <Link to='/' className={styles.link}>Home</Link>
        <Link to='/Favoritos' className={styles.link}>Favoritos</Link>
        <Link to='/Personagens' className={styles.link}>Personagens</Link>
       </div>
    )
}

export default NavBar;
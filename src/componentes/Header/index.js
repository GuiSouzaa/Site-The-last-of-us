import styles from './Header.module.css'
import NavBar from './NavBar';
import logo from './The_Last_of_Us_logo.svg.png'

function Header(){
    return(
        <div className={styles.cabecario}>
            <img className={styles.logo} src={logo} alt='logo'></img>
            <NavBar />
        </div>
    )
}

export default Header;
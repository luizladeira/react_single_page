import {Link} from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu(){
    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to="/">
                    Ínicio
                </Link>
                <Link className={styles.link} to="/sobre-mim">
                    Sobre Mim
                </Link>
            </nav>
        </header>
    )
}
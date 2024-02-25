import MenuLink from '../menuLink';
import styles from './Menu.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Menu(){
   
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início                    
                </MenuLink>
                <MenuLink to="/sobre-mim">
                    Sobre mim
                </MenuLink>
                
            </nav>
        </header>
    )
}
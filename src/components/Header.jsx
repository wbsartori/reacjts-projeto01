import styles from './Header.module.css';

import igniteLogo from '../assets/images/ignite-logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src="src/assets/images/ignite-logo.svg"/>
        </header>
    );
}
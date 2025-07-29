import styles from './Header.module.scss'
import profile_picture from '../../assets/img/profile_picture.png'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.aboutButton}>
                <img src={profile_picture} alt="Koçak Ali Picture" />
                <h1>Koçak Ali</h1>
            </div>
            <nav>
                <a href="" className={styles.active}>Accueil</a>
                <a href="">Compétences</a>
                <a href="">Travaux</a>
                <a href="">Contact</a>
            </nav>
        </header>
    );
}
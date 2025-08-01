import styles from "./Header.module.scss";
import profile_picture from "../../assets/img/profile_picture.png";
import menuIcon from "../../assets/img/menu.svg";
import { useEffect, useRef, useState } from "react";

export default function Header({windowWidth}) {
    const [aboutButtonHeight, setAboutButtonHeight] = useState(null);
    const aboutButtonRef = useRef(null);

    useEffect(() => {
        if (aboutButtonRef.current) {
            setAboutButtonHeight(aboutButtonRef.current.offsetHeight);
        }
    }, [windowWidth]);

    return (
        <header className={styles.header}>
            <div ref={aboutButtonRef} className={styles.aboutButton}>
                <img src={profile_picture} alt="Koçak Ali Picture" />
                <h1>Koçak Ali</h1>
            </div>
            <nav>
                <a href="" className={styles.active}>
                    Accueil
                </a>
                <a href="">Compétences</a>
                <a href="">Travaux</a>
                <a href="">Contact</a>
            </nav>
            <div
                className={styles.menuButton}
                style={{ height: aboutButtonHeight }}
            >
                <img src={menuIcon} alt="menu" />
            </div>
        </header>
    );
}

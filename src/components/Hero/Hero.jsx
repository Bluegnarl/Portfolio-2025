import styles from "./Hero.module.scss";
import Title from "../Title/Title";

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.flashlight}></div>
            <Title type={"h2"} tagline="Découvrez">
                Kae Studio
            </Title>
            <p>
                Avec Koçak Ali, développeur et designer indépendant,
                <br />
                transformez vos idées en projets uniques et vivants.
            </p>
        </section>
    );
}

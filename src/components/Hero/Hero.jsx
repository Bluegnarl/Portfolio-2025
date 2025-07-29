import styles from "./Hero.module.scss";
import arrow_outward from "../../assets/img/arrow_outward.svg";
import hero_shape from "../../assets/img/hero_shape.png";

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <img className={styles.heroShape} src={hero_shape} alt="Shape" />
            <h2 className={styles.slogan}>
                <span className={styles.slogan}>Donnez vie</span>
                <br />
                <span className={styles.slogan}>à votre </span>
                <span className={styles.sloganHighlight}>vision.</span>
            </h2>
            <div className={styles.heroContent}>
                <p>
                    J’allie innovation digitale et sens du détail pour concevoir
                    des expériences <br />
                    uniques, sur-mesure et immersives.
                </p>
                <a href="/">
                    <h4>Créons ensemble</h4>
                    <img src={arrow_outward} alt="" />
                </a>
            </div>
        </section>
    );
}

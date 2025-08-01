import styles from "./Hero.module.scss";
import arrow_outward from "../../assets/img/arrow_outward.svg";
import hero_shape from "../../assets/img/hero_shape.png";
import { useRef, useState, useEffect } from "react";

export default function Hero({ windowWidth, windowHeight }) {
    const [shapeWidth, setShapeWidth] = useState(null);
    const [shapeHeight, setShapeHeight] = useState(null);
    const heroElementsRef = useRef(null);

    useEffect(() => {
        if (heroElementsRef.current) {
            setShapeWidth(windowWidth - heroElementsRef.current.offsetWidth);
            setShapeHeight(windowHeight - heroElementsRef.current.offsetHeight);
        }
    }, [windowWidth, windowHeight]);

    return (
        <section className={styles.heroContainer}>
            <img
                style={
                    windowWidth >= 1000
                        ? { maxWidth: shapeWidth }
                        : { maxHeight: shapeHeight }
                }
                className={styles.heroShape}
                src={hero_shape}
                alt="Shape"
            />
            <div ref={heroElementsRef} className={styles.heroElements}>
                <h2 className={styles.slogan}>
                    <span className={styles.slogan}>Donnez vie</span>
                    <br />
                    <span className={styles.slogan}>à votre </span>
                    <span className={styles.sloganHighlight}>vision.</span>
                </h2>
                <div className={styles.heroContent}>
                    <p>
                        J’allie innovation digitale et sens du détail pour
                        concevoir des expériences {windowWidth >= 600 && <br />}
                        uniques, sur-mesure et immersives.
                    </p>
                    <a href="/">
                        <h4>Créons ensemble</h4>
                        <img src={arrow_outward} alt="arrow outward" />
                    </a>
                </div>
            </div>
        </section>
    );
}

import styles from "./Button.module.scss";

export default function Button({ children, side, href, isHero }) {
    return (
        <>
            {side != "center" ? (
                <button
                    className={`
                ${styles.button} 
                ${
                    side === "right"
                        ? styles.buttonRight
                        : side === "left"
                        ? styles.buttonLeft
                        : ""
                }  
                ${isHero && styles.buttonHero}  
            `}
                >
                    {children}
                </button>
            ) : (
                <a target="_blank" href={href} className={styles.button}>
                    {children}
                </a>
            )}
        </>
    );
}

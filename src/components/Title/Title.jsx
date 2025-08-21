import styles from "./Title.module.scss";

export default function Title({ type, tagline, children }) {
    return (
        <div className={styles.titleContainer}>
            <div className={styles.tagline}>
                <div className={styles.line}></div>
                <h5>{tagline}</h5>
                <div className={styles.line}></div>
            </div>
            {type === "h2" ? (
                <h2 className={styles.title}>{children}</h2>
            ) : (
                <h3 className={styles.title}>{children}</h3>
            )}
        </div>
    );
}

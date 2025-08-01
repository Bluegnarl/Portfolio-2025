import styles from "./BubbleButton.module.scss";

export default function BubbleButton({href, children}) {
    return (
        <a href={href} className={styles.bubbleButton}>
            {children}
        </a>
    )
}
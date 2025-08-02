import styles from "./ProjectTag.module.scss";

export default function ProjectTag({ Image, children }) {
    return (
        <li className={styles.projectTag}>
            <Image fill="#ffffff" />
            <p>{children}</p>
        </li>
    );
}

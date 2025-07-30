import styles from "./FloatingSkill.module.scss";

export default function FloatingSkill({ children, src, top, left }) {
    return (
        <div
            className={styles.floatingSkillContainer}
            style={{
                top: `${top}%`,
                left: `${left}%`,
                transform: `translate(-${top}%, -${left}%)`,
            }}
        >
            <img src={src} alt={children} />
            <h3>{children}</h3>
        </div>
    );
}

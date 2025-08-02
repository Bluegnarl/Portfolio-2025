import styles from "./FloatingSkill.module.scss";

export default function FloatingSkill({ children, Image, top, left }) {
    return (
        <div
            className={styles.floatingSkillContainer}
            style={{
                top: `${top}%`,
                left: `${left}%`,
                transform: `translate(-${top}%, -${left}%)`,
            }}
        >
            <Image fill="#000" />
            <h3>{children}</h3>
        </div>
    );
}

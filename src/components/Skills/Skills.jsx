import styles from "./Skills.module.scss";
import skills_shape from "../../assets/img/skills_shape.png";
import FloatingSkill from "../FloatingSkill/FloatingSkill";
import cinematic_blur from "../../assets/img/cinematic_blur.svg"

export default function Skills() {
    return (
        <section className={styles.skillsContainer}>
            <img
                className={styles.skillsShape}
                src={skills_shape}
                alt="Skills Shape"
            />
            <div className={styles.skillsContent}>
                <h2>
                    Rien n'est Laissé au Hasard,
                    <br />
                    Tout est Pensé pour <span>Durer</span>
                </h2>
                <p>
                    Chaque projet est une occasion de mobiliser tout ce que je
                    sais faire. Je combine mes compétences pour créer des
                    solutions sur mesure, efficaces et créatives.
                </p>
            </div>
            <FloatingSkill top={40} left={65} src={cinematic_blur}>
                Identité Visuelle
            </FloatingSkill>
            <FloatingSkill top={40} left={35} src={cinematic_blur}>
                Design
            </FloatingSkill>
            <FloatingSkill top={70} left={70} src={cinematic_blur}>
                Développement
            </FloatingSkill>
            <FloatingSkill top={70} left={40} src={cinematic_blur}>
                Montage Vidéo
            </FloatingSkill>
        </section>
    );
}

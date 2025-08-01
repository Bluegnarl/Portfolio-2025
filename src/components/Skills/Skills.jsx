import styles from "./Skills.module.scss";
import skills_shape from "../../assets/img/skills_shape.png";
import FloatingSkill from "../FloatingSkill/FloatingSkill";
import { MontageIcon, DevIcon, DesignIcon, BrandingIcon } from "../Icons";

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
            <FloatingSkill top={40} left={65} Image={BrandingIcon}>
                Identité Visuelle
            </FloatingSkill>
            <FloatingSkill top={40} left={35} Image={DesignIcon}>
                Design
            </FloatingSkill>
            <FloatingSkill top={70} left={70} Image={DevIcon}>
                Développement
            </FloatingSkill>
            <FloatingSkill top={70} left={40} Image={MontageIcon}>
                Montage Vidéo
            </FloatingSkill>
        </section>
    );
}

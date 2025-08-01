import styles from "./Project.module.scss";

import ProjectTag from "../ProjectTag/ProjectTag";

import { DevIcon, BrandingIcon, DesignIcon, MontageIcon } from "../Icons";

import { projectImages } from "../Images";

export default function Project({ project }) {
    const tagMap = {
        dev: { icon: DevIcon, label: "Développement" },
        design: { icon: DesignIcon, label: "Design" },
        branding: { icon: BrandingIcon, label: "Identité Visuelle" },
        montage: { icon: MontageIcon, label: "Montage" },
    };

    return (
        <article className={styles.project}>
            <img
                loading="lazy"
                src={projectImages[project.image]}
                alt={project.client + " - " + project.title}
            />
            <div className={styles.projectContent}>
                <div className={styles.projectInfo}>
                    <h5>{project.client}</h5>
                    <h3>{project.title}</h3>
                </div>
                <ul>
                    {project.tags.map((tag, i) => {
                        const { icon: Icon, label } = tagMap[tag];
                        return (
                            <ProjectTag key={i} Image={Icon}>
                                {label}
                            </ProjectTag>
                        );
                    })}
                </ul>
            </div>
        </article>
    );
}

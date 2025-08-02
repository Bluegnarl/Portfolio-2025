import styles from "./Projects.module.scss";

import { useMemo } from "react";

import Project from "./Project/Project";
import { getProjects } from "../../api/projects";

import arrow_down from "../../assets/img/arrow_down.svg";
import projects_shape from "../../assets/img/projects_shape.png";

export default function Projects() {
    const projects = useMemo(() => getProjects(), []);

    return (
        <section className={styles.projectsContainer}>
            <h2>
                <img src={projects_shape} alt="Projects Shape" />
                <span>Mes Travaux</span>
            </h2>
            <div className={styles.projectsList}>
                {projects.map((project, i) => (
                    <Project project={project} key={i} />
                ))}
            </div>
            <a href="/">
                <h4>Voir plus</h4>
                <img src={arrow_down} alt="" />
            </a>
        </section>
    );
}

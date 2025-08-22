import styles from "./Hero.module.scss";
import Title from "../Title/Title";
import Button from "../Button/Button";

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.flashlight}></div>
            <Title type={"h2"} tagline="Découvrez">
                Kae Studio
            </Title>
            <p>
                Avec Koçak Ali, développeur et designer indépendant,
                <br />
                transformez vos idées en projets uniques et vivants.
            </p>
            <Button side={"right"} isHero={true}>
                <h3>Créons ensemble</h3>
                <svg
                    width="35"
                    height="37"
                    viewBox="0 0 35 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <mask
                        id="mask0_600_5520"
                        style="mask-type:alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="35"
                        height="37"
                    >
                        <rect
                            x="0.712891"
                            y="0.5"
                            width="34.2857"
                            height="36"
                            fill="#D9D9D9"
                        />
                    </mask>
                    <g mask="url(#mask0_600_5520)">
                        <path
                            d="M8.47692 31L6 28.5231L22.9846 11.5385H7.76923V8H29V29.2308H25.4615V14.0154L8.47692 31Z"
                            fill="url(#paint0_linear_600_5520)"
                        />
                    </g>
                    <defs>
                        <linearGradient
                            id="paint0_linear_600_5520"
                            x1="17.5"
                            y1="31"
                            x2="17.5"
                            y2="8"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#D8ECF8" />
                            <stop offset="1" stop-color="#98C0EF" />
                        </linearGradient>
                    </defs>
                </svg>
            </Button>
        </section>
    );
}

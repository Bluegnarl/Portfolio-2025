import styles from "./Contact.module.scss";

import { useRef, useEffect, useState } from "react";

import sendIcon from "../../assets/img/send.png";
import githubIcon from "../../assets/img/github.png";
import instagramIcon from "../../assets/img/instagram.png";
import whatsappIcon from "../../assets/img/whatsapp.png";
import facebookIcon from "../../assets/img/facebook.png";
import contact_shape from "../../assets/img/contact_shape.png";

import BubbleButton from "../BubbleButton/BubbleButton";

export default function Contact() {
    const contactH4 = useRef(null);
    const [h4Width, setH4Width] = useState(null);

    useEffect(() => {
        if (contactH4.current) {
            setH4Width(contactH4.current.offsetWidth);
        }
    }, []);

    return (
        <section className={styles.contactContainer}>
            <img
                className={styles.shape}
                src={contact_shape}
                alt="Contact Shape"
            />
            <div>
                <div className={styles.contactHeader}>
                    <h2>Ensemble, créons un projet qui vous ressemble</h2>
                    <div>
                        <BubbleButton>
                            <img src={githubIcon} alt="Github" />
                        </BubbleButton>
                        <BubbleButton>
                            <img src={instagramIcon} alt="Instagram" />
                        </BubbleButton>
                        <BubbleButton>
                            <img src={facebookIcon} alt="Facebook" />
                        </BubbleButton>
                        <BubbleButton>
                            <img src={whatsappIcon} alt="WhatsApp" />
                        </BubbleButton>
                    </div>
                </div>
                <div className={styles.contactContent}>
                    <div>
                        <h4 ref={contactH4}>
                            Vous avez un projet en tête à réaliser ?<br />
                            Écrivez-moi par mes réseaux ou par mail.
                        </h4>
                        <p
                            style={{
                                maxWidth: `${h4Width + 50}px`,
                            }}
                        >
                            Décrivez votre projet de manière aussi détaillée que
                            possible. N'hésitez pas à fournir des images, des
                            exemples ou toute autre information qui pourrait
                            m'aider à mieux comprendre vos besoins. Pensez
                            également à indiquer un moyen de vous recontacter
                            plus facilement (email, téléphone, Instagram, ...).
                        </p>
                    </div>
                    <BubbleButton href={"mailto:kocakalierdem@gmail.com"}>
                        <span>Envoyer un mail</span>
                        <img src={sendIcon} alt="Envoyer" />
                    </BubbleButton>
                </div>
            </div>
        </section>
    );
}

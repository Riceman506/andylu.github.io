import styles from './ProfileStyles.module.css';
import profileImg from '../../assets/Profile2024.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Profile() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const emailIcon = theme === 'light' ? emailLight : emailDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


    return (
    <section id="profile" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.profile}
            src={profileImg} 
            alt="Profile picture of Andy Lu" 
            />
            <img 
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>
                Andy Lu
            </h1>
            <h2 className={styles.title}>2nd Year Georgia Tech Computer Science</h2>
            <p className={styles.description}>
                Driven by a passion for technology and innovation, I am committed to leveraging 
                my skills to solve complex problems and create impactful solutions.
            </p>
            <span>
                <a href="https://www.twitter.com/" target='_blank'>
                    <img src={emailIcon} alt="Email Icon" />
                </a>
                <a href="https://www.github.com/" target='_blank'>
                    <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href="https://www.linkedin.com/" target='_blank'>
                    <img src={linkedinIcon} alt="LinkedIn Icon" />
                </a>
            </span>
            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
    );
}

export default Profile
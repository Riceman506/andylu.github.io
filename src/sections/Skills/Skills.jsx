import styles from './SkillsStyles.module.css';
import checkMarkLight from '../../assets/checkmark-light.svg';
import checkMarkDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
        <h1 className="SectionTitle">Skills</h1>
        <br />
        <br />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Python" />
            <SkillList src={checkMarkIcon} skill="Java" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Agile" />
            <SkillList src={checkMarkIcon} skill="Git" />
        </div>
        <br />
        <h2>Languages</h2>
        <br />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="English" />
            <SkillList src={checkMarkIcon} skill="Chinese" />
        </div>
    </section>
  )
}

export default Skills
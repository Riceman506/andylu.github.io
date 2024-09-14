import styles from './AboutMeStyles.module.css';
import welding from '../../assets/Welding.png';
import midn from '../../assets/MIDN.png';
import photo from '../../assets/Photo.png';
import AboutMeCard from '../../common/AboutMeCard';

function AboutMe() {
  return (
    <section id= "aboutMe" className={styles.container}>
        <h1 className= "SectionTitle">About Me</h1>
        <h3 className= "Description">I am a...</h3>
        <br />
        <br />
        <div className={styles.AboutMeContainer}>
            <AboutMeCard src={welding} h3="Welder" p="I am a recently trained welder for Georgia Tech OffRoad" />
            <AboutMeCard src={midn} h3="NROTC Midshipman" p="I am a Midshipman 3/C planning on becoming a Naval Officer" />
            <AboutMeCard src={photo} h3="Photographer" p="I am a novice photographer who enjoys shooting portraits" />
        </div>
    </section>
  )
}

export default AboutMe
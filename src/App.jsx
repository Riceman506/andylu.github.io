import './App.css';
import Navbar from './sections/Navbar/Navbar';
import Profile from './sections/Profile/Profile';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import AboutMe from './sections/AboutMe/AboutMe';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <Projects />
      <Skills />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
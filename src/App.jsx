import './App.scss'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/Skills/Skills.jsx'
import Works from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'

export default function App() {
  return (
      <>
          <Header />
          <Hero />
          <Skills />
          <Works />
          <Contact />
      </>
  );
}

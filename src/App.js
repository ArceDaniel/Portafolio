import Nav from './components/Nav/Nav.jsx'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Background from './components/Background/Background.jsx';
import Home from './components/Home/home.jsx';
import Skills from './components/Skills/Skills.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Portafolio from './components/Portafolio/Portafolio.jsx';


function App() {
  return (
    <>
      <Background />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/portafolio" element={<Portafolio />}  />
        <Route path="/contact" element={<Contact />}  />
      </Routes>

    </>
  );
}

export default App;

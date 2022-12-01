import Nav from './components/Nav/Nav.jsx'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Background from './components/Background/Background.jsx';
import Home from './components/Home/home.jsx';
import Skills from './components/Skills/Skills.jsx';
import About from './components/About/About.jsx';


function App() {
  return (
    <>
      <Background />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />}  />
        <Route path="/about" element={<About />}  />
        {/* <Route path="/about" element={<Pizzas />} />
        <Route path="/portafolio" element={<Bebidas />} /> */}
      </Routes>

    </>
  );
}

export default App;

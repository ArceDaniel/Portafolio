import Nav from './components/Nav/Nav.jsx'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Background from './components/Background/Background.jsx';
import Home from './components/Home/home.jsx';


function App() {
  return (
    <>
      <Background />
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/about" element={<Pizzas />} />
        <Route path="/skills" element={<Empanadas />}  />
        <Route path="/portafolio" element={<Bebidas />} /> */}
      </Routes>

    </>
  );
}

export default App;

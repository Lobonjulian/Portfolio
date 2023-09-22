import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/secciones/NavBar';
import About from './components/pages/About'
import Inicio from './components/pages/Inicio'
import Proyectos from './components/pages/Proyectos'
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider >
        <div>
          <NavBar />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/about" element={<About />} />
              <Route path="/proyectos" element={<Proyectos />} />
            </Routes>
        </div>
    </ChakraProvider>
  )
}

export default App

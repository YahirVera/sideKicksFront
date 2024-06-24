import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Novedades from './components/Novedades';
import Originals from './components/Originals';
import Footer from './components/Footer';
import Zapatillas from './components/Zapatillas';
import Ropa from './components/Ropa';
import Shop from './components/shop';
import Pedidos from './components/Pedidos';  // Importa el nuevo componente Pedidos

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<><Carousel /><Novedades /><Originals /></>} />
                    <Route path="/novedades" element={<Novedades />} />
                    <Route path="/sidekicksoriginals" element={<Originals />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/zapatillas" element={<Zapatillas />} />
                    <Route path="/ropa" element={<Ropa />} />
                    <Route path="/pedidos" element={<Pedidos />} />  {/* Añade la nueva ruta */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
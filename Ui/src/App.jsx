import './App.css';
import './output.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Galleries from './pages/Galleries';
import IndoorAssembly from './pages/Services/IndoorAssembly';
import OutdoorAssembly from './pages/Services/OutdoorAssembly';
import Delivery from './pages/Services/Delivery';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './pages/Shop/Shop'
import { CartProvider } from './pages/Shop/CartContext'

function App() {
  return (
    <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/indoor-furniture-assembly' element={<IndoorAssembly />} />
          <Route path='/outdoor-furniture-assembly' element={<OutdoorAssembly />} />
          <Route path='/furniture-delivery' element={<Delivery />} />
          <Route path='/Galleries' element={<Galleries />} />
          <Route path='/About' element={<About />} />
          <Route path='/Shop' element={<Shop />} />
        </Routes>
        <Footer />
    </CartProvider>
  );
}

export default App;

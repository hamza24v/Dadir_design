import './output.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Galleries from './pages/Galleries';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './pages/Shop/Shop'
import { CartProvider } from './pages/Shop/CartContext'
import Completion from './pages/Shop/Completion';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/galleries' element={<Galleries />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/success' element={<Completion />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;

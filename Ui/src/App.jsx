import './App.css';
import './output.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Galleries from './pages/Galleries';
import Services from './pages/Services';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Galleries' element={<Galleries />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

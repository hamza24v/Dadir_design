import './App.css';
import './output.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Galleries from './pages/Galleries';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/galleries' element={<Galleries />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

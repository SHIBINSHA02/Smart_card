import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Signin } from './components/Auth/Signin/Signin';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Footer />
            </>
          } 
        />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
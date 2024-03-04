import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/Projects';
import About from './routes/About';
import Contact from './routes/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Otherpage from './routes/Otherpage';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/projects' Component={Projects}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='*' Component={Otherpage}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

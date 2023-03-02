import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import HomeOne from './pages/home-one/HomeOne';
import './style/index.css'

function App() {
  return (
    <div className='section'>
       <Header />
       <Routes>
               <Route path="/" element={<HomeOne />} />
       </Routes>
    </div>
  );
}

export default App;

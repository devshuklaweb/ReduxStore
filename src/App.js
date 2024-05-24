import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';//for router-com v6
import Home from './components/Home';
import Shop from './components/Shop';
import ViewCart from './components/ViewCart';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progess, setProgress] = useState(100);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progess}
        />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/viewcart" element={<ViewCart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
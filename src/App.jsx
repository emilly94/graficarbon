import React, { useEffect } from "react";

import "./style/css/global.css";
import Navbar from "./components/Navbar";
import Header from "./pages/Header";
import About from "./components/About";
import Products from "./pages/Products";
import Footer from "./components/Footer";

import AOS from 'aos';

function App() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  }, []);
  return (
    <div>
      <Navbar />
      <Header/>
      <About id="about"/>
      <Products id="produtos"/>
      <Footer id="footer"/>
    </div>
  );
}

export default App;

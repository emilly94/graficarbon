import React, { useEffect } from "react";

import "./style/css/global.css";
import Navbar from "./components/Navbar";
import Header from "./pages/Header";
import About from "./components/About";
import Products from "./pages/Products";
import Footer from "./components/Footer";

import AOS from 'aos';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

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
      <WhatsAppWidget phoneNumber='5511997454459' message='Olá, em que posso ajudar?' companyName='Graficarbon' textReplyTime='Atendimento das 8h as 16h' sendButton='Enviar Mensagem' placeholder='Digite uma mensagem'/>
    </div>
  );
}

export default App;

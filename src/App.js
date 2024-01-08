import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Announcementbar,HeroSection,Navbar,Feature,Feature2,Component1,Testimonial,CalltoAction,Footer,Logocloud, Email} from './components'
import './App.css';
function App() {
  return (
    
   <div className="mainapp">
        <Announcementbar/>
        <Navbar/>
        <HeroSection/>
        <Logocloud/>
        <Feature/>
        <Feature2/>
        <Component1/>
        <Testimonial/>
        <CalltoAction/>
        <Footer/> 
         <Email/>
   </div>

   

   
        
     
    
  );
}

export default App;

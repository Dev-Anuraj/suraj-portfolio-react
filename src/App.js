import React, { useState } from "react";
import "./App.css";
import "./Darktheme.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/Scrollup/ScrollUp";
import ParticlesComponent from './components/ParticlesBackground/ParticlesBackground';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark-theme", !darkTheme);
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} darkTheme={darkTheme} />
      <main className="main">
       <ParticlesComponent />
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Qualification />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollUp />
      </main>
    </>
  );
};

export default App;

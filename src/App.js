import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";


export default function App(){
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}